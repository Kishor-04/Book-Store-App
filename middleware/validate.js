// Simple validation helper functions
export const validateEmail = (email) => {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(String(email).toLowerCase());
};

export const validatePassword = (password) => {
  return password && password.length >= 6;
};

export const validateRequired = (value) => {
  return value && value.toString().trim().length > 0;
};

// Middleware to validate registration
export const validateRegister = (req, res, next) => {
  const { name, email, password, confirmPassword } = req.body;
  const errors = [];

  if (!validateRequired(name)) {
    errors.push('Name is required');
  }

  if (!validateEmail(email)) {
    errors.push('Valid email is required');
  }

  if (!validatePassword(password)) {
    errors.push('Password must be at least 6 characters');
  }

  if (password !== confirmPassword) {
    errors.push('Passwords do not match');
  }

  if (errors.length > 0) {
    req.flash('error', errors.join(', '));
    return res.redirect('back');
  }

  next();
};

// Middleware to validate login
export const validateLogin = (req, res, next) => {
  const { email, password } = req.body;
  const errors = [];

  if (!validateEmail(email)) {
    errors.push('Valid email is required');
  }

  if (!validateRequired(password)) {
    errors.push('Password is required');
  }

  if (errors.length > 0) {
    req.flash('error', errors.join(', '));
    return res.redirect('back');
  }

  next();
};

// Middleware to validate book
export const validateBook = (req, res, next) => {
  const { title, author, publishYear } = req.body;
  const errors = [];

  if (!validateRequired(title)) {
    errors.push('Book title is required');
  }

  if (!validateRequired(author)) {
    errors.push('Author name is required');
  }

  const year = parseInt(publishYear);
  if (!year || year < 1000 || year > new Date().getFullYear() + 1) {
    errors.push('Valid publish year is required');
  }

  if (errors.length > 0) {
    req.flash('error', errors.join(', '));
    return res.redirect('back');
  }

  next();
};
