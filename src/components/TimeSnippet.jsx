import styles from './Bendi.module.css'

export default function Snippet({year, event, className=""}) {

    return (
        <div className={`${styles.snippet} ${className}`}>
            <div className={styles.dot}></div>
            <div className={styles.snipTexts}>
                <div className={styles.year}>{year}</div>
                <div className={styles.event}>{event}</div>
            </div>
        </div>
    )
}