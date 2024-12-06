document.addEventListener('DOMContentLoaded', function() {
    const content = document.getElementById('content');
    
    // Load all sections
    Object.keys(routes).forEach(sectionId => {
        const sectionHTML = loadSection(sectionId);
        if (sectionHTML) {
            const container = document.createElement('div');
            container.innerHTML = sectionHTML;
            content.appendChild(container);
        }
    });

    // Handle navigation
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = e.target.getAttribute('href').substring(1);
            document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        });
    });
});