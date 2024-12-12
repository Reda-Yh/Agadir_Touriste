document.addEventListener('DOMContentLoaded', function () {
    const footer = document.getElementById('mainFooter');
    const isHomePage = window.location.pathname === '/' || window.location.pathname.endsWith('index.html');
    const prefix = isHomePage ? '' : '../';

    footer.innerHTML = `
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">
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
                            <li><i class="fas fa-phone"></i> +212 605-006-993 | Marouane Hajjouj </li>
                            <li><i class="fas fa-phone"></i> +212 651-834-041 | Reda Yahya </li>
                            <li><i class="fas fa-envelope"></i> Marouane.hajjouj@e-polytechnique.ma</li>
                            <li><i class="fas fa-envelope"></i> Reda.yahya@e-polytechnique.ma</li>
                            <li><i class="fas fa-map-marker-alt"></i> Agadir, Maroc</li>
                        </ul>
                    </div>
                    
                    <div class="col-md-4 footer-section">
                        <h3>Suivez-nous</h3><div class="social-links">
    <a href="https://www.linkedin.com/in/reda-yahya-920976253/" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
    <a href="https://github.com/Reda-Yh" aria-label="GitHub"><i class="fab fa-github"></i></a>
    <a href="https://discord.gg/tckCRRqUaa" aria-label="Discord"><i class="fab fa-discord"></i></a>
</div>

                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="container">
                    <p>&copy; 2024 Reda Yahya & Marouane Hajjouj. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    `;
});