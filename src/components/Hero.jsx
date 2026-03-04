import Inner from './Inner';

import heroImage from '../../public/images/oumaima/DSC01844.jpg';

import { useTypewriter, Cursor } from "react-simple-typewriter";

function Hero({person}){


    const [text, count] = useTypewriter({
        words: [
            person.firstName + " " + person.lastName,
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
                            <button className="button primary">
                                Discuter d'une collaboration
                            </button>
                            <button className="button secondary">
                                Voir mes projets
                            </button>
                        </div>
                        <div className="buttons social-icons">
                            <a href="https://github.com/medkhair" target="_blank" className="button secondary"><i className="bi bi-tiktok" ></i></a>
                            <a href="https://ma.linkedin.com/in/mohammed-khair-souiba-32a59632b" target="_blank" className="button secondary"><i className="bi bi-linkedin" ></i></a>
                            <a href="https://github.com/medkhair" target="_blank" className="button secondary"><i className="bi bi-instagram" ></i></a>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src={heroImage} alt={`${person.firstName} ${person.lastName}`} />
                        
                        {/* Papillon Rose */}
                        <div className="butterfly-container butterfly-1">
                            <svg className="butterfly" viewBox="0 0 100 100" width="60" height="60">
                                <g className="wings">
                                    <ellipse className="left-wing" cx="35" cy="50" rx="20" ry="30" fill="#ff69b4" opacity="0.8"/>
                                    <ellipse className="right-wing" cx="65" cy="50" rx="20" ry="30" fill="#ff1493" opacity="0.8"/>
                                </g>
                                <ellipse cx="50" cy="50" rx="5" ry="15" fill="#333"/>
                            </svg>
                        </div>

                        {/* Papillon Violet */}
                        <div className="butterfly-container butterfly-2">
                            <svg className="butterfly" viewBox="0 0 100 100" width="50" height="50">
                                <g className="wings">
                                    <ellipse className="left-wing" cx="35" cy="50" rx="20" ry="30" fill="#b19cd9" opacity="0.8"/>
                                    <ellipse className="right-wing" cx="65" cy="50" rx="20" ry="30" fill="#8b5cf6" opacity="0.8"/>
                                </g>
                                <ellipse cx="50" cy="50" rx="5" ry="15" fill="#333"/>
                            </svg>
                        </div>

                        {/* Papillon Corail */}
                        <div className="butterfly-container butterfly-3">
                            <svg className="butterfly" viewBox="0 0 100 100" width="55" height="55">
                                <g className="wings">
                                    <ellipse className="left-wing" cx="35" cy="50" rx="20" ry="30" fill="#ffa07a" opacity="0.8"/>
                                    <ellipse className="right-wing" cx="65" cy="50" rx="20" ry="30" fill="#ff6347" opacity="0.8"/>
                                </g>
                                <ellipse cx="50" cy="50" rx="5" ry="15" fill="#333"/>
                            </svg>
                        </div>
                    </div>
                </Inner>
            </section>
        </>
    )
}

export default Hero;