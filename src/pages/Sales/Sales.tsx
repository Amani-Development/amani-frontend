import React from 'react'
import styles from './Sales.module.css'

const Sales = () => {
  return (
    <div className={styles.container}>
      <h1>My Sales</h1>
      <div className={styles.statistics}>
        <p className={styles.title}>Revenue</p>
        <div className={styles.statItem}>
          <div className={styles.statLine}>
            <p className={styles.statTitle}>Total Accumulated Revenue</p>
            <p className={styles.statValue}>₦ 20,000,000</p>
          </div>
          <div className={styles.statLine}>
            <p className={styles.statTitle}>This month</p>
            <p className={styles.statValue}>₦ 2,839,400</p>
          </div>
          <div className={styles.statLine}>
            <p className={styles.statChange}>+ 300,400</p>
            <p className={styles.statTitle}>In last 28 days</p>
          </div>
        </div>

        <p className={styles.title}>Occupancy</p>
        <div className={styles.statItem2}>
          <div className={styles.statLine}>
            <p className={styles.statTitle}>Total properties</p>
            <p className={styles.statValue}>672</p>
          </div>
          <div className={styles.statLine}>
            <p className={styles.statTitle}>Amanis currently occupied</p>
            <p className={styles.statValue}>168</p>
          </div>
          <div className={styles.statLine}>
            <p className={styles.statTitle}>Occupancy rate</p>
            <p className={styles.statValue}> 25%</p>
          </div>
          <div className={styles.statLine}>
            <p className={styles.statChange}> + 12</p>
            <p className={styles.statTitle}>In last 28 days</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sales