import { User } from '../models/User.js';

// Middleware to verify admin role
export const isAdmin = async (req, res, next) => {
  try {
    if (!req.session || !req.session.userId) {
      req.flash('error', 'Access denied. Please log in.');
      return res.redirect('/auth/login');
    }

    const user = await User.findById(req.session.userId);
    
    if (!user || user.role !== 'admin') {
      req.flash('error', 'Access denied. Admin privileges required.');
      return res.redirect('/');
    }

    next();
  } catch (error) {
    console.error('Admin middleware error:', error);
    req.flash('error', 'An error occurred');
    res.redirect('/');
  }
};

// Middleware to verify secret admin URL path
export const verifyAdminURL = (req, res, next) => {
  const adminPath = process.env.ADMIN_URL_PATH || '/admin-secret-dashboard';
  
  // Check if the request path starts with the admin path
  if (req.path.startsWith(adminPath) || req.path.startsWith('/admin')) {
    return next();
  }
  
  // If accessing admin routes without proper path, redirect
  res.status(404).render('error', { 
    message: 'Page not found',
    error: { status: 404 }
  });
};
