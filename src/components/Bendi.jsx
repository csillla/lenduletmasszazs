import { useState } from "react";

import styles from './Bendi.module.css'
import ScrollSlideText from './scrollSlideText';
import ImageBox from './ImageBox';
import Btn from './Btn'
import Snippet from './TimeSnippet.jsx'

import img1 from '../assets/eoc2.jpg'
import img2 from '../assets/eoc.jpg'

function Bendi({id}) {

    const [open, setOpen] = useState(true);

    const toggleOpen = () => {
        setOpen(prev => !prev);
    };

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
                    <p>Számos aktív sportoló és válogatott versenyző, többek között tájfutó, boxoló, judós, terepfutó, vízilabdázó, labdarúgó, atléta, sziklamászó stb. munkáját is segítve.</p>
                </div>
            </div>
            <div className={styles.picFixDisplay}></div>
            {/* <div className={`${styles.timelineBg} ${open ? styles.timelineBgOpen : ""}`}></div>
            <div className={styles.timeline}>
                <ImageBox className={`${open ? styles.hiddenPic : ""} ${styles.tlPic1}`} src={img1} />
                <ImageBox className={`${open ? styles.hiddenPic : ""} ${styles.tlPic2}`} src={img1} />
                <div className={`${open ? styles.hiddenPic : ""} ${styles.picFix}`}></div>
                <Snippet className={`${open ? styles.hiddenSnip : ""} ${styles.tlText1}`} year="2017" event="valami fontos esemény"></Snippet>
                <Snippet className={`${open ? styles.hiddenSnip : ""} ${styles.tlText2}`} year="2021" event="első világverseny a válogatott masszőreként"></Snippet>
                <Snippet className={`${open ? styles.hiddenSnip : ""} ${styles.snipRev} ${styles.tlText3}`} year="2022" event="valami fontos esemény"></Snippet>
            </div>
            <Btn className={`${open ? styles.resBtn : styles.moveBtn} ${styles.timelineBtn}`} onClick={toggleOpen}>
                {open ? (
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#a96c6c">
                        <path d="M704-240 320-624v344h-80v-480h480v80H376l384 384-56 56Z"/>
                    </svg>
                    ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#a96c6c">
                        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                    </svg>
                    )}
            </Btn> */}
        </section>
    )
}

export default Bendi;