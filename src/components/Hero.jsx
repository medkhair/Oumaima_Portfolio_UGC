import { useEffect } from 'react';
import Inner from './Inner';
import heroImage from '../../public/images/oumaima/DSC01818.jpg';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Hero({person}){

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-out'
        });
    }, []);

    const [text, count] = useTypewriter({
        words: [
            "Hey, moi c'est "+ person.firstName + ", 22 ans ",
        ],
        loop: true,
        delaySpeed: 5000,
        typeSpeed: 100,
        deleteSpeed: 50,
    });

    return(
        <>
            <section id="hero" className="main">
                <Inner className="hero">
                    <div className="hero-content" data-aos="fade-right">
                        <h1 className="hero-title">{text} <span><Cursor/></span></h1>
                        <h2 className="hero-subtitle" data-aos="fade-up" data-aos-delay="200">
                            Créatrice de contenu UGC
                        </h2>
                        <p className="hero-description" data-aos="fade-up" data-aos-delay="400">
                            Je crée des vidéos UGC authentiques et engageantes qui mettent en valeur vos produits, racontent leur histoire et captivent votre audience. Je travaille main dans la main avec les agences pour transformer chaque idée en contenu efficace et mémorable.
                        </p>
                        <div className="hero-buttons" data-aos="fade-up" data-aos-delay="600">
                            <a className="button primary" href='#contact'>
                                Discuter d'une collaboration
                            </a>
                            <a className="button secondary" href='#portfolio'>
                                Voir mes projets
                            </a>
                        </div>
                        <div className="buttons social-icons" data-aos="fade-up" data-aos-delay="800">
                            <a href="https://www.instagram.com/oumaimamahdidi_?igsh=MXBxcWM5emNlZXFkMw==" target="_blank" className="button secondary"><i className="bi bi-instagram"></i></a>
                            <a href="https://www.tiktok.com/@oumaimamahdidi_?_r=1&_t=ZS-94WK9ZyAU1E" target="_blank" className="button secondary"><i className="bi bi-tiktok"></i></a>
                            <a href="https://www.linkedin.com/in/oumaima-mahdidi/" target="_blank" className="button secondary"><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                    <div className="hero-image" data-aos="fade-left" data-aos-delay="400">
                        <img src={heroImage} alt={`${person.firstName} ${person.lastName}`} />
                        
                        <div className="butterfly-container butterfly-1">
                            <img src='/images/icons/Butterfly.gif' alt="Butterfly animation" />
                        </div>
                        <div className="butterfly-container butterfly-2">
                            <img src='/images/icons/Butterfly.gif' alt="Butterfly animation" />
                        </div>
                    </div>
                </Inner>
            </section>
        </>
    )
}

export default Hero;