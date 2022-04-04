import React from 'react'
import styles from '../../styles/Dashboard.module.css'
import { Grid } from '@mui/material'
import { DashboardCard } from './DashboardCard'
import { DashboardHeader } from './DashboardHeader'
export const DashboardContainer = () => {
    return (
        <div >
            <DashboardHeader
            />
            <Grid container spacing={5}
            className={styles.gridContainer}>
                {data.map(d => (
                    <Grid item key={d.key} xs={4} sm={4} md={4} lg={4}>
                        <DashboardCard
                            name={d.name}
                            description={d.description}
                            route={d.route}
                        >
                        </DashboardCard>
                    </Grid>
                ))}
            </Grid >
        </div>
       
  )
}

const data = [{ name: "Login", description: "Login Portal", route : '/login'},
    { name: "Create Workout", description: "Workout Creation Page", route: '/workoutCreation' }, { name: "Login", description: "Login Portal", route: '/login' },
    { name: "Create Workout", description: "Workout Creation Page", route: '/workoutCreation' },
    { name: "Login", description: "Login Portal", route: '/login' },
    { name: "Create Workout", description: "Workout Creation Page", route: '/workoutCreation' }]
