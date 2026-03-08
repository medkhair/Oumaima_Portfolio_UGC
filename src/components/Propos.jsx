import { useEffect } from 'react';
import Inner from "./Inner";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Propos(){
    
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-out'
        });
    }, []);

    return(
        <>
            <section id="propos" className="propos">
                <Inner className="section-header propos-section-header">
                    <div data-aos="fade-up">
                        <h2 
                            className="section-title"
                            data-aos="fade-right"
                            data-aos-delay="100"
                        >
                            Une approche stratégique du contenu
                        </h2>
                        <p 
                            data-aos="fade-left"
                            data-aos-delay="300"
                        >
                            Je conçois du contenu pensé pour performer, convertir et s'intégrer dans une vision globale.
                            <br /> 
                            <br />
                            Mon objectif : devenir un partenaire fiable sur lequel une agence peut s'appuyer en toute confiance.
                            <br />
                            <br /> 
                            Rigueur, créativité et sens du détail guident chacune de mes collaborations.
                        </p>
                    </div>
                </Inner>
            </section>
        </>
    )
}

export default Propos;