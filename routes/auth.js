import express from 'express';
import * as authController from '../controllers/authController.js';
import { isGuest } from '../middleware/authMiddleware.js';
import { validateRegister, validateLogin } from '../middleware/validate.js';

const router = express.Router();

// Registration
router.get('/register', isGuest, authController.showRegister);
router.post('/register', isGuest, validateRegister, authController.register);

// Login
router.get('/login', isGuest, authController.showLogin);
router.post('/login', isGuest, validateLogin, authController.login);

// Logout
router.get('/logout', authController.logout);

export default router;
