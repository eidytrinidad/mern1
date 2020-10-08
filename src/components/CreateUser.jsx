import React from "react";
import { useForm } from "../hooks/userForm";
import axios from 'axios'

export const CreateUser = ({ history }) => {
  const [formValues, handleInputChange,reset] = useForm({
    username: "",
  });

  const {username}=formValues

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);

    axios.post('http://localhost:4000/users/add',formValues)
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err))

    reset()
  };

  return (
    <>
      <h3>Create New User</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <input
            type="text"
            required
            name="username"
            className="form-control"
            value={username}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create User"
            className="btn btn-primary"
          />
        </div>
      </form>
    </>
  );
};
