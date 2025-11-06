import express from 'express';
import * as adminController from '../controllers/adminController.js';
import { isAdmin } from '../middleware/adminMiddleware.js';
import { validateBook } from '../middleware/validate.js';
import { upload } from '../config/multer.js';

const router = express.Router();

// Use admin prefix from env or default
const adminPath = process.env.ADMIN_URL_PATH || '/admin-secret-dashboard';

// Admin Dashboard
router.get('/', isAdmin, adminController.dashboard);

// Books Management
router.get('/books', isAdmin, adminController.showBooks);
router.post('/books', isAdmin, upload.single('coverImage'), validateBook, adminController.createBook);
router.get('/books/:id/edit', isAdmin, adminController.showEditBook);
router.post('/books/:id', isAdmin, upload.single('coverImage'), validateBook, adminController.updateBook);
router.post('/books/:id/delete', isAdmin, adminController.deleteBook);

// Users Management
router.get('/users', isAdmin, adminController.showUsers);
router.post('/users/:id/toggle', isAdmin, adminController.toggleUserStatus);
router.post('/users', isAdmin, adminController.createUser);
router.post('/users/:id/delete', isAdmin, adminController.deleteUser);
router.get('/users/:id/edit', isAdmin, adminController.showEditUser);
router.post('/users/:id/update', isAdmin, adminController.updateUser);

// Payments Management
router.get('/payments', isAdmin, adminController.showPayments);

export default router;
