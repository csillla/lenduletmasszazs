import styles from "./PreContact.module.css";
import SplitTypesText from "./SplitTypesText";
import {useLayoutEffect, useRef} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



function PreContact({ id }) {
    const sectionRef = useRef(null);
    // const wrapperRef = useRef(null);

    // useLayoutEffect(() => {
    //     const ctx = gsap.context(() => {
    //       ScrollTrigger.create({
    //         trigger: sectionRef.current,
    //         start: "top top",
    //         end: "+=50vh",
    //         scrub: true,
    //         toggleClass: {
    //             targets: sectionRef.current,
    //             className: styles.dark,
    //         },
    //       });
    //     });
      
    //     return () => ctx.revert();
    // }, []);

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(`.${styles.preContact}`, {
        backgroundColor: "#f7f7f7",   // target color
        color: "#a96c6c",             // text color if you want
        ease: "none",              // IMPORTANT: no easing
        scrollTrigger: {
          trigger: `.${styles.preContact}`,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
      
    return (
        <section ref={sectionRef} id={id} className={`gridMain ${styles.preContact}`}>
            <div className={`firstBorder ${styles.border}`} />
            <div className={`secondBorder ${styles.border}`} />
            <div className={`thirdBorder ${styles.border}`} />
            <div className={`fourthBorder ${styles.border}`} />

            <div className={styles.textContainer}>
                    <SplitTypesText
                    className={styles.text}
                    >
                    Blahblah
                    </SplitTypesText>
            </div>
        </section>
    );
}

export default PreContact;
