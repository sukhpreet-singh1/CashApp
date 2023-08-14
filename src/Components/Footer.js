import React from 'react'
import styles from "./Footer.module.css"
import appStore from "./Images/appStore.svg";
import googleStore from "./Images/googleStore.svg";
import downArrow from "./Images/downArrow.svg";
import tweetIcon from "./Images/tweetIcon.svg";
import instaIcon from "./Images/InstaIcon.svg";
import commentImage from "./Images/commentImage.svg";
function Footer() {
  return (
    <div className={styles.top_container}>
        
        <div className={styles.start_container}>
              <img alt="x" className={styles.logo_image} src={appStore} />
              <img alt="x" className={styles.logo_image} src={googleStore} />
        </div>
        <div className={styles.mid_container}>
              <img alt="x" className={styles.logo_image} src={downArrow} />
        </div>
        <div className={styles.end_container}>
          <div className={styles.para_container}>
              <p >
              Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin trading offered by Cash App. Cash App Investing does not trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash App facilitates banking services through Sutton Bank and Lincoln Savings Bank, Members FDIC.
              </p>
          </div >
          <div className={styles.icon_container}>
          
            <div className={styles.icon}>
              <img alt="x" className={styles.logo_image} src={commentImage} /> 
            </div>
            <div className={styles.icon}>
              <img alt="x" className={styles.logo_image} src={tweetIcon} /> 
            </div>
            <div className={styles.icon}>
              <img alt="x" className={styles.logo_image} src={instaIcon} /> 
            </div>
            
              
             
          </div>
              
        </div>
        
    </div>
  )
}

export default Footer
