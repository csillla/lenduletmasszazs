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
            const offset1 = window.innerHeight * 0.4;
            const offset2 = window.innerHeight * 2;
    
          // FIRST TRIGGER
          ScrollTrigger.create({
            trigger: gridRef.current,
            start: `top top-=${offset1}`, 
            // end: "top+=300vh top",
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
            // end: "top+=400vh top",
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
                    <BoxIntro className={styles.firstBox}
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                                    <path d="M440-120v-319q-64 0-123-24.5T213-533q-45-45-69-104t-24-123v-80h80q63 0 122 24.5T426-746q31 31 51.5 68t31.5 79q5-7 11-13.5t13-13.5q45-45 104-69.5T760-720h80v80q0 64-24.5 123T746-413q-45 45-103.5 69T520-320v200h-80Zm0-400q0-48-18.5-91.5T369-689q-34-34-77.5-52.5T200-760q0 48 18 92t52 78q34 34 78 52t92 18Zm80 120q48 0 91.5-18t77.5-52q34-34 52.5-78t18.5-92q-48 0-92 18.5T590-569q-34 34-52 77.5T520-400Zm0 0Zm-80-120Z"/>
                                </svg>
                            }
                            text={
                              <>
                                Jó helyen jársz, ha<br />
                                - egy fontos versenyre készülsz<br />
                                - sérülésből épülsz fel vagy megelőznéd azt<br />
                                - újra kezdenéd az aktív sportolást<br />
                                - egy felszabadító masszázsra vágysz
                              </>
                            }
                    ></BoxIntro>
                </div>
                <div className={styles.secondBoxWrapper}>
                    <BoxIntro className={styles.secondBox} ref={phase2Ref}
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                                <path d="M426-160q-9-26-23-48t-33-41q-19-19-41-33.5T281-306q2 29 14 54t32 45q20 20 45 32.5t54 14.5Zm108 0q29-3 54-15t45-32q20-20 32-45t15-54q-26 9-48.5 23T590-250q-19 19-33 41.5T534-160Zm-54-360q66 0 113-47t47-113v-48l-70 59-90-109-90 109-70-59v48q0 66 47 113t113 47ZM440-80q-100 0-170-70t-70-170v-80q71-1 134 29t106 81v-153q-86-14-143-80.5T240-680v-136q0-26 23-36.5t43 6.5l74 64 69-84q12-14 31-14t31 14l69 84 74-64q20-17 43-6.5t23 36.5v136q0 90-57 156.5T520-443v153q43-51 106-81t134-29v80q0 100-70 170T520-80h-80Zm40-569Zm127 416Zm-253 0Z"/>
                            </svg>
                        }
                        text="Az intergált manuális kezelésemmel ezekben mind a segítségedre lehetek. Ez kicsit bővebben azt jelenti, hogy a masszázsok során minden általam ismert fogásból, technikából és eszközből kiválasztom azokat melyekkel a Te céljaid elérését a leghatékonyabban támogathatom." 
                    ></BoxIntro>
                </div>
                <div className={styles.thirdBoxWrapper}>
                    <BoxIntro className={styles.thirdBox} ref={phase3Ref}
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                                <path d="M760-60q-15 0-28-7t-21-19q-121-22-213.5-108T368-406q-96 45-152 132.5T160-80H80q0-134 73.5-244T350-486q-21-115-3.5-207.5T420-843q2-24 19-40.5t41-16.5q25 0 42.5 17.5T540-840q0 25-17.5 42.5T480-780h-4q-2 0-5-1-22 25-35 61.5T419-638q20-20 46.5-34.5T524-695q30-8 64.5-10.5t72.5.5q8-8 18-11.5t21-3.5q25 0 42.5 17.5T760-660q0 25-17.5 42.5T700-600q-14 0-27.5-6.5T651-625q-33-2-63.5.5T533-614q-39 13-61.5 38T443-512q28-5 47.5-6.5T576-520q8-10 19.5-15t24.5-5q25 0 42.5 17.5T680-480q0 25-17.5 42.5T620-420q-13 0-24.5-5T576-440q-63 0-83 1.5t-45 6.5q13 34 51 52t99 20q29 2 62.5-1t67.5-9q8-14 22-22t30-8q25 0 42.5 17.5T840-340q0 25-17.5 42.5T780-280q-10 0-18.5-3t-16.5-9q-34 6-66.5 9.5T617-279q-29 0-55-3t-49-9q38 49 92.5 82.5T720-164q8-8 18.5-12t21.5-4q25 0 42.5 17.5T820-120q0 25-17.5 42.5T760-60Z"/>
                            </svg>
                        }
                        text="Jelenlegi tudásom bázisát a gyógy- és sportmasszőri képesítésem adja, mely szilárd alapokat jelent anatómiai ismeretek terén. Több éves gyakorlati tapasztalat mellett elsajátítottam Korokan, Teate és Myofasciális fogásokat, eszköztáramba bekerült a fascia-kés, köpöly és kinezio-tape." 
                    ></BoxIntro>
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