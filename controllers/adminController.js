import { Book } from '../models/Book.js';
import { User } from '../models/User.js';
import { Category } from '../models/Category.js';

// Admin Dashboard
export const dashboard = async (req, res) => {
  try {
    const [bookCount, userCount, categoryCount, recentBooks] = await Promise.all([
      Book.countDocuments(),
      User.countDocuments(),
      Category.countDocuments(),
      Book.find().sort({ createdAt: -1 }).limit(5).populate('category'),
    ]);

    res.render('admin/dashboard', {
      title: 'Admin Dashboard',
      bookCount,
      userCount,
      categoryCount,
      recentBooks,
    });
  } catch (error) {
    console.error('Admin dashboard error:', error);
    req.flash('error', 'Failed to load dashboard');
    res.redirect('/');
  }
};

// Books Management
export const showBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 }).populate('category');
    const categories = await Category.find({ isActive: true });

    res.render('admin/books', {
      title: 'Manage Books',
      books,
      categories,
    });
  } catch (error) {
    console.error('Show books error:', error);
    req.flash('error', 'Failed to load books');
    res.redirect(process.env.ADMIN_URL_PATH || '/admin-secret-dashboard');
  }
};

// Create book
export const createBook = async (req, res) => {
  try {
    const { title, author, publishYear, category, description, isbn, price, stock } = req.body;

    const bookData = {
      title,
      author,
      publishYear,
      category: category || null,
      description,
      isbn,
      price,
      stock,
    };

    // Add cover image if uploaded
    if (req.file) {
      bookData.coverImage = '/uploads/books/' + req.file.filename;
    }

    await Book.create(bookData);

    req.flash('success', 'Book created successfully');
    res.redirect(`${process.env.ADMIN_URL_PATH || '/admin-secret-dashboard'}/books`);
  } catch (error) {
    console.error('Create book error:', error);
    req.flash('error', error.message || 'Failed to create book');
    res.redirect('back');
  }
};

// Show edit book form
export const showEditBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).populate('category');
    const categories = await Category.find({ isActive: true });

    if (!book) {
      req.flash('error', 'Book not found');
      return res.redirect(`${process.env.ADMIN_URL_PATH || '/admin-secret-dashboard'}/books`);
    }

    res.render('admin/book-edit', {
      title: 'Edit Book',
      book,
      categories,
    });
  } catch (error) {
    console.error('Show edit book error:', error);
    req.flash('error', 'Failed to load book');
    res.redirect(`${process.env.ADMIN_URL_PATH || '/admin-secret-dashboard'}/books`);
  }
};

// Update book
export const updateBook = async (req, res) => {
  try {
    const { title, author, publishYear, category, description, isbn, price, stock } = req.body;

    const updateData = {
      title,
      author,
      publishYear,
      category: category || null,
      description,
      isbn,
      price,
      stock,
    };

    // Add cover image if uploaded
    if (req.file) {
      updateData.coverImage = '/uploads/books/' + req.file.filename;
    }

    const book = await Book.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!book) {
      req.flash('error', 'Book not found');
      return res.redirect(`${process.env.ADMIN_URL_PATH || '/admin-secret-dashboard'}/books`);
    }

    req.flash('success', 'Book updated successfully');
    res.redirect(`${process.env.ADMIN_URL_PATH || '/admin-secret-dashboard'}/books`);
  } catch (error) {
    console.error('Update book error:', error);
    req.flash('error', error.message || 'Failed to update book');
    res.redirect('back');
  }
};

// Delete book
export const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);

    if (!book) {
      req.flash('error', 'Book not found');
    } else {
      req.flash('success', 'Book deleted successfully');
    }

    res.redirect(`${process.env.ADMIN_URL_PATH || '/admin-secret-dashboard'}/books`);
  } catch (error) {
    console.error('Delete book error:', error);
    req.flash('error', 'Failed to delete book');
    res.redirect('back');
  }
};

// Users Management
export const showUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });

    res.render('admin/users', {
      title: 'Manage Users',
      users,
    });
  } catch (error) {
    console.error('Show users error:', error);
    req.flash('error', 'Failed to load users');
    res.redirect(process.env.ADMIN_URL_PATH || '/admin-secret-dashboard');
  }
};

// Toggle user status
export const toggleUserStatus = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      req.flash('error', 'User not found');
      return res.redirect('back');
    }

    user.isActive = !user.isActive;
    await user.save();

    req.flash('success', `User ${user.isActive ? 'activated' : 'deactivated'} successfully`);
    res.redirect('back');
  } catch (error) {
    console.error('Toggle user status error:', error);
    req.flash('error', 'Failed to update user status');
    res.redirect('back');
  }
};

// Create user
export const createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      req.flash('error', 'User with this email already exists');
      return res.redirect('back');
    }

    await User.create({
      name,
      email,
      password,
      role: role || 'user',
      isActive: true,
    });

    req.flash('success', 'User created successfully');
    res.redirect(`${process.env.ADMIN_URL_PATH || '/admin-secret-dashboard'}/users`);
  } catch (error) {
    console.error('Create user error:', error);
    req.flash('error', error.message || 'Failed to create user');
    res.redirect('back');
  }
};

// Show edit user form
export const showEditUser = async (req, res) => {
  try {
    const editUser = await User.findById(req.params.id);

    if (!editUser) {
      req.flash('error', 'User not found');
      return res.redirect(`${process.env.ADMIN_URL_PATH || '/admin-secret-dashboard'}/users`);
    }

    res.render('admin/user-edit', {
      title: 'Edit User',
      editUser,
    });
  } catch (error) {
    console.error('Show edit user error:', error);
    req.flash('error', 'Failed to load user');
    res.redirect(`${process.env.ADMIN_URL_PATH || '/admin-secret-dashboard'}/users`);
  }
};

// Update user
export const updateUser = async (req, res) => {
  try {
    const { name, email, role, isActive } = req.body;

    const updateData = {
      name,
      email,
      role,
      isActive: isActive === 'true',
    };

    // Update password only if provided
    if (req.body.password && req.body.password.trim() !== '') {
      updateData.password = req.body.password;
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      req.flash('error', 'User not found');
      return res.redirect(`${process.env.ADMIN_URL_PATH || '/admin-secret-dashboard'}/users`);
    }

    req.flash('success', 'User updated successfully');
    res.redirect(`${process.env.ADMIN_URL_PATH || '/admin-secret-dashboard'}/users`);
  } catch (error) {
    console.error('Update user error:', error);
    req.flash('error', error.message || 'Failed to update user');
    res.redirect('back');
  }
};

// Delete user
export const deleteUser = async (req, res) => {
  try {
    // Prevent deleting own account
    if (req.params.id === req.session.userId) {
      req.flash('error', 'Cannot delete your own account');
      return res.redirect('back');
    }

    const deletedUser = await User.findByIdAndDelete(req.params.id);

    if (!deletedUser) {
      req.flash('error', 'User not found');
    } else {
      req.flash('success', 'User deleted successfully');
    }

    res.redirect(`${process.env.ADMIN_URL_PATH || '/admin-secret-dashboard'}/users`);
  } catch (error) {
    console.error('Delete user error:', error);
    req.flash('error', 'Failed to delete user');
    res.redirect('back');
  }
};

// Show payments
export const showPayments = async (req, res) => {
  try {
    const { default: Payment } = await import('../models/Payment.js');
    const payments = await Payment.find()
      .sort({ createdAt: -1 })
      .populate('user', 'name email')
      .populate('book', 'title author price');

    // Calculate statistics
    const totalRevenue = payments
      .filter(p => p.status === 'completed')
      .reduce((sum, p) => sum + p.amount, 0);

    const pendingPayments = payments.filter(p => p.status === 'pending').length;
    const completedPayments = payments.filter(p => p.status === 'completed').length;
    const failedPayments = payments.filter(p => p.status === 'failed').length;

    res.render('admin/payments', {
      title: 'Payment Management',
      payments,
      totalRevenue,
      pendingPayments,
      completedPayments,
      failedPayments,
    });
  } catch (error) {
    console.error('Show payments error:', error);
    req.flash('error', 'Failed to load payments');
    res.redirect(process.env.ADMIN_URL_PATH || '/admin-secret-dashboard');
  }
};
