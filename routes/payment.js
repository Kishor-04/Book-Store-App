import express from 'express';
import * as paymentController from '../controllers/paymentController.js';
import { isAuthenticated } from '../middleware/authMiddleware.js';

const router = express.Router();

// Create order
router.post('/create-order', isAuthenticated, paymentController.createOrder);

// Verify payment
router.post('/verify', isAuthenticated, paymentController.verifyPayment);

// User payments
router.get('/my-payments', isAuthenticated, paymentController.getUserPayments);

export default router;
