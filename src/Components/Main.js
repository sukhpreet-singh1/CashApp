import React, { useState } from 'react'
import Header from './Header'
import styles from "./Main.module.css";
import Mobile from "./Images/Mobile.svg";
import cube from "./Images/cube.svg";
import pillar from "./Images/pillar.svg";
import longstairs from "./Images/longstairs.svg";
import stairs from "./Images/stairs.svg";
import {MdMenu} from "react-icons/md";
import Modal from './Modal';
import Footer from './Footer';
function Main() {

  const [showModal,setVisible]=useState(false);

  const handleModal = () => {
    setVisible(!showModal);
  };

  return (
    <div className={styles.top_container}>
        <MdMenu onClick={handleModal} className={styles.icon}/> 
        <Modal isVisible={showModal}/>
        <img alt="x" className={styles.cube} src={cube} />
        <img alt="x" className={styles.longstairs} src={longstairs} />
        <img alt="x" className={styles.stairs} src={stairs}/>
        <img alt="x" className={styles.pillar} src={pillar}/>
        
        <div className={styles.main_container}>
          <div className={styles.cash_container}>CASH</div>
            <div className={styles.mobile_container}>
              <img alt="x" className={styles.mobile} src={Mobile} height={50} width={50}/>
            </div>
          <div className={styles.app_container}>APP</div>
          <Footer/>
        </div>    
        
    </div>
  )
}

export default Main