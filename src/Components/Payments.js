import React from 'react'
import styles from "./Payments.module.css";
import PillarColumn3 from "./Images/pillarColumn3.svg";
import PillarColumn from "./Images/pillarColumn.svg";
import PillarMedium from "./Images/pillarMedium.svg";
import PillarSmall from "./Images/pillarSmall.svg";
import PillarLarge from "./Images/pillarLarge.svg";
import PaymentPhone from "./Images/paymentPhone.svg";
function Payments() {
  return (
    <div className={styles.payment_container}>
        <img alt="x" className={styles.pillar_Column1} src={PillarColumn} />
        <img alt="x" className={styles.pillar_Column3} src={PillarColumn3} />
        <img alt="x" className={styles.pillar_Column2} src={PillarColumn} />
        <img alt="x" className={styles.pillar_medium_Column1} src={PillarMedium} />
        <img alt="x" className={styles.pillar_medium_Column2} src={PillarMedium} />
        <img alt="x" className={styles.pillar_medium_Column3} src={PillarMedium} />
        <img alt="x" className={styles.pillar_medium_Column4} src={PillarMedium} />
        <img alt="x" className={styles.pillar_Small} src={PillarSmall} />
        <img alt="x" className={styles.pillar_Large} src={PillarLarge} />
        <img alt="x" className={styles.payment_Phone} src={PaymentPhone} />
        <div className={styles.payment_Details}>
            <div className={styles.payment}>
                Payments
            </div>
            <div className={styles.details}>
                Send and receive money with anyone, donate  to an important cause, or tip professionals. Just enter a $cashtag, phone number, or scan their  QR code to pay.
            </div>
        </div>

    </div>
  )
}

export default Payments