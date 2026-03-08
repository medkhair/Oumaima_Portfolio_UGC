import Inner from "./Inner";

function Footer({person}) {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer id="footer" className="footer">
                <Inner className="footer-content">
                    <div className="footer-section">
                        <h3 className="footer-title">{person.firstName} {person.lastName}</h3>
                        <p className="footer-description">
                            Creative Content Partner pour agences
                        </p>
                    </div>
                    
                    <div className="footer-section">
                        <h4 className="footer-heading">Navigation</h4>
                        <ul className="footer-links">
                            <li><a href="#hero">Accueil</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#propos">À propos</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-heading">Suivez-moi</h4>
                        <div className="footer-social">
                            
                            <a href="https://www.tiktok.com/@oumaimamahdidi_?_r=1&_t=ZS-94WK9ZyAU1E" target="_blank" rel="noopener noreferrer" className="social-link">
                                <i className="bi bi-tiktok"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/oumaima-mahdidi/" target="_blank" rel="noopener noreferrer" className="social-link">
                                <i className="bi bi-linkedin"></i>
                            </a>
                            <a href="https://www.instagram.com/oumaimamahdidi_?igsh=MXBxcWM5emNlZXFkMw==" target="_blank" rel="noopener noreferrer" className="social-link">
                                <i className="bi bi-instagram"></i>
                            </a>
                        </div>
                    </div>
                </Inner>

                <div className="footer-bottom">
                    <Inner>
                        <p className="footer-copyright">
                            © {currentYear} {person.firstName} {person.lastName}. Tous droits réservés.
                        </p>
                        <p className="footer-credit">
                            Développé par <a href="https://medkhair.com" target="_blank" rel="noopener noreferrer">Medkhair</a>
                        </p>
                    </Inner>
                </div>
            </footer>
        </>
    );
}

export default Footer;