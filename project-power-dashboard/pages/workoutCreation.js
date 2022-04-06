import React, {useState,useEffect} from 'react'
import { ColumnDragAndDropContainer } from '../components/workoutCreation/ColumnDragAndDropContainer';
import styles from '../styles/Login.module.css'

const workoutCreation = () => {

  const [winReady, setwinReady] = useState(false);
  useEffect(() => {
    setwinReady(true);
  }, []);

  return (
    <div >
          {winReady ? <ColumnDragAndDropContainer/> : null}
        </div>
    )
}

export default workoutCreation;
