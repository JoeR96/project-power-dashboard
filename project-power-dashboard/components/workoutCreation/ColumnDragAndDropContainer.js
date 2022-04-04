import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import styles from '../../styles/workoutCreation.module.css'
import { v4 as uuidv4 } from 'uuid';
import { v4 } from 'uuid';
import { Portal } from '@mui/material';
export const ColumnDragAndDropContainer = () => {
  const exerciseData = [
    {
      day: 1,
      exercises : [{id:v4(),name:'squat',max:150},{id:v4(),name:'ohp',max :20}]
    },
    {
      day: 2,
      exercises: [{ id: v4(), name: 'squat', max: 150 }, { id: v4(), name: 'ohp', max :20}]
    },
    {
      day: 3,
      exercises: [{ id: v4(), name: 'squat', max: 150 }, { id: v4(), name: 'ohp', max :20}]
    },
  ]

  const cols = {
    [v4()]: {
      day: 1,
      exercises : [exerciseData[0]]
    },
    [v4()]: {
      day: 2,
      exercises: [exerciseData[1]]
    },
    [v4()]: {
      day: 3,
      exercises: [exerciseData[1]]
    }
  }
const [columns,setColumns] = useState(cols)

var items = []
  return (
    <div className={styles.columnContainer }>
      <DragDropContext onDragEnd={result => console.log(result)}>{
        Object.entries(columns).map(([id, column]) => {
          return (
            <Droppable droppableId={id}>
              {
                (provided, snapshot) => {
                  return (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      style={{
                        background: snapshot.isDraggingOver ? 'lightBlue' : 'green',
                        padding: 40,
                        width: 75,
                        minHeight: 500                     
                      }}
                    >
                      {column.exercises.map((exercise, index) => {
                        return(
                        <Draggable key={exercise.id} draggableId={exercise.id} index={index}>
                          {(provided, snapshot) => {
                            return(
                            <div ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={{
                                userSelect: "none",
                                padding: 16,
                                margin: "0 0 8px 0",
                                minHeight: "50px",
                                backgroundColor: snapshot.isDragging
                                  ? "#263B4A"
                                  : "#456C86",
                                color: "white",
                                ...provided.draggableProps.style
                              }}>
                              {exercise.name}
                              {exercise.max}
                            </div>)
                          }}
                        </Draggable>)
                      })}
                    </div>
                  )
                }                
              }
            </Droppable>
          )
        })
      }
      </DragDropContext>
    </div>
   
  )
}

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: 'grid',
  width: 250
});