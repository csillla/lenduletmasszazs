import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from './About.module.css'
import BoxIntro from './BoxIntro'

gsap.registerPlugin(ScrollTrigger);


export default function About({id}) {

    const gridRef = useRef(null);
    const firstPhaseRef = useRef(null);
    const secondPhaseRef = useRef(null);
    const phase2Ref = useRef(null);
    const phase3Ref = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const offset1 = window.innerHeight * 1.2;
            const offset2 = window.innerHeight * 2.8;
    
          // FIRST TRIGGER
          ScrollTrigger.create({
            trigger: gridRef.current,
            start: `top top-=${offset1}`, 
            // end: "top+=380vh top",
            scrub: true,
            onEnter: () => {
              firstPhaseRef.current.classList.add(styles.transparent);
              gridRef.current.classList.add(styles.phase1Active);
            },
            onLeaveBack: () => {
              firstPhaseRef.current.classList.remove(styles.transparent);
              gridRef.current.classList.remove(styles.phase1Active);
            }
          });
    
          // SECOND TRIGGER
          ScrollTrigger.create({
            trigger: gridRef.current,
            start: `top top-=${offset2}`, 
            // end: "top+=480vh top",
            scrub: true,
            onEnter: () => {
              secondPhaseRef.current.classList.add(styles.transparent);
              gridRef.current.classList.add(styles.phase2Active);
            },
            onLeaveBack: () => {
              secondPhaseRef.current.classList.remove(styles.transparent);
              gridRef.current.classList.remove(styles.phase2Active);
            }
          });
    
        });
        return () => ctx.revert();
      }, []);


    return (
        <section id={id} className={`${styles.about}`}>
            <div className={styles.gridMainAb} ref={gridRef}>
                <div className={styles.firstBoxWrapper}>
                    <BoxIntro className={styles.firstBox}>
                              <div>
                                <span>Jó helyen jársz, ha</span>
                                <ul className={styles.boxList}>
                                  <li>egy fontos versenyre készülsz</li>
                                  <li>sérülésből épülsz fel vagy megelőznéd azt</li>
                                  <li>újra kezdenéd az aktív sportolást</li>
                                  <li>egy felszabadító masszázsra vágysz</li>
                                </ul>
                              </div>
                    </BoxIntro>
                </div>
                <div className={styles.secondBoxWrapper}>
                    <BoxIntro className={styles.secondBox} ref={phase2Ref}>
                        <div>
                          Az intergált manuális kezelésemmel ezekben mind a segítségedre lehetek. Ez kicsit bővebben azt jelenti, hogy a masszázsok során minden általam ismert fogásból, technikából és eszközből kiválasztom azokat melyekkel a Te céljaid elérését a leghatékonyabban támogathatom.
                        </div>
                    </BoxIntro>
                </div>
                <div className={styles.thirdBoxWrapper}>
                    <BoxIntro className={styles.thirdBox} ref={phase3Ref}>
                      <div>
                        Jelenlegi tudásom bázisát a gyógy- és sportmasszőri képesítésem adja, mely szilárd alapokat jelent anatómiai ismeretek terén. Több éves gyakorlati tapasztalat mellett elsajátítottam Korokan, Teate és Myofasciális fogásokat, eszköztáramba bekerült a fascia-kés, köpöly és kinezio-tape.
                      </div>
                    </BoxIntro>
                </div>
                <div className={styles.firstBorderAb}></div>
                <div className={styles.secondBorderAb}></div>
                <div className={styles.thirdBorderAb}></div>
                <div className={styles.fourthBorderAb}>
                    
                </div>
                <div className={`${styles.bigBg} ${styles.phase3}`}></div>
                <div className={`${styles.bigBg} ${styles.phase2}`} ref={secondPhaseRef}></div>
                <div className={`${styles.bigBg} ${styles.phase1}`} ref={firstPhaseRef}></div>
            </div>
        </section>
    )
}