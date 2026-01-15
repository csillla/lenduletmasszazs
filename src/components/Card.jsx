import styles from './Card.module.css'


export default function Card({children, price, text, className="", dataBg, image}) {
    return (
        <section className={`${styles.card} ${className}`} data-bg={dataBg}>
            <div className={styles.image} style={{ backgroundImage: `url(${image})` }}>{children}</div>
            <div className={styles.content}>
                <div className={styles.price}>{price}</div>
                <div className={styles.text}>{text}</div>
            </div>
        </section>
    )
}