import styles from './About.module.css'

export default function BoxIntro({children, className=""}) {
    return (
        <section className={`${styles.box} ${className}`}>
            {/* <div className={styles.icon}>{icon}</div> */}
            <div className={styles.boxtext}>{children}</div>
        </section>
    )
}