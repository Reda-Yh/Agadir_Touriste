document.addEventListener('DOMContentLoaded', function () {
    const footer = document.getElementById('mainFooter');
    const isHomePage = window.location.pathname === '/' || window.location.pathname.endsWith('index.html');
    const prefix = isHomePage ? '' : '../';

    footer.innerHTML = `
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 footer-section">
                        <h3>À propos</h3>
                        <p>Découvrez les merveilles d'Agadir à travers notre guide complet des lieux à visiter et des activités à faire.</p>
                    </div>
                    
                    <div class="col-md-4 footer-section">
                        <h3>Contact</h3>
                        <ul class="contact-info">
                            <li><i class="fas fa-phone"></i> +212 528-XXX-XXX</li>
                            <li><i class="fas fa-envelope"></i> contact@agadir-guide.ma</li>
                            <li><i class="fas fa-map-marker-alt"></i> Agadir, Maroc</li>
                        </ul>
                    </div>
                    
                    <div class="col-md-4 footer-section">
                        <h3>Suivez-nous</h3>
                        <div class="social-links">
                            <a href="#"><i class="fab fa-facebook"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="container">
                    <p>&copy; 2024 Agadir Guide. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    `;
});