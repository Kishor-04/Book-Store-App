// Main JavaScript for BookVault

// Utility functions
const showLoading = () => {
  const loading = document.getElementById('loading');
  if (loading) loading.classList.remove('hidden');
};

const hideLoading = () => {
  const loading = document.getElementById('loading');
  if (loading) loading.classList.add('hidden');
};

const showError = (message) => {
  console.error(message);
  // You can implement a toast notification here
};

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Profile dropdown toggle
  const profileMenuBtn = document.getElementById('profile-menu-btn');
  const profileDropdown = document.getElementById('profile-dropdown');

  if (profileMenuBtn && profileDropdown) {
    profileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      profileDropdown.classList.toggle('hidden');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!profileMenuBtn.contains(e.target) && !profileDropdown.contains(e.target)) {
        profileDropdown.classList.add('hidden');
      }
    });
  }

  // Auto-hide flash messages
  setTimeout(() => {
    const alerts = document.querySelectorAll('[role="alert"]');
    alerts.forEach((alert) => {
      alert.style.transition = 'opacity 0.5s';
      alert.style.opacity = '0';
      setTimeout(() => alert.remove(), 500);
    });
  }, 5000);

  // Form validation
  const forms = document.querySelectorAll('form');
  forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      const password = form.querySelector('[name="password"]');
      const confirmPassword = form.querySelector('[name="confirmPassword"]');

      if (password && confirmPassword) {
        if (password.value !== confirmPassword.value) {
          e.preventDefault();
          showError('Passwords do not match');
          confirmPassword.classList.add('border-red-500');
        }
      }
    });
  });

  // Confirmation dialogs
  const deleteButtons = document.querySelectorAll('[data-confirm]');
  deleteButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      if (!confirm(button.dataset.confirm || 'Are you sure?')) {
        e.preventDefault();
      }
    });
  });
});

// Export for use in other scripts
window.BookVault = {
  showLoading,
  hideLoading,
  showError,
};
