import { forwardRef } from "react";
import Inner from "../Inner";

const Categorie = forwardRef(({categorie}, ref) => {
    return(
        <div ref={ref}>
            <Inner className="section-header categorie-header">
                <div>
                    <h3 className="sub-section-title">{categorie.title}</h3>
                    <p>{categorie.subTitle}</p>
                    <div className="categorie-content">
                        <div>
                            <iframe 
                                width="315" 
                                height="560" 
                                src="https://youtube.com/shorts/pL4mDwgyEb8?si=p2tK1Sif9R8BMdFO" 
                                title="YouTube Short" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen>
                            </iframe>
                        </div>
                        <div>
                            <iframe 
                                width="315" 
                                height="560" 
                                src="https://youtube.com/shorts/pL4mDwgyEb8?si=p2tK1Sif9R8BMdFO" 
                                title="YouTube Short" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen>
                            </iframe>
                        </div>
                        <div>
                            <iframe 
                                width="315" 
                                height="560" 
                                src="https://youtube.com/shorts/pL4mDwgyEb8?si=p2tK1Sif9R8BMdFO" 
                                title="YouTube Short" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                </div>
            </Inner>
        </div>
    )
});

Categorie.displayName = 'Categorie';

export default Categorie;