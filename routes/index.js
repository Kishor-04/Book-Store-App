import express from 'express';
import * as publicController from '../controllers/publicController.js';

const router = express.Router();

// Public routes
router.get('/', publicController.home);
router.get('/about', publicController.about);
router.get('/contact', publicController.contact);
router.get('/help', publicController.help);
router.get('/categories', publicController.categories);

export default router;
