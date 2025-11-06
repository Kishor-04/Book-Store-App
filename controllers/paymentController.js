import Razorpay from 'razorpay';
import crypto from 'crypto';
import { Payment } from '../models/Payment.js';
import { Book } from '../models/Book.js';

// Initialize Razorpay
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Create order
export const createOrder = async (req, res) => {
  try {
    const { bookId } = req.body;
    const book = await Book.findById(bookId);

    if (!book) {
      return res.status(404).json({ success: false, message: 'Book not found' });
    }

    // Create Razorpay order
    const options = {
      amount: book.price * 100, // amount in paise
      currency: 'INR',
      receipt: `book_${bookId}_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    // Save payment record
    const payment = await Payment.create({
      user: req.session.userId,
      book: bookId,
      razorpayOrderId: order.id,
      amount: book.price,
      currency: 'INR',
      status: 'pending',
    });

    res.json({
      success: true,
      order: {
        id: order.id,
        amount: order.amount,
        currency: order.currency,
      },
      book: {
        id: book._id,
        title: book.title,
        author: book.author,
        price: book.price,
      },
      keyId: process.env.RAZORPAY_KEY_ID,
    });
  } catch (error) {
    console.error('Create order error:', error);
    res.status(500).json({ success: false, message: 'Failed to create order' });
  }
};

// Verify payment
export const verifyPayment = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    // Verify signature
    const sign = razorpay_order_id + '|' + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(sign.toString())
      .digest('hex');

    if (razorpay_signature === expectedSign) {
      // Payment verified successfully
      const payment = await Payment.findOne({ razorpayOrderId: razorpay_order_id });

      if (payment) {
        payment.razorpayPaymentId = razorpay_payment_id;
        payment.razorpaySignature = razorpay_signature;
        payment.status = 'completed';
        await payment.save();

        req.flash('success', 'Payment successful! Thank you for your purchase.');
        res.json({ success: true, message: 'Payment verified successfully' });
      } else {
        res.status(404).json({ success: false, message: 'Payment record not found' });
      }
    } else {
      // Payment verification failed
      const payment = await Payment.findOne({ razorpayOrderId: razorpay_order_id });
      if (payment) {
        payment.status = 'failed';
        payment.failureReason = 'Signature verification failed';
        await payment.save();
      }

      res.status(400).json({ success: false, message: 'Payment verification failed' });
    }
  } catch (error) {
    console.error('Verify payment error:', error);
    res.status(500).json({ success: false, message: 'Failed to verify payment' });
  }
};

// Get user payments
export const getUserPayments = async (req, res) => {
  try {
    const payments = await Payment.find({ user: req.session.userId })
      .sort({ createdAt: -1 })
      .populate('book', 'title author price coverImage');

    res.render('user/payments', {
      title: 'My Payments',
      payments,
    });
  } catch (error) {
    console.error('Get user payments error:', error);
    req.flash('error', 'Failed to load payments');
    res.redirect('/user/dashboard');
  }
};
