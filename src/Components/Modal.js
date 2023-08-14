import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ isVisible }) => {
  

  return (
    <>     
      {isVisible && (
        <div className={styles.modal}>
          <button className={styles.modal_button}>Sign In</button>
          <button className={styles.modal_button}>Legal</button>
          <button className={styles.modal_button}>Licenses</button>
          <button className={styles.modal_button}>Security</button>
          <button className={styles.modal_button}>Careers</button>
          <button className={styles.modal_button}>Press</button>
          <button className={styles.modal_button}>Support</button>
          <button className={styles.modal_button}>Status</button>
          <button className={styles.modal_button}>Codeblog</button>
         
        </div>
      )}
    </>
  );
};

export default Modal;