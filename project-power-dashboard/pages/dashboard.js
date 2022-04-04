import React from 'react'
import { DashboardContainer } from '../components/dashboard/DashboardContainer'
import styles from '../styles/Dashboard.module.css'
const dashboard = () => {
    return (
        <div
            className={styles.dashboardContainer }
        >
            <DashboardContainer />
        </div>
    )
}

export default dashboard;
