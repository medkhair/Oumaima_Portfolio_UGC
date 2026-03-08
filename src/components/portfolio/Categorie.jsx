import { forwardRef } from "react";
import Inner from "../Inner";

const Categorie = forwardRef(({categorie}, ref) => {
    return(
        <div ref={ref}>
            <Inner className="section-header categorie-header">
                <div>
                    <h3 
                        className="sub-section-title"
                        data-aos="fade-up"
                    >
                        {categorie.title}
                    </h3>
                    <p 
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        {categorie.subTitle}
                    </p>
                    <div className={`categorie-content ${categorie.format}`}>
                        {
                            categorie.format === "reel" ?
                                categorie.content.map((videoUrl, index) => (
                                    <div 
                                        key={index} 
                                        className="video-wrapper"
                                        data-aos="fade-up"
                                        data-aos-delay={index * 150}
                                    >
                                        <iframe
                                            src={`https://player.vimeo.com/video/${videoUrl}?title=0&byline=0&portrait=0`}
                                            width="100%"
                                            height="100%"
                                            frameBorder="0"
                                            loading="lazy"
                                            allow="autoplay; fullscreen; picture-in-picture"
                                            title={`${categorie.title} - Video ${index + 1}`}
                                        ></iframe>
                                    </div>
                                )) : 
                                categorie.content.map((imageUrl, index) => (
                                    <div 
                                        key={index} 
                                        className="image-wrapper"
                                        data-aos="zoom-in"
                                        data-aos-delay={index * 100}
                                    >
                                        <img 
                                            src={`/images/oumaima/${imageUrl}`}
                                            alt={`${categorie.title} ${index + 1}`}
                                            loading="lazy"
                                        />
                                    </div>
                                ))
                        }
                    </div>
                </div>
            </Inner>
        </div>
    )
});

Categorie.displayName = 'Categorie';

export default Categorie;