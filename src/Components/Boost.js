import React from 'react'
import styles from "./Boost.module.css";
import BoostStair1 from "./Images/boostStairs1.svg";
import BoostStair2 from "./Images/boostStairs2.svg";
import BoostBurger from "./Images/boostBurger.svg";
import BoostCard from "./Images/boostCard.svg";
import BoostCoffee from "./Images/boostCoffee.svg";
import BoostHand from "./Images/boostHand.svg";
import BoostPhone from "./Images/boostPhone.svg";
import BoostShoe from "./Images/boostShoe.svg";

function Boost() {
  return (
    <div className={styles.boost_container}>
        <img alt="x" className={styles.boost_stair1} src={BoostStair1} />
        <img alt="x" className={styles.boost_stair2} src={BoostStair2} />
        <img alt="x" className={styles.boost_burger} src={BoostBurger} />
        <img alt="x" className={styles.boost_card} src={BoostCard} />
        <img alt="x" className={styles.boost_coffee} src={BoostCoffee} />
        <img alt="x" className={styles.boost_hand} src={BoostHand} />
        <img alt="x" className={styles.boost_phone} src={BoostPhone} />
        <img alt="x" className={styles.boost_shoe} src={BoostShoe} />
        <div className={styles.boost_details}>
            <div className={styles.boost}>
            Cash Card & Boost
            </div>
            <div className={styles.details}>
            The Cash Card is a free, customizable debit card that lets you pay online and in stores. It’s the only way to get Boosts—instant discounts that work at places where you want to spend.
            </div>
        </div>
        
    </div>
  )
}

export default Boost