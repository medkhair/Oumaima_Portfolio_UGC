import { useEffect, useRef, useState } from "react";
import Inner from "./Inner";
import Categorie from "./portfolio/Categorie";

function Portfolio({categories}) {
    const categoriesRef = useRef([]);
    const menuRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const cards = categoriesRef.current.filter(Boolean);
        const menuItems = menuRef.current ? Array.from(menuRef.current.querySelectorAll("li")) : [];

        if (!cards.length || !menuItems.length) return;

        // helper: set active
        function setActive(index) {
            setActiveIndex(index);
            menuItems.forEach(li => li.classList.remove("active"));
            if (menuItems[index]) menuItems[index].classList.add("active");
        }

        // 1) SCROLL SPY - Utilise scroll event pour plus de précision
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            let currentIndex = 0;
            cards.forEach((card, index) => {
                const rect = card.getBoundingClientRect();
                const cardTop = rect.top + window.scrollY;
                const cardBottom = cardTop + rect.height;

                if (scrollPosition >= cardTop && scrollPosition <= cardBottom) {
                    currentIndex = index;
                }
            });

            if (currentIndex !== activeIndex) {
                setActive(currentIndex);
            }
        };

        // Déclencher au montage et à chaque scroll
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });

        // 2) CLICK TO SCROLL
        menuItems.forEach((li, i) => {
            li.style.cursor = "pointer";
            const handleClick = (e) => {
                e.preventDefault();
                const target = cards[i];
                if (!target) return;

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
                setActive(i);
            };
            li.addEventListener("click", handleClick);
        });

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [categories, activeIndex]);

    return(
        <>
            <section id="portfolio" className="portfolio">
                <Inner className="section-header portfolio-section-header">
                    <div>
                        <h2 className="section-title">Travaux récents sélectionnés</h2>
                        <p>
                            Une sélection de projets récents réalisés en direct ou en support agence.
                        </p>
                        <div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/NpEaa2P7qZI?si=ZDmo9kr3Wuixs7Ln" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                        <img className="scroll-gif" src={`/images/icons/down.gif`} alt="Scroll down" />
                    </div>
                </Inner>

                <Inner className="portfolio-section-2">
                    <div className="sticky-div categories">
                        <ul ref={menuRef}>
                            {
                                categories.map((element, index) => (
                                    <li key={index}>{element.title}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="categories-sections">
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