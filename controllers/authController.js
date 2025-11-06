import { User } from '../models/User.js';

// Show registration page
export const showRegister = (req, res) => {
  res.render('register', { title: 'Register' });
};

// Handle registration
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      req.flash('error', 'Email already registered');
      return res.redirect('/auth/register');
    }

    // Create new user
    const user = await User.create({
      name,
      email,
      password, // Will be hashed by pre-save hook
      role: 'user',
    });

    req.flash('success', 'Registration successful! Please log in.');
    res.redirect('/auth/login');
  } catch (error) {
    console.error('Registration error:', error);
    req.flash('error', error.message || 'Registration failed');
    res.redirect('/auth/register');
  }
};

// Show login page
export const showLogin = (req, res) => {
  res.render('login', { title: 'Login' });
};

// Handle login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user and include password field
    const user = await User.findOne({ email }).select('+password');
    
    if (!user || !(await user.matchPassword(password))) {
      req.flash('error', 'Invalid email or password');
      return res.redirect('/auth/login');
    }

    if (!user.isActive) {
      req.flash('error', 'Your account has been deactivated');
      return res.redirect('/auth/login');
    }

    // Update last login
    user.lastLogin = new Date();
    await user.save();

    // Set session
    req.session.userId = user._id;
    req.session.userRole = user.role;

    req.flash('success', `Welcome back, ${user.name}!`);

    // Redirect based on role
    if (user.role === 'admin') {
      res.redirect(process.env.ADMIN_URL_PATH || '/admin-secret-dashboard');
    } else {
      res.redirect('/user/dashboard');
    }
  } catch (error) {
    console.error('Login error:', error);
    req.flash('error', 'Login failed');
    res.redirect('/auth/login');
  }
};

// Handle logout
export const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Logout error:', err);
    }
    res.redirect('/');
  });
};
