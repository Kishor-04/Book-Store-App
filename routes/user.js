import express from 'express';
import { isAuthenticated } from '../middleware/authMiddleware.js';

const router = express.Router();

// User Dashboard
router.get('/dashboard', isAuthenticated, (req, res) => {
  res.render('user/dashboard', {
    title: 'My Dashboard',
  });
});

// User Profile
router.get('/profile', isAuthenticated, (req, res) => {
  res.render('user/profile', {
    title: 'My Profile',
  });
});

export default router;
