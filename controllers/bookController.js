import { Book } from '../models/Book.js';
import { Category } from '../models/Category.js';

// Get all books
export const getAllBooks = async (req, res) => {
  try {
    const { search, category, sort } = req.query;
    let query = { isActive: true };

    // Search
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { author: { $regex: search, $options: 'i' } },
      ];
    }

    // Filter by category
    if (category) {
      query.category = category;
    }

    // Build query
    let booksQuery = Book.find(query).populate('category');

    // Sort
    if (sort === 'title') {
      booksQuery = booksQuery.sort({ title: 1 });
    } else if (sort === 'author') {
      booksQuery = booksQuery.sort({ author: 1 });
    } else if (sort === 'year') {
      booksQuery = booksQuery.sort({ publishYear: -1 });
    } else {
      booksQuery = booksQuery.sort({ createdAt: -1 });
    }

    const books = await booksQuery;

    res.json({
      success: true,
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.error('Get all books error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to fetch books',
    });
  }
};

// Get single book
export const getBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).populate('category');

    if (!book) {
      return res.status(404).json({
        success: false,
        message: 'Book not found',
      });
    }

    res.json({
      success: true,
      data: book,
    });
  } catch (error) {
    console.error('Get book error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to fetch book',
    });
  }
};

// Get categories
export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find({ isActive: true }).sort({ name: 1 });

    res.json({
      success: true,
      count: categories.length,
      data: categories,
    });
  } catch (error) {
    console.error('Get categories error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to fetch categories',
    });
  }
};
