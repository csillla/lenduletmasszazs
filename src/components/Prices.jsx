import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Prices.module.css";
import Card from "./Card";

import card1 from "../assets/card_1.jpg";
import card2 from "../assets/card_2.jpg";
import card3 from "../assets/card_3.jpg";

gsap.registerPlugin(ScrollTrigger);

function Prices({ id }) {
    const sectionRef = useRef(null);
    const pinRef = useRef(null);
    const trackRef = useRef(null);
    const bgWrapRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
        const track = trackRef.current;
        const section = sectionRef.current;
        const pin = pinRef.current;

        const cards = gsap.utils.toArray(track.children);
    
        const scrollLength = track.scrollWidth - window.innerWidth;

        const bgLayers = gsap.utils.toArray(
            bgWrapRef.current.querySelectorAll(`.${styles.bgLayer}`)
        );

        if (!bgLayers.length) return;
          
          // initial state
        gsap.set(bgLayers, { opacity: 0 });
        gsap.set(bgLayers[0], { opacity: 1 });
  
        // Section ONLY provides vertical space
        gsap.set(section, {
            height: window.innerHeight + scrollLength
        });


      // Pin ONLY the viewport
      const horizontalTween = gsap.to(track, {
        x: -scrollLength,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${scrollLength}`,
          scrub: true,
          pin: pin,                 // 👈 IMPORTANT
          pinSpacing: false,        // 👈 IMPORTANT
          anticipatePin: 1,
          invalidateOnRefresh: true
        }
      });

      cards.forEach((card, index) => {
        ScrollTrigger.create({
          trigger: section,
          start: () =>
            horizontalTween.scrollTrigger.start +
            (scrollLength / cards.length) * index,
          end: () =>
            horizontalTween.scrollTrigger.start +
            (scrollLength / cards.length) * (index + 1),
      
          onEnter: () => {
            gsap.to(bgLayers, { opacity: 0, duration: 0.3 });
            gsap.to(bgLayers[index], { opacity: 1, duration: 0.4 });
          },
      
          onEnterBack: () => {
            gsap.to(bgLayers, { opacity: 0, duration: 0.3 });
            gsap.to(bgLayers[index], { opacity: 1, duration: 0.4 });
          }
        });
      });
    }, sectionRef);
  
    return () => ctx.revert();
  }, []);
  
  

  return (
    <div id={id} className={styles.pricesSectionWrapper}>
        <div className={styles.fixed}>
            <div className={styles.fixedSticky}>
                <div className={styles.bgHalf} ref={bgWrapRef}>
                    <div className={styles.bgLayer} style={{ backgroundImage: `url(${card1})` }}></div>
                    <div className={styles.bgLayer} style={{ backgroundImage: `url(${card2})` }}></div>
                    <div className={styles.bgLayer} style={{ backgroundImage: `url(${card3})` }}></div>
                </div>
            </div>
        </div>
        <section ref={sectionRef} className={styles.pricesSection}>
            
            <div ref={pinRef} className={styles.pricesSticky}>
                <div
                ref={trackRef}
                className={styles.scrollContainer}
                >
                    <Card 
                    price="9000 Ft" text="30 perc" dataBg={card1} image={card1} />
                    <Card
                    price="15000 Ft" text="60 perc" dataBg={card2} image={card2} />
                    <Card
                    price="20000 Ft" text="90 perc" dataBg={card3} image={card3} />
                </div>
            </div>
        </section>
        <div className={styles.fixedUp}>
            <div className={styles.fixedSticky}>
                <div className={styles.titleHalf}>
                    <h2 className={styles.title}>Legyen rövid szünet vagy igazi kikapcsolódás, itt megtalálod a neked valót.</h2>
                </div>
                <div className={`firstBorder ${styles.border}`}></div>
                <div className={`secondBorder ${styles.border}`}></div>
                <div className={`thirdBorder ${styles.border}`}></div>
                <div className={`fourthBorder ${styles.border}`}></div>
                
            </div>
        </div>
    </div>
    
  );
}

export default Prices;
