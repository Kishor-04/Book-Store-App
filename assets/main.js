async function loadBooks(){
  const container = document.getElementById('books');
  container.innerHTML = 'Loading...';
  try{
    const res = await fetch('/books');
    if(!res.ok) throw new Error('Failed to load books');
    const json = await res.json();
    container.innerHTML = '';
    if(!json.data || json.data.length===0){
      container.innerHTML = '<div class="p-4 bg-white rounded shadow">No books found</div>';
      return;
    }
    json.data.forEach(b => {
      const el = document.createElement('div');
      el.className = 'p-4 bg-white rounded shadow';
      el.innerHTML = `
        <h3 class="font-semibold">${b.title}</h3>
        <p class="text-sm text-gray-600">${b.author} — ${b.publishYear}</p>
        <div class="mt-3 flex gap-2">
          <a class="text-sm text-indigo-600" href="/show-book.html?id=${b._id}">View</a>
          <a class="text-sm text-green-600" href="/edit-book.html?id=${b._id}">Edit</a>
          <a class="text-sm text-red-600" href="/delete-book.html?id=${b._id}">Delete</a>
        </div>
      `;
      container.appendChild(el);
    });
  }catch(e){
    container.innerHTML = '<div class="p-4 bg-red-100 text-red-700 rounded">Error loading books</div>';
  }
}

document.getElementById('refresh')?.addEventListener('click', loadBooks);
loadBooks();
