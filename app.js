let currentSort = 'year';
let selectedBooks = new Set();

// Load selection from URL hash if present
function loadFromHash() {
    const hash = window.location.hash.substring(1);
    if (hash) {
        try {
            const decoded = atob(hash);
            const ids = decoded.split(',').map(id => parseInt(id));
            selectedBooks = new Set(ids);
            renderBooks();
        } catch (e) {
            console.error('Invalid hash:', e);
        }
    }
}

// Generate hash from selected books
function generateHash() {
    if (selectedBooks.size === 0) {
        document.getElementById('hashOutput').textContent = 'Keine Bücher ausgewählt!';
        return;
    }
    const ids = Array.from(selectedBooks).sort((a, b) => a - b).join(',');
    const encoded = btoa(ids);
    document.getElementById('hashOutput').textContent = encoded;
    window.location.hash = encoded;
}

// Load selection from hash input
function loadHashFromInput() {
    const hashInput = document.getElementById('hashInput').value.trim();
    if (!hashInput) {
        alert('Bitte einen Hash eingeben!');
        return;
    }
    try {
        const decoded = atob(hashInput);
        const ids = decoded.split(',').map(id => parseInt(id));
        selectedBooks = new Set(ids);
        window.location.hash = hashInput;
        renderBooks();
    } catch (e) {
        alert('Ungültiger Hash!');
    }
}

// Render books to the page
function renderBooks(filter = '') {
    const booksList = document.getElementById('booksList');
    booksList.innerHTML = '';
    
    let displayBooks = allWorks;
    
    // Filter by search
    if (filter) {
        const lowerFilter = filter.toLowerCase();
        displayBooks = displayBooks.filter(book => 
            book.titleEn.toLowerCase().includes(lowerFilter) ||
            book.titleDe.toLowerCase().includes(lowerFilter)
        );
    }
    
    // Sort
    if (currentSort === 'title') {
        displayBooks = [...displayBooks].sort((a, b) => a.titleEn.localeCompare(b.titleEn));
    }
    
    // Render cards
    displayBooks.forEach(book => {
        const card = document.createElement('div');
        card.className = 'book-card';
        if (selectedBooks.has(book.id)) {
            card.classList.add('owned');
        }
        
        card.innerHTML = `
            <div style="position: relative;">
                <div class="book-year">📅 ${book.year}</div>
                <div class="book-title-en">${book.titleEn}</div>
                <div class="book-title-de">→ ${book.titleDe}</div>
                <div style="margin-top: 15px; display: flex; align-items: center; gap: 10px;">
                    <input type="checkbox" class="book-checkbox" ${selectedBooks.has(book.id) ? 'checked' : ''} />
                    <label style="cursor: pointer; flex: 1; margin: 0;">Vorhanden</label>
                </div>
            </div>
        `;
        
        const checkbox = card.querySelector('.checkbox');
        card.addEventListener('click', () => {
            if (selectedBooks.has(book.id)) {
                selectedBooks.delete(book.id);
            } else {
                selectedBooks.add(book.id);
            }
            renderBooks(filter);
        });
        
        booksList.appendChild(card);
    });
}

// Event listeners
document.getElementById('sortByYear').addEventListener('click', function() {
    currentSort = 'year';
    document.getElementById('sortByYear').classList.add('btn-active');
    document.getElementById('sortByTitle').classList.remove('btn-active');
    renderBooks(document.getElementById('searchInput').value);
});

document.getElementById('sortByTitle').addEventListener('click', function() {
    currentSort = 'title';
    document.getElementById('sortByTitle').classList.add('btn-active');
    document.getElementById('sortByYear').classList.remove('btn-active');
    renderBooks(document.getElementById('searchInput').value);
});

document.getElementById('searchInput').addEventListener('input', function(e) {
    renderBooks(e.target.value);
});

document.getElementById('generateHash').addEventListener('click', generateHash);
document.getElementById('loadHash').addEventListener('click', loadHashFromInput);

// Initialize
loadFromHash();
renderBooks();
