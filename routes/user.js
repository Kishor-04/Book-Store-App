import express from 'express';
import { isAuthenticated } from '../middleware/authMiddleware.js';
import { Payment } from '../models/Payment.js';

const router = express.Router();

// User Dashboard
router.get('/dashboard', isAuthenticated, async (req, res) => {
  try {
    const recentPayments = await Payment.find({ user: req.session.userId })
      .sort({ createdAt: -1 })
      .limit(5)
      .populate('book', 'title author coverImage price');

    res.render('user/dashboard', {
      title: 'My Dashboard',
      recentPayments: recentPayments || [],
    });
  } catch (error) {
    console.error('Dashboard error:', error);
    res.render('user/dashboard', {
      title: 'My Dashboard',
      recentPayments: [],
    });
  }
});

// User Profile
router.get('/profile', isAuthenticated, (req, res) => {
  res.render('user/profile', {
    title: 'My Profile',
  });
});

export default router;
