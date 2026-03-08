import Inner from './Inner';

import heroImage from '../../public/images/oumaima/DSC01818.jpg';

import { useTypewriter, Cursor } from "react-simple-typewriter";

function Hero({person}){


    const [text, count] = useTypewriter({
        words: [
            "Hey, moi c’est "+ person.firstName + ", 22 ans ",
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
                    <div className="hero-content">
                        {/* 
                        <h1 className="hero-title">
                            {person.firstName} {person.lastName}
                        </h1>
                        */}
                        <h1 className="hero-title" >{text} <span><Cursor/></span></h1>
                        <h2 className="hero-subtitle">
                            Creative Content Partner pour agences
                        </h2>
                        <p className="hero-description">
                            J'accompagne les agences dans la conception et la production de contenu stratégique, 
                            performant et parfaitement aligné aux standards de leurs clients.
                        </p>
                        <div className="hero-buttons">
                            <a className="button primary" href='#contact' >
                                Discuter d'une collaboration
                            </a>
                            <a className="button secondary" href='#portfolio'>
                                Voir mes projets
                            </a>
                        </div>
                        <div className="buttons social-icons">
                            <a href="https://www.instagram.com/oumaimamahdidi_?igsh=MXBxcWM5emNlZXFkMw==" target="_blank" className="button secondary"><i className="bi bi-instagram" ></i></a>

                            <a href="https://www.tiktok.com/@oumaimamahdidi_?_r=1&_t=ZS-94WK9ZyAU1E" target="_blank" className="button secondary"><i className="bi bi-tiktok" ></i></a>

                            <a href="https://www.linkedin.com/in/oumaima-mahdidi/" target="_blank" className="button secondary"><i className="bi bi-linkedin" ></i></a>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src={heroImage} alt={`${person.firstName} ${person.lastName}`} />
                        
                        {/* Papillon Rose */}
                        <div className="butterfly-container butterfly-1">
                            <img src='/images/icons/Butterfly.gif' />
                        </div>
                        <div className="butterfly-container butterfly-2">
                            <img src='/images/icons/Butterfly.gif' />
                        </div>
                    </div>
                </Inner>
            </section>
        </>
    )
}

export default Hero;