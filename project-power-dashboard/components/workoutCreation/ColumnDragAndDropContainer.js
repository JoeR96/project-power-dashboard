import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import styles from '../../styles/workoutCreation.module.css'
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
      exercises : exerciseData[0].exercises
    },
    [v4()]: {
      day: 2,
      exercises: exerciseData[1].exercises
    },
    [v4()]: {
      day: 3,
      exercises: exerciseData[1].exercises
    }
  }

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceExercises = [...sourceColumn.exercises];
      const destExercises = [...destColumn.exercises];
      const [removed] = sourceExercises.splice(source.index, 1);
      destExercises.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          exercises: sourceExercises
        },
        [destination.droppableId]: {
          ...destColumn,
          exercises: destExercises
        }
      });
    } else {
      const column = columns[source.droppableId];
      const copiedExercises = [...column.exercises];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          exercises: copiedExercises
        }
      });
    }
  };
const [columns,setColumns] = useState(cols)

  return (
    <div className={styles.columnContainer }>
      <DragDropContext onDragEnd={result => onDragEnd(result,columns,setColumns)}>{
        Object.entries(columns).map(([columnId, column]) => {
          return (
            <div style={{ margin: 8 }}>

            <Droppable droppableId={columnId} index={columnId} key={columnId}>
              {
                (provided, snapshot) => {
                  return (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      style={{
                        background: snapshot.isDraggingOver ? 'lightBlue' : 'green',
                        width: 250,
                        minHeight: 500                     
                      }}
                    >
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          background: snapshot.isDraggingOver
                            ? "lightblue"
                            : "lightgrey",
                          padding: 4,
                          width: 250,
                          minHeight: 500
                        }}
                      >
                        {column.exercises.map((exercise, index) => {
                        console.log(exercise)
                        return(
                          <Draggable
                            key={exercise.id}
                            draggableId={exercise.id}
                            index={index}
                          >
                            {(provided, snapshot) => {
                              return (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  style={{
                                    padding: 16,
                                    margin: "0 0 8px 0",
                                    minHeight: "16px",
                                    backgroundColor: snapshot.isDragging
                                      ? "white"
                                      : "black",
                                    color: "white",
                                    ...provided.draggableProps.style,
                                  }}
                                >
                                  {exercise.name}
                                  {exercise.max}
                                </div>
                              );
                            }}
                          </Draggable>)
                      })}
                      {provided.placeholder}
                      </div>
                    </div>
                  )
                }                
              }
              </Droppable>
              </div>
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