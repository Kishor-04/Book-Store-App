// Middleware to check if user is authenticated
export const isAuthenticated = (req, res, next) => {
  if (req.session && req.session.userId) {
    return next();
  }
  req.flash('error', 'Please log in to access this page');
  res.redirect('/auth/login');
};

// Middleware to check if user is already logged in (redirect to dashboard)
export const isGuest = (req, res, next) => {
  if (req.session && req.session.userId) {
    return res.redirect(req.session.userRole === 'admin' ? process.env.ADMIN_URL_PATH || '/admin-secret-dashboard' : '/user/dashboard');
  }
  next();
};

// Middleware to pass user info to all views
export const loadUser = async (req, res, next) => {
  res.locals.user = null;
  res.locals.isAuthenticated = false;
  res.locals.isAdmin = false;

  if (req.session && req.session.userId) {
    try {
      const { User } = await import('../models/User.js');
      const user = await User.findById(req.session.userId).select('-password');
      
      if (user && user.isActive) {
        res.locals.user = user;
        res.locals.isAuthenticated = true;
        res.locals.isAdmin = user.role === 'admin';
      } else {
        // User not found or inactive - clear session
        req.session.destroy();
      }
    } catch (error) {
      console.error('Load user error:', error);
    }
  }
  
  next();
};
