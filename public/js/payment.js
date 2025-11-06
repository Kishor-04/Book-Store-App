// Payment functionality using Razorpay

async function buyBook(bookId, bookTitle, bookPrice, button) {
  try {
    // Show loading
    const originalText = button.innerHTML;
    button.disabled = true;
    button.innerHTML = '<i class="fas fa-spinner fa-spin mr-1"></i> Processing...';

    // Create order
    const response = await fetch('/payment/create-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ bookId }),
    });

    const data = await response.json();

    if (!data.success) {
      throw new Error(data.message || 'Failed to create order');
    }

    // Initialize Razorpay
    const options = {
      key: data.keyId,
      amount: data.order.amount,
      currency: data.order.currency,
      name: 'BookVault',
      description: `Purchase: ${bookTitle}`,
      order_id: data.order.id,
      handler: async function (response) {
        // Verify payment
        try {
          const verifyResponse = await fetch('/payment/verify', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          });

          const verifyData = await verifyResponse.json();

          if (verifyData.success) {
            // Show success message
            alert('Payment successful! Thank you for your purchase.');
            window.location.href = '/user/dashboard';
          } else {
            alert('Payment verification failed. Please contact support.');
          }
        } catch (error) {
          console.error('Verification error:', error);
          alert('Payment verification failed. Please contact support.');
        }
      },
      prefill: {
        name: '',
        email: '',
        contact: '',
      },
      theme: {
        color: '#2563eb',
      },
      modal: {
        ondismiss: function () {
          button.disabled = false;
          button.innerHTML = originalText;
        },
      },
    };

    const rzp = new Razorpay(options);
    
    rzp.on('payment.failed', function (response) {
      alert('Payment failed: ' + response.error.description);
      button.disabled = false;
      button.innerHTML = originalText;
    });

    rzp.open();

    // Reset button after modal opens
    button.disabled = false;
    button.innerHTML = originalText;

  } catch (error) {
    console.error('Payment error:', error);
    alert('Failed to initiate payment. Please try again.');
    
    // Reset button
    button.disabled = false;
    button.innerHTML = '<i class="fas fa-shopping-cart mr-1"></i> Buy Now';
  }
}

// Event delegation for buy buttons
document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('buy-book-btn') || e.target.closest('.buy-book-btn')) {
      const button = e.target.classList.contains('buy-book-btn') ? e.target : e.target.closest('.buy-book-btn');
      const bookId = button.getAttribute('data-book-id');
      const bookTitle = button.getAttribute('data-book-title');
      const bookPrice = parseFloat(button.getAttribute('data-book-price'));
      
      buyBook(bookId, bookTitle, bookPrice, button);
    }
  });
});
