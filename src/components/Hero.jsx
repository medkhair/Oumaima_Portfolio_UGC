import Inner from './Inner';

import heroImage from '../../public/images/oumaima/DSC01844.jpg';

function Hero({person}){
    return(
        <>
            <section id="hero" className="main">
                <Inner className="hero">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            {person.firstName} {person.lastName}
                        </h1>
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
                    </div>
                    <div className="hero-image">
                        <img src={heroImage} alt={`${person.firstName} ${person.lastName}`} />
                    </div>
                </Inner>
            </section>
        </>
    )
}

export default Hero;