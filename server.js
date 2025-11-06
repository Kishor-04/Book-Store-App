import express from 'express';
import session from 'express-session';
import flash from 'connect-flash';
import methodOverride from 'method-override';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import { loadUser } from './middleware/authMiddleware.js';

// Load environment variables
dotenv.config();

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize express app
const app = express();

// Connect to database
connectDB();

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

// Session middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'your-secret-key-change-this',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
    },
  })
);

// Flash messages
app.use(flash());

// Load user middleware (makes user available in all views)
app.use(loadUser);

// Flash messages middleware
app.use((req, res, next) => {
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  res.locals.adminPath = process.env.ADMIN_URL_PATH || '/admin-secret-dashboard';
  next();
});

// Import routes
import indexRoutes from './routes/index.js';
import authRoutes from './routes/auth.js';
import adminRoutes from './routes/admin.js';
import userRoutes from './routes/user.js';
import apiRoutes from './routes/api.js';
import paymentRoutes from './routes/payment.js';

// Use routes
app.use('/', indexRoutes);
app.use('/auth', authRoutes);
app.use(process.env.ADMIN_URL_PATH || '/admin-secret-dashboard', adminRoutes);
app.use('/user', userRoutes);
app.use('/api', apiRoutes);
app.use('/payment', paymentRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).render('error', {
    title: 'Page Not Found',
    message: 'The page you are looking for does not exist',
    error: { status: 404 },
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).render('error', {
    title: 'Error',
    message: err.message || 'Something went wrong',
    error: process.env.NODE_ENV === 'development' ? err : {},
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📖 Book Store: http://localhost:${PORT}`);
  console.log(`🔐 Admin Panel: http://localhost:${PORT}${process.env.ADMIN_URL_PATH || '/admin-secret-dashboard'}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
});

export default app;
