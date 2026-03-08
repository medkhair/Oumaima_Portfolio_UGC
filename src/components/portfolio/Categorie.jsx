import { forwardRef } from "react";
import Inner from "../Inner";

const Categorie = forwardRef(({categorie}, ref) => {
    return(
        <div ref={ref}>
            <Inner className="section-header categorie-header">
                <div>
                    <h3 className="sub-section-title">{categorie.title}</h3>
                    <p>{categorie.subTitle}</p>
                    <div className={`categorie-content ${categorie.format}`}>
                        {
                            categorie.format === "reel" ?
                                categorie.content.map((videoUrl, index) => (
                                    <div key={index} className="video-wrapper">
                                        <iframe
                                                src={`https://player.vimeo.com/video/${videoUrl}?title=0&byline=0&portrait=0`}
                                                width="100%"
                                                height="100%"
                                                frameBorder="0"
                                                loading="lazy"
                                                allow="autoplay; fullscreen; picture-in-picture"
                                                allowFullScreen

                                            ></iframe>
                                    </div>
                                )) : 
                                categorie.content.map((imageUrl, index) => (
                                    <div key={index} className="image-wrapper">
                                        <img src={`/images/oumaima/${imageUrl}`}/>
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