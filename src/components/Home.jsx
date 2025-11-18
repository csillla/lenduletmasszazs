import styles from './Home.module.css'
import useFitText from "../hooks/useFitText";

function Home({id}) {
    const titleRef = useFitText();
    const sideRef = useFitText();

    return (
        <section id={id} className={`gridMain ${styles.home}`}>
            
            <div className='firstBorder'></div>
            <div className='secondBorder'></div>
            <div className='thirdBorder'></div>
            <div className='fourthBorder'></div>
            <div className={styles.gridTexts}>
                <h1>
                    <div className={styles.titleContainer}><div ref={titleRef} className={styles.title}>Lendület</div></div>
                    <div className={styles.sideContainer}><div ref={sideRef} className={styles.sideTitle}>masszázsszalon&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tata</div></div>
                </h1>
                <p className={styles.titleMsg}>{'{'} egy test állapotát jellemző, annak mozgását leíró dinamikai vektormennyiség {'}'}</p>
            </div>
        </section>
    )
}

export default Home;