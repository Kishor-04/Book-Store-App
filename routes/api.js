import express from 'express';
import * as bookController from '../controllers/bookController.js';

const router = express.Router();

// API routes for AJAX calls
router.get('/books', bookController.getAllBooks);
router.get('/books/:id', bookController.getBook);
router.get('/categories', bookController.getCategories);

export default router;
