import styles from "./Reviews.module.css";
import reviews from "../data/reviews.json";
import { useState } from "react";
import Btn from "./Btn";

function Reviews({ id }) {

    const isMobile = window.matchMedia("(max-width: 1023px)").matches;
    const visibleCount = isMobile ? 1 : 2;

    const [index, setIndex] = useState(0);
    const total = reviews.length;

    const next = () => {
        setIndex(prev => (prev + visibleCount) % total);
    };
      
    const prev = () => {
        setIndex(prev => (prev - visibleCount + total) % total);
    };

    const visibleReviews = Array.from({ length: visibleCount }, (_, i) =>
        reviews[(index + i) % total]
    );

    return (
        <section id={id} className={`gridMain ${styles.reviews}`}>
        <div className={`firstBorder ${styles.border}`} />
        <div className={`secondBorder ${styles.border}`} />
        <div className={`thirdBorder ${styles.border}`} />
        <div className={`fourthBorder ${styles.border}`} />

        <div className={styles.reviewss}>
            {/* PREV BUTTON */}
            <div className={styles.btnContainer} onClick={prev}>
            <Btn className={styles.btn} >
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff">
                    <path d="M400-240 160-480l240-240 56 58-142 142h486v80H314l142 142-56 58Z"/>
                </svg>
            </Btn>
            </div>

            {/* REVIEWS */}
            <div className={styles.reviewsGrid}>
            {visibleReviews.map((review, i) => (
                <div key={i} className={styles.reviewCard}>
                <span className={styles.name}>{review.name}</span>
                <p className={styles.text}>{review.text}</p>
                </div>
            ))}
            </div>

            {/* NEXT BUTTON */}
            <div className={styles.btnContainer} onClick={next}>
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
