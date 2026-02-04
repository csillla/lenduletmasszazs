import { useState } from 'react';

import styles from './ContactAction.module.css'


function ContactAction({ action, children }) {
    const [open, setOpen] = useState(false);
  
    return (
      <div className={styles.item}>
        <div className={styles.action} onClick={() => setOpen(o => !o)} aria-expanded={open}>
            <div>{action}</div>
            <span className={styles.icon}>
            {open ? "−" : "+"}
            </span>
        </div>
        

        <div className={styles.detailWrapper} data-open={open}>
            <div className={styles.detail}>
                {children}
            </div>
        </div>
      </div>
    );
}

export default ContactAction;