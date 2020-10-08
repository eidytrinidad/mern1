import React from "react";
import axios from "axios";

import { useEffect } from "react";
import { useState } from "react";
import { Exercise } from "./Exercise";

export const ExercisesList = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/exercises")
      .then((res) => {
        setExercises(res.data);
      })
      .catch((err) => console.log(err));
  }, [setExercises]);

  const deleteExercise = (id) => {
    axios
      .delete(`http://localhost:4000/exercises/${id}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    setExercises((exer) => {
      exer.filter((el) => el._id !== id);
    });
  };

  const ExercisesList=()=>{
      return exercises.map(exercise=>(
          <Exercise 
          exercise={exercise} deleteExercise={deleteExercise}
          key={exercise._id}/>
      ))
  }

  return (
    <>
 
      <h3>Logged Exercises</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{ExercisesList()}</tbody>
      </table>
    </>
  );
};
