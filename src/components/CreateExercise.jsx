import React, { useEffect } from "react";
import { useForm } from "../hooks/userForm";
import axios from "axios";
import { useState } from "react";

export const CreateExercise = ({ history }) => {
  const [users, setUsers] = useState([]);
 let [formValues, handleInputChange] = useForm({
    username: '',
    description: "",
    duration: 0,
    date: new Date(),
  });

  let { username, description, duration, date } = formValues;

  useEffect(() => {
    axios
      .get("https://mern1.vercel.app/users")
      .then((res) => {if (res.data.length) setUsers(res.data) })
      .catch((err) => console.log(err));
    
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/exercises/add", formValues)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    history.push('/')
  };

 
  return (
    <>
 
      <h3>Create New Exercise Log</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <select
          
            required
            name="username"
            className="form-control"
            value={username}
            onChange={handleInputChange}
          >
            <option value=""></option>
            {users.map((user) => (
              <option key={user.username}>{user.username}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input
          
            type="text"
            required
            name="description"
            className="form-control"
            value={description}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input
          
            type="text"
            name="duration"
            className="form-control"
            value={duration}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <input
              type="date"
              name="date"
              selected={date}
              className="form-control"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Create Exercise Log"
            className="btn btn-primary"
          />
        </div>
      </form>
    </>
  );
};
