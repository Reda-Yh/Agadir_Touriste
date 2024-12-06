function searchLocations() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const locationCards = document.querySelectorAll('.location-card');
    let hasResults = false;

    locationCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const details = card.querySelector('.details').textContent.toLowerCase();
        const address = card.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(searchInput) || 
            details.includes(searchInput) || 
            address.includes(searchInput)) {
            card.style.display = 'block';
            card.classList.add('fade-in');
            hasResults = true;
        } else {
            card.style.display = 'none';
            card.classList.remove('fade-in');
        }
    });

    // Show/hide no results message
    const noResults = document.getElementById('no-results');
    if (!hasResults) {
        if (!noResults) {
            const message = document.createElement('div');
            message.id = 'no-results';
            message.className = 'alert alert-info text-center mt-4';
            message.innerHTML = 'Aucun résultat trouvé. Essayez une autre recherche.';
            document.querySelector('.locations-grid').before(message);
        }
    } else if (noResults) {
        noResults.remove();
    }
}

// Debounce search for better performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const debouncedSearch = debounce(searchLocations, 300);

// Add event listener to search input
document.getElementById('search-input').addEventListener('input', debouncedSearch);