import { useState } from "react";

import styles from './Contact.module.css'
import ScrollSlideText from './scrollSlideText';

import ContactAction from "./ContactAction";
    

function Contact({id}) {
    const [open, setOpen] = useState(false);
  
    // const toggle = () => {
    //   setOpen(prev => !prev);
    // };


    // const [open, setOpen] = useState(true);

    // const toggleOpen = () => {
    //     setOpen(prev => !prev);
    // };

    return (
        <section id={id} className={`gridMain ${styles.contact}`}>
            
            <div className={`firstBorder ${styles.border}`}></div>
            <div className={`secondBorder ${styles.border}`}></div>
            <div className={`thirdBorder ${styles.border}`}></div>
            <div className={`fourthBorder ${styles.border}`}></div>
            <div className={styles.gridTexts}>
                <h2>
                    <ScrollSlideText
                    closedPadding="0 0 0 2vw"
                    openPadding="0 0 0 7vw"
                    // className={`${open ? "" : styles.close}`}
                    >
                    Kipróbálnád?
                    </ScrollSlideText>
                </h2>
                <div className={styles.timelineGrid}>

                    <ContactAction action="1.&nbsp;&nbsp; Írj egy rövid üzenetet!">
                        <div className={styles.detailflex}>
                            <div>Írj egy rövid üzenetet, hogy szeretnél jönni:</div>
                            <div>
                                        <div><strong>TEL*:</strong> +36302482376</div>
                                        {/* <div><strong>FACEBOOK:</strong> lendulet_masszazs</div> */}
                                        <div><strong>EMAIL:</strong> bendienator@gmail.com</div>
                            </div>
                            <div className={styles.note}>* Ha telefonon keresnél, akkor kérlek sms-t írj, mert munka közben nem tudom felvenni.</div>
                        </div>
                    </ContactAction>

                    <ContactAction action="2.&nbsp;&nbsp; Megbeszéljük, hogy mikor lenne alkalmas.">
                        <div>Általában hétköznapokon, 9 és 5 között dolgozom.</div>
                    </ContactAction>

                    <ContactAction action="3.&nbsp;&nbsp; Már jöhetsz is!">
                        <div className={styles.mapWrapper}>
                            <div className={styles.detailflex}>
                                <div><strong>CÍM:</strong> 2890 Tata, Kocsi utca 1.</div>
                                <iframe className={styles.map} 
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2688.155686657542!2d18.31097567664715!3d47.64254137119311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476a4609ec60462f%3A0xdf5ab133590e19c7!2sTata%2C%20Kocsi%20u.%201%2C%202890!5e0!3m2!1shu!2shu!4v1768394682662!5m2!1shu!2shu" 
                                        loading="lazy" 
                                        referrerpolicy="no-referrer-when-downgrade">
                                </iframe> 
                            </div>
                            
                        </div>
                    </ContactAction>
                    
                </div>
            </div>
            
        </section>
    )
}

export default Contact;