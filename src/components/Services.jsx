import { useEffect } from 'react';
import Inner from "./Inner";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Services({services}){
    
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-out'
        });
    }, []);

    return (
        <>
        
            <section id="services" className="services">
                <Inner className="section-header">
                    <div data-aos="fade-up">
                        <h2 className="section-title">Services</h2>
                        <p>
                            Je propose une gamme de services pour vous aider à atteindre vos objectifs de contenu digital
                        </p>
                    </div>
                </Inner>
                <Inner className="services-list">
                    {services.map((service, index) => (
                        <div 
                            key={index} 
                            id={index} 
                            className="service-item"
                            data-aos="fade-up"
                            data-aos-delay={index * 200}
                        >
                            <img 
                                className={`service-icon ${service.icon}`} 
                                src={`/images/icons/${service.icon}`} 
                                alt={service.name}
                            />
                            <div>
                                <h3 className="service-title">{service.name}</h3>
                                <p className="service-description">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </Inner>
            </section>
        
        </>
    );
}

export default Services;