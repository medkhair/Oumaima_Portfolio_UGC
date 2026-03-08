
import Inner from "./Inner";

function Services({services}){
    return (
        <>
        
            <section id="services" className="services">
                <Inner className="section-header">
                    <div>
                        <h2 className="section-title">Services</h2>
                        <p>
                            I offer a range of services to help you achieve your web development goals, including:
                        </p>
                    </div>
                </Inner>
                <Inner className="services-list">
                    {services.map((service, index) => (
                        <div key={index} id={index} className="service-item">
                            <img className={`service-icon ${service.icon}`} src={`/images/icons/${service.icon}`} />
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