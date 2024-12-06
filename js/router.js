const routes = {
    plages: {
        title: 'Les Plages',
        background: 'plages-bg.jpg',
        items: [
            'Plage d\'Agadir: Avenue Hassan II',
            'Taghazout: Route Nationale 1',
            'Plage Imourane: Village Tamraght',
            // ... other beaches
        ]
    },
    jardins: {
        title: 'Les Jardins',
        background: 'jardins-bg.jpg',
        items: [
            'Jardin Olhao: Avenue des FAR',
            'Vallée des Oiseaux: Rue 20 Août',
            'Jardin Ibn Zaidoun: Boulevard Hassan II',
            // ... other gardens
        ]
    },
    // ... other sections
};

function loadSection(sectionId) {
    const section = routes[sectionId];
    if (!section) return;

    return `
        <div class="box" id="${sectionId}" style="background-image: url('images/${section.background}')">
            <h2>${section.title}</h2>
            <input type="text" id="search-input-${sectionId}" 
                   placeholder="Recherchez dans ${section.title.toLowerCase()}..." 
                   onkeyup="searchByCategory('${sectionId}')">
            ${section.items.map(item => `<div class="route">${item}</div>`).join('')}
        </div>
    `;
}