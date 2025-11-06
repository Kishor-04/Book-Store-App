import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Book title is required'],
      trim: true,
    },
    author: {
      type: String,
      required: [true, 'Author name is required'],
      trim: true,
    },
    publishYear: {
      type: Number,
      required: [true, 'Publish year is required'],
      min: [1000, 'Publish year must be valid'],
      max: [new Date().getFullYear() + 1, 'Publish year cannot be in the future'],
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
    },
    description: {
      type: String,
      trim: true,
    },
    isbn: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      min: 0,
    },
    stock: {
      type: Number,
      default: 0,
      min: 0,
    },
    coverImage: {
      type: String,
      default: '/images/default-book-cover.png',
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Index for search
bookSchema.index({ title: 'text', author: 'text', description: 'text' });

export const Book = mongoose.model('Book', bookSchema);
