import React, { useEffect, useState } from "react";
import { useForm } from "../hooks/userForm";
import axios from "axios";
import { useParams } from "react-router-dom";

export const EditExercise = ({ history }) => {

  const { id } = useParams();
  
  const initialState={
    username: "",
    description: "",
    duration: 0,
    date: new Date(),
  }

  const [values, setvalues] = useState(initialState);

  const handleInputChange = ({ target }) => {
    setvalues({
      ...values,
      [target.name]: target.value,
    });
  };

  let { username, description, duration, date } = values;

  useEffect(() => {
    axios.get(`http://localhost:4000/exercises/${id}`)
        .then(res=>{
          console.log(res.data)
          let { username, description, duration, date } =res.data
          setvalues({
            username,
            description, 
            duration,
             date:new Date(date)

          })
        })
    
  }, [])


  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:4000/exercises/${id}`, values)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    history.push("/");
  };

  return (
    <>
      <h3>Edit Exercise Log</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <select
            required
            name="username"
            className="form-control"
            value={username}
            onChange={(handleInputChange)}
          >
              <option key={username}>{username}</option>
           
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
         
              value={date}
              className="form-control"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Edit Exercise Log"
            className="btn btn-primary"
          />
        </div>
      </form>
    </>
  );
};
