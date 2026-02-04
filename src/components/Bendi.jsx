import { useState } from "react";

import styles from './Bendi.module.css'
import ScrollSlideText from './scrollSlideText';

function Bendi({id}) {
    return (
        <section id={id} className={`gridMain ${styles.bendi}`}>
            
            <div className={`firstBorder ${styles.border}`}></div>
            <div className={`secondBorder ${styles.border}`}></div>
            <div className={`thirdBorder ${styles.border} ${styles.timeBorderTablet}`}></div>
            <div className={`fourthBorder ${styles.border} ${styles.timeBorder}`}></div>
            <div className={styles.gridTexts}>
                <h2>
                    <ScrollSlideText
                    closedPadding="0 0 0 2vw"
                    openPadding="0 0 0 7vw"
                    className={`${open ? "" : styles.close}`}
                    >
                    Szia,
                    </ScrollSlideText>
                    <ScrollSlideText
                    closedPadding="0 0 0 2vw"
                    openPadding="0 0 0 17vw"
                    className={`${open ? "" : styles.close}`}
                    >
                    Bendegúz
                    </ScrollSlideText>
                    <ScrollSlideText
                    closedPadding="0 0 0 2vw"
                    openPadding="0 0 0 12vw"
                    className={`${open ? "" : styles.close}`}
                    >
                    vagyok!
                    </ScrollSlideText>
                </h2>
                <div className={styles.introduction}>
                    <p className={styles.bold}>10+ éve dolgozom sportmasszőrként, különböző területen és sportágban támogattam a hozzám bizalommal fordulókat.</p>
                    <div className={styles.picFixDisplay}></div>
                    <p>Számos aktív sportoló és válogatott versenyző, többek között tájfutó, boxoló, judós, terepfutó, vízilabdázó, labdarúgó, atléta, sziklamászó stb. munkáját is segítve.</p>
                </div>
                
            </div>
            
            
        </section>
    )
}

export default Bendi;