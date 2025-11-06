// Home page specific JavaScript

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const categoryFilter = document.getElementById('categoryFilter');
  const sortSelect = document.getElementById('sortSelect');
  const booksGrid = document.getElementById('booksGrid');

  let debounceTimer;

  const fetchBooks = async () => {
    try {
      BookVault.showLoading();
      
      const params = new URLSearchParams();
      if (searchInput.value) params.append('search', searchInput.value);
      if (categoryFilter.value) params.append('category', categoryFilter.value);
      if (sortSelect.value) params.append('sort', sortSelect.value);

      const response = await fetch(`/api/books?${params.toString()}`);
      const data = await response.json();

      if (data.success) {
        renderBooks(data.data);
      } else {
        BookVault.showError('Failed to load books');
      }
    } catch (error) {
      console.error('Fetch books error:', error);
      BookVault.showError('An error occurred while loading books');
    } finally {
      BookVault.hideLoading();
    }
  };

  const renderBooks = (books) => {
    if (!booksGrid) return;

    if (books.length === 0) {
      booksGrid.innerHTML = `
        <div class="col-span-full text-center py-12">
          <i class="fas fa-book-open text-gray-400 text-6xl mb-4"></i>
          <p class="text-gray-600 text-xl">No books found</p>
        </div>
      `;
      return;
    }

    booksGrid.innerHTML = books
      .map(
        (book) => `
      <div class="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden card-hover">
        <div class="h-48 bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center">
          <i class="fas fa-book text-white text-6xl opacity-75"></i>
        </div>
        <div class="p-4">
          <h3 class="font-bold text-lg text-gray-800 mb-2 truncate" title="${book.title}">
            ${book.title}
          </h3>
          <p class="text-gray-600 text-sm mb-2">
            <i class="fas fa-user mr-1"></i> ${book.author}
          </p>
          <p class="text-gray-500 text-xs mb-3">
            <i class="fas fa-calendar mr-1"></i> ${book.publishYear}
          </p>
          ${
            book.category
              ? `<span class="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
              ${book.category.name}
            </span>`
              : ''
          }
        </div>
      </div>
    `
      )
      .join('');
  };

  // Debounced search
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(fetchBooks, 500);
    });
  }

  // Filters
  if (categoryFilter) {
    categoryFilter.addEventListener('change', fetchBooks);
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', fetchBooks);
  }
});
