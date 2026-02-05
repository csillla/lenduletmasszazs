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
  const rootRef = useRef(null);
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const trackRef = useRef(null);
  const bgWrapRef = useRef(null);
  const priceTagsRef = useRef(null);
  const titleHalfRef = useRef(null);
  const overlayRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const pin = pinRef.current;
      const track = trackRef.current;
      const cards = gsap.utils.toArray(track.children);
      const bgLayers = gsap.utils.toArray(bgWrapRef.current.children);
      const priceTags = gsap.utils.toArray(priceTagsRef.current.children);
  
      const getScrollLength = () => track.scrollWidth - window.innerWidth;

      const setScrollLength = () => {
        section.style.setProperty(
          "--scroll-length",
          `${getScrollLength()}px`
        );
      };

      setScrollLength();

      const isDesktop = () =>
        window.matchMedia("(hover: hover) and (pointer: fine)").matches;
      
      const onResize = () => {
        if (!isDesktop()) return; // ignore mobile UI changes
        setScrollLength();
        ScrollTrigger.refresh();
      };
      
      window.addEventListener("resize", onResize);
      
  
      
  
      // ---------------- Horizontal scroll tween ----------------
      let expanded = false;
      const horizontalTween = gsap.to(track, {
        x: () => -getScrollLength(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getScrollLength()}`,
          scrub: true,
          pin: pin,
          pinSpacing: true,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const isMobile = window.matchMedia("(max-width:768px)").matches;
            const titleHalf = titleHalfRef.current;
            const overlay = overlayRef.current;
            if (self.progress >= 0.999 && !expanded) {
              expanded = true;
              if (isMobile && overlay) gsap.to(overlay, { width: "100%", duration: 0.6, ease: "power2.out" });
              else gsap.to(titleHalf, { width: "50%", duration: 0.6, ease: "power2.out" });
            }
            if (self.progress < 0.999 && expanded) {
              expanded = false;
              if (isMobile && overlay) gsap.to(overlay, { width: 0, duration: 0.4, ease: "power2.inOut" });
              else gsap.to(titleHalf, { width: "50%", duration: 0.4, ease: "power2.inOut" });
            }
          }
        }
      });
  
      // ---------------- ScrollTriggers for cards ----------------
      cards.forEach((card, i) => {
        ScrollTrigger.create({
          trigger: section,
          start: () => horizontalTween.scrollTrigger.start + (getScrollLength() / cards.length) * i,
          end: () => horizontalTween.scrollTrigger.start + (getScrollLength() / cards.length) * (i + 1),
          onEnter: () => { gsap.to(bgLayers, { opacity: 0, duration: 0.3 }); gsap.to(bgLayers[i], { opacity: 1, duration: 0.4 }); gsap.to(priceTags[i], { width: "100%", duration: 0.4, ease: "power2.out" }); },
          onEnterBack: () => { gsap.to(bgLayers, { opacity: 0, duration: 0.3 }); gsap.to(bgLayers[i], { opacity: 1, duration: 0.4 }); gsap.to(priceTags[i], { width: "100%", duration: 0.4, ease: "power2.out" }); },
          onLeaveBack: () => gsap.to(priceTags[i], { width: 0, duration: 0.3, ease: "power2.in" })
        });
      });
  
      
  
    }, rootRef);
  
    return () => ctx.revert();
  }, []);
  

  return (
    <div id={id} ref={rootRef} className={styles.pricesSectionWrapper}>
      <div className={styles.fixed}>
        <div className={styles.fixedSticky}>
          <div className={styles.bgHalf} ref={bgWrapRef}>
            <div
              className={styles.bgLayer}
              style={{ backgroundImage: `url(${card1})` }}
            ></div>
            <div
              className={styles.bgLayer}
              style={{ backgroundImage: `url(${card2})` }}
            ></div>
            <div
              className={styles.bgLayer}
              style={{ backgroundImage: `url(${card3})` }}
            ></div>
          </div>
        </div>
      </div>

      <section ref={sectionRef} className={styles.pricesSection}>
        <div ref={pinRef} className={styles.pricesSticky}>
          <div ref={trackRef} className={styles.scrollContainer}>
            <Card price="9000 Ft" time="30 perc" text="Gyors felfrissülés a mindennapi rohanásban." dataBg={card1} image={card1} />
            <Card price="15000 Ft" time="60 perc" text="Az aranyközépút." dataBg={card2} image={card2} />
            <Card price="20000 Ft" time="90 perc" text="Ha a problémák mélyére szeretnél ásni."  dataBg={card3} image={card3} />
          </div>
        </div>
      </section>

      <div className={styles.fixedUp}>
        <div className={styles.fixedSticky}>
          <div className={styles.titleHalf} ref={titleHalfRef}>
            <div className={styles.titleOverlay} ref={overlayRef} />
            <h2 className={styles.title}>Árlista</h2>
            <div ref={priceTagsRef}>
              <div className={styles.priceTag}>
                <div className={styles.priceTagInnerWrapper}>
                  <div className={styles.tagTime}>30 perc</div>
                  <div className={styles.tagPrice}>9000 Ft</div>
                </div>
              </div>
              <div className={styles.priceTag}>
                <div className={styles.priceTagInnerWrapper}>
                  <div className={styles.tagTime}>60 perc</div>
                  <div className={styles.tagPrice}>15000 Ft</div>
                </div>
              </div>
              <div className={styles.priceTag}>
                <div className={styles.priceTagInnerWrapper}>
                  <div className={styles.tagTime}>90 perc</div>
                  <div className={styles.tagPrice}>20000 Ft</div>
                </div>
              </div>
            </div>
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