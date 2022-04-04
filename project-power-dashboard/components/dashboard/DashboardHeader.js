import React from 'react'
import styles from '../../styles/Dashboard.module.css'

export const DashboardHeader = () => {
  return (
      <div className={styles.headerContainer}
>
          <h1 className={styles.title}>
              Project<span> Power</span> Dashboard
          </h1>
          <h3 className={styles.description}>
              Where Thai Green is consumed
          </h3>
    </div>
  )
}
