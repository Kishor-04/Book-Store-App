import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Category } from './models/Category.js';

dotenv.config();

const categories = [
  { name: 'Fiction', description: 'Fictional stories and novels', icon: '📚', isActive: true },
  { name: 'Non-Fiction', description: 'Real-life stories and facts', icon: '📖', isActive: true },
  { name: 'Science', description: 'Scientific books and research', icon: '🔬', isActive: true },
  { name: 'Technology', description: 'Tech and programming books', icon: '💻', isActive: true },
  { name: 'History', description: 'Historical books and biographies', icon: '📜', isActive: true },
  { name: 'Business', description: 'Business and entrepreneurship', icon: '💼', isActive: true },
  { name: 'Self-Help', description: 'Personal development books', icon: '🌟', isActive: true },
  { name: 'Mystery', description: 'Mystery and thriller novels', icon: '🔍', isActive: true },
  { name: 'Romance', description: 'Romantic stories', icon: '💝', isActive: true },
  { name: 'Fantasy', description: 'Fantasy and adventure', icon: '🐉', isActive: true },
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
