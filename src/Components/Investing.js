import React from 'react'
import InvestingRays from "./Images/InvestingRays.svg"
import InvestingFloor from "./Images/investingFloor.svg"
import InvestingGraph1 from "./Images/investingGraph1.svg";
import InvestingGraph2 from "./Images/investingGraph2.svg";
import InvestingGraph3 from "./Images/investingGraph3.svg";
import InvestingBitcoin from "./Images/investingBitcoin.svg";
import InvestingStock from "./Images/investingStock.svg";
import styles from "./Investing.module.css"

function Investing() {
  return (
    <div className={styles.top_container}>
        <img alt="x" className={styles.investing_rays} src={InvestingRays} />
        <img alt="x" className={styles.investing_floor} src={InvestingFloor} />
        <img alt="x" className={styles.investing_graph1} src={InvestingGraph1} />
        <img alt="x" className={styles.investing_graph2} src={InvestingGraph2} />
        <img alt="x" className={styles.investing_graph3} src={InvestingGraph3} />
        <img alt="x" className={styles.investing_bitcoin} src={InvestingBitcoin} />
        <img alt="x" className={styles.investing_stock} src={InvestingStock} />
        <div className={styles.stock_details}>
            <div className={styles.title}>
            Stocks
            </div>
            <div className={styles.description}>
            Whether you’re an expert or just getting started, Cash App is the fastest and most accessible way to invest in stocks. Start now with as little as $1.
            </div>
        </div>
        <div className={styles.bitcoin_details}>
            <div className={styles.title}>
            Bitcoin
            </div>
            <div className={styles.description}>
            Cash App is the fastest way to convert dollars to bitcoin. From your home screen, six taps are all it takes to stack sats, buy an entire bitcoin, or just see what its all about.
            </div>
        </div>
        
    </div>
  )
}

export default Investing