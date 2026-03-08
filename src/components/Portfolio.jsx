import { useEffect, useRef } from "react";
import Inner from "./Inner";
import Categorie from "./portfolio/Categorie";

function Portfolio({categories}) {
    const categoriesRef = useRef([]);
    const menuRef = useRef(null);

    useEffect(() => {
        const cards = categoriesRef.current.filter(Boolean);
        const menuItems = menuRef.current ? Array.from(menuRef.current.querySelectorAll("li")) : [];

        if (!cards.length || !menuItems.length) return;

        // helper: set active
        function setActive(index) {
            menuItems.forEach(li => li.classList.remove("active"));
            if (menuItems[index]) menuItems[index].classList.add("active");
        }

        // 1) SCROLL SPY (100% in view)
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.intersectionRatio === 1) {
                    const idx = cards.indexOf(entry.target);
                    if (idx !== -1) setActive(idx);
                }
            });
        }, { threshold: 1 });

        cards.forEach(card => observer.observe(card));

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
            cards.forEach(card => observer.unobserve(card));
        };
    }, [categories]);

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
                        <img className="scroll-gif" src={`/images/icons/down.gif`} />
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