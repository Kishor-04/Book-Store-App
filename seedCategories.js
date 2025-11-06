import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Category } from './models/Category.js';

dotenv.config();

const categories = [
  { name: 'Fiction', slug: 'fiction', description: 'Fictional stories and novels', icon: '📚', isActive: true },
  { name: 'Non-Fiction', slug: 'non-fiction', description: 'Real-life stories and facts', icon: '📖', isActive: true },
  { name: 'Science', slug: 'science', description: 'Scientific books and research', icon: '🔬', isActive: true },
  { name: 'Technology', slug: 'technology', description: 'Tech and programming books', icon: '💻', isActive: true },
  { name: 'History', slug: 'history', description: 'Historical books and biographies', icon: '📜', isActive: true },
  { name: 'Business', slug: 'business', description: 'Business and entrepreneurship', icon: '💼', isActive: true },
  { name: 'Self-Help', slug: 'self-help', description: 'Personal development books', icon: '🌟', isActive: true },
  { name: 'Mystery', slug: 'mystery', description: 'Mystery and thriller novels', icon: '🔍', isActive: true },
  { name: 'Romance', slug: 'romance', description: 'Romantic stories', icon: '💝', isActive: true },
  { name: 'Fantasy', slug: 'fantasy', description: 'Fantasy and adventure', icon: '🐉', isActive: true },
];

async function seedCategories() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing categories
    await Category.deleteMany({});
    console.log('Cleared existing categories');

    // Insert new categories
    const result = await Category.insertMany(categories);
    console.log(`✅ Seeded ${result.length} categories successfully`);

    process.exit(0);
  } catch (error) {
    console.error('Error seeding categories:', error);
    process.exit(1);
  }
}

seedCategories();
