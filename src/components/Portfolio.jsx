import { useEffect, useRef, useState, useCallback } from "react";
import Inner from "./Inner";
import Categorie from "./portfolio/Categorie";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Portfolio({categories}) {
    const categoriesRef = useRef([]);
    const menuRef = useRef(null);
    const activeIndexRef = useRef(-1);
    const [activeIndex, setActiveIndex] = useState(0);

    const setActive = useCallback((index) => {
        if (activeIndexRef.current === index) return;
        activeIndexRef.current = index;
        setActiveIndex(index);

        const menuItems = menuRef.current ? Array.from(menuRef.current.querySelectorAll("li")) : [];
        menuItems.forEach(li => li.classList.remove("active"));
        if (menuItems[index]) menuItems[index].classList.add("active");
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-out'
        });
    }, []);

    useEffect(() => {
        const cards = categoriesRef.current.filter(Boolean);
        const menuItems = menuRef.current ? Array.from(menuRef.current.querySelectorAll("li")) : [];

        if (!cards.length || !menuItems.length) return;

        // Activer le premier élément au montage
        setActive(0);

        const handleScroll = () => {
            const cards = categoriesRef.current.filter(Boolean);
            if (!cards.length) return;

            const viewportMiddle = window.scrollY + window.innerHeight / 2;
            const portfolioSection = document.getElementById('portfolio');
            
            if (!portfolioSection) return;

            const portfolioRect = portfolioSection.getBoundingClientRect();
            const portfolioTop = portfolioRect.top + window.scrollY;
            const portfolioBottom = portfolioTop + portfolioRect.height;

            // Si on n'est pas dans la section portfolio, ne rien faire
            if (viewportMiddle < portfolioTop || viewportMiddle > portfolioBottom) return;

            // Trouver la section la plus proche du centre de l'écran
            let closestIndex = 0;
            let closestDistance = Infinity;

            cards.forEach((card, index) => {
                const rect = card.getBoundingClientRect();
                const cardCenter = rect.top + rect.height / 2;
                const screenCenter = window.innerHeight / 2;
                const distance = Math.abs(cardCenter - screenCenter);

                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestIndex = index;
                }
            });

            // Vérifier si on a scrollé au-delà de la dernière section
            const lastCard = cards[cards.length - 1];
            const lastRect = lastCard.getBoundingClientRect();
            if (lastRect.bottom <= window.innerHeight) {
                closestIndex = cards.length - 1;
            }

            setActive(closestIndex);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });

        // CLICK TO SCROLL
        const clickHandlers = [];
        menuItems.forEach((li, i) => {
            li.style.cursor = "pointer";
            const handleClick = (e) => {
                e.preventDefault();
                const target = cards[i];
                if (!target) return;

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
                setActive(i);
            };
            li.addEventListener("click", handleClick);
            clickHandlers.push({ li, handleClick });
        });

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clickHandlers.forEach(({ li, handleClick }) => {
                li.removeEventListener("click", handleClick);
            });
        };
    }, [categories, setActive]);

    return(
        <>
            <section id="portfolio" className="portfolio">
                <Inner className="section-header portfolio-section-header">
                    <div data-aos="fade-up">
                        <h2 className="section-title">Travaux récents sélectionnés</h2>
                        <p>
                            Une sélection de projets récents réalisés en direct ou en support agence.
                        </p>
                        <div className="video" data-aos="zoom-in" data-aos-delay="200">
                            {
                                /* 
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/NpEaa2P7qZI?si=ZDmo9kr3Wuixs7Ln" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                            */
                            }

                            <a
                            className="button secondary"
                            href="#portfolio-section-2"
                            onClick={e => {
                                e.preventDefault();
                                const section = document.getElementById('portfolio-section-2');
                                if (section) {
                                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }
                            }}
                            >
                            Voir mes projets
                            </a>
                        </div>
                        <img 
                            className="scroll-gif" 
                            src={`/images/icons/down.gif`} 
                            alt="Scroll down"
                            data-aos="fade-down"
                            data-aos-delay="400"
                        />
                    </div>
                </Inner>

                <Inner className="portfolio-section-2" >
                    <div 
                        className="sticky-div categories"
                        data-aos="fade-right"
                        data-aos-offset="100"
                    >
                        <ul ref={menuRef}>
                            {
                                categories.map((element, index) => (
                                    <li 
                                        key={index}
                                        data-aos="fade-left"
                                        data-aos-delay={index * 100}
                                    >
                                        {element.title}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="categories-sections"  id="portfolio-section-2" >
                        {
                            categories.map((element, index) => (
                                <Categorie 
                                    key={index} 
                                    categorie={element}
                                    ref={el => categoriesRef.current[index] = el}
                                />
                            ))
                        }
                    </div>
                </Inner>
            </section>
        </>
    );
}

export default Portfolio;