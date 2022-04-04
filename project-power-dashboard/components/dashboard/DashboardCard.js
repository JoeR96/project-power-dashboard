import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea
} from '@mui/material';
import { useRouter } from 'next/router';
import styles from '../../styles/Dashboard.module.css'

export const DashboardCard = ({ name, route, description}) => {
  const router = useRouter(); 

  return (
      <CardActionArea
        className={styles.cardContent}
        onClick={() => router.push(route)}
        sx={{
          maxWidth: 'fill',
          height: '300px'
        }}
      >
          <h3>{name}</h3>
          <p>{description}
          </p>
      </CardActionArea>
  )
}
