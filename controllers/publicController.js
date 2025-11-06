import { Book } from '../models/Book.js';
import { Category } from '../models/Category.js';

// Home page
export const home = async (req, res) => {
  try {
    const [books, categories] = await Promise.all([
      Book.find({ isActive: true }).sort({ createdAt: -1 }).limit(12).populate('category'),
      Category.find({ isActive: true }).sort({ name: 1 }),
    ]);

    res.render('index', {
      title: 'Home - Book Store',
      books,
      categories,
    });
  } catch (error) {
    console.error('Home page error:', error);
    res.render('index', {
      title: 'Home - Book Store',
      books: [],
      categories: [],
    });
  }
};

// About page
export const about = (req, res) => {
  res.render('about', {
    title: 'About Us',
  });
};

// Contact page
export const contact = (req, res) => {
  res.render('contact', {
    title: 'Contact Us',
  });
};

// Help page
export const help = (req, res) => {
  res.render('help', {
    title: 'Help & FAQ',
  });
};

// Categories page
export const categories = async (req, res) => {
  try {
    const categories = await Category.find({ isActive: true }).sort({ name: 1 });

    // Get book count for each category
    const categoriesWithCount = await Promise.all(
      categories.map(async (cat) => {
        const count = await Book.countDocuments({ category: cat._id, isActive: true });
        return {
          ...cat.toObject(),
          bookCount: count,
        };
      })
    );

    res.render('categories', {
      title: 'Categories',
      categories: categoriesWithCount,
    });
  } catch (error) {
    console.error('Categories page error:', error);
    res.render('categories', {
      title: 'Categories',
      categories: [],
    });
  }
};
