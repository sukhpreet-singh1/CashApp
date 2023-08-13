import React from 'react'
import styles from "./Banking.module.css"
import BankingColumn from "./Images/bankingColumn.svg"
import BankingHole from "./Images/bankingHole.svg"
import BankingTube from "./Images/bankingTube.svg"
import BankingTrack2 from "./Images/bankingTrack2.svg"
import BankingStair2 from "./Images/bankingStair2.svg"
import BankingStair1 from "./Images/bankingStair1.svg"
import BankingRamp2 from "./Images/bankingRamp2.svg"
import BankingRamp1 from "./Images/bankingRamp1.svg"
import BankingPhone from "./Images/bankingPhone.svg"
import BankingTrack1 from "./Images/bankingTrack1.svg"
import BankingMonster from "./Images/bankingMonster.svg"
import BankingCubes from "./Images/bankingCubes.svg";
function Banking() {
  return (
    <div className={styles.banking_container}>
        <img alt="x" className={styles.banking_column} src={BankingColumn} />
        <div className={styles.hole_container}>
        <img alt="x" className={styles.banking_hole1} src={BankingHole} />
        </div>
        
        <img alt="x" className={styles.banking_hole2} src={BankingHole} />
        <img alt="x" className={styles.banking_tube} src={BankingTube} />
        <img alt="x" className={styles.banking_track2} src={BankingTrack2} />
        <img alt="x" className={styles.banking_stair2} src={BankingStair2} />
        <img alt="x" className={styles.banking_stair1} src={BankingStair1} />
        <img alt="x" className={styles.banking_ramp2} src={BankingRamp2} /> 
        <img alt="x" className={styles.banking_ramp1} src={BankingRamp1} /> 
        <img alt="x" className={styles.banking_phone} src={BankingPhone} /> 
        <img alt="x" className={styles.banking_track1} src={BankingTrack1} />
        <img alt="x" className={styles.banking_monster} src={BankingMonster} />
        <img alt="x" className={styles.banking_cubes} src={BankingCubes} />
        <div className={styles.banking_details}>
            <div className={styles.banking}>
                Banking
            </div>
            <div className={styles.details}>
            Receive your paycheck, tax returns, and other direct deposits up to two days early using your Cash App routing 
and account number.
            </div>
        </div>
    </div>
  )

}

export default Banking