import styles from "./Reviews.module.css";
import reviews from "../data/reviews.json";
import { useState, useRef, useEffect } from "react";
import Btn from "./Btn";
import SplitTypesText from "./SplitTypesText";

function Reviews({ id }) {
    const sectionRef = useRef(null);

    const isMobile = window.matchMedia("(max-width: 1023px)").matches;
    const visibleCount = isMobile ? 1 : 1;

    const [index, setIndex] = useState(0);
    const total = reviews.length;

    // useEffect(() => {
    //     if (!sectionRef.current) return;
      
    //     const top =
    //       sectionRef.current.getBoundingClientRect().top + window.pageYOffset;
      
    //     window.scrollTo({
    //       top,
    //       behavior: "smooth",
    //     });
    // }, [index]);

    const scrollToTop = () => {
        history.replaceState(null, "", window.location.pathname);
      
        requestAnimationFrame(() => {
          window.location.hash = "reviews-top";
        });
    };

    // const scrollToTop = () => {
    //     if (!sectionRef.current) return;
      
    //     sectionRef.current.scrollIntoView({
    //       behavior: "smooth",
    //       block: "start"
    //     });
    // };

    const next = () => {
        setIndex(prev => (prev + visibleCount) % total);
        scrollToTop();
    };
      
    const prev = () => {
        setIndex(prev => (prev - visibleCount + total) % total);
        scrollToTop();
    };

    const visibleReviews = Array.from({ length: visibleCount }, (_, i) =>
        reviews[(index + i) % total]
    );

    

    

    return (
        <section ref={sectionRef} id={id} className={`gridMain reviewsSection ${styles.reviews}`}>
            <span id="reviews-top" style={{ position: "absolute", top: 0 }} />
            <div className={`firstBorder ${styles.border}`} />
            <div className={`secondBorder ${styles.border}`} />
            <div className={`thirdBorder ${styles.border}`} />
            <div className={`fourthBorder ${styles.border}`} />

            <div className={styles.reviewss}>
                {/* PREV BUTTON */}
                <div id={styles.firstBtn} className={styles.btnContainer} onClick={prev}>
                    <Btn className={styles.btn} >
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff">
                            <path d="M400-240 160-480l240-240 56 58-142 142h486v80H314l142 142-56 58Z"/>
                        </svg>
                        
                    </Btn>
                    <div>
                        <div className={styles.prevName}>
                            {reviews[(index - 1 + total) % total].name}
                        </div>
                    </div>
                </div>

                {/* REVIEWS */}
                <div className={styles.reviewsGrid}>
                {visibleReviews.map((review) => (
                <div key={review.id ?? review.name} className={styles.reviewCard}>
                    <SplitTypesText
                    key={review.text}   // 👈 THIS is the fix
                    as="p"
                    className={styles.text}
                    >
                    {review.text}
                    </SplitTypesText>

                    <span className={styles.name}>{review.name}</span>
                </div>
                ))}
                </div>

                {/* NEXT BUTTON */}
                <div id={styles.secondBtn} className={styles.btnContainer} onClick={next}>
                    <div>
                        <div className={styles.prevName}>
                            {reviews[(index + 1 + total) % total].name}
                        </div>
                    </div>
                    <Btn className={styles.btn}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff">
                            <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/>
                        </svg>
                    </Btn>
                </div>
            </div>
        </section>
    );
}

export default Reviews;
