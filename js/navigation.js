document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById('mainNav');
    const isHomePage = window.location.pathname === '/' || window.location.pathname.endsWith('index.html');
    const prefix = isHomePage ? '../pages/' : '../pages/';
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
    
    nav.innerHTML = `
        <div class="logo-container nav-animated">
            <img src="${isHomePage ? '' : '../'}images/CityMar-removebg-preview.png" alt="Logo" class="img-fluid">
        </div>
        ${createNavLink('index', 'Accueil', isHomePage ? '' : 'index.html')}
        ${createNavLink('plages', 'Plages', prefix + 'plages.html')}
        ${createNavLink('jardins', 'Jardins', prefix + '../pages/jardins.html')}
        ${createNavLink('sites-culturels', 'Sites Culturels', prefix + '../pages/sites-culturels.html')}
        ${createNavLink('montagnes', 'Montagnes', prefix + '../pages/montagnes.html')}
        ${createNavLink('restaurants', 'Restaurants', prefix + '../pages/restaurants.html')}
        ${createNavLink('centres-commerciaux', 'Centres Commerciaux', prefix + '../pages/centres-commerciaux.html')}
        ${createNavLink('hotels', 'Hôtels', prefix + '../pages/hotels.html')}
        ${createNavLink('activites', 'Activités', prefix + '../pages/activites.html')}
        ${createNavLink('musees', 'Musées', prefix + '../pages/musees.html')}
    `;

    // Add animation classes to location cards
    document.querySelectorAll('.location-card').forEach((card, index) => {
        card.classList.add('fade-in');
        card.style.animationDelay = `${index * 0.1}s`;
    });

    function createNavLink(page, text, href) {
        const isActive = currentPage === page || (page === 'index' && currentPage === '');
        return `<a href="${href}" class="${isActive ? 'active' : ''}">${text}</a>`;
    }
});