import React from "react";


import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { CreateExercise } from "./components/CreateExercise";
import { CreateUser } from "./components/CreateUser";
import { EditExercise } from "./components/EditExercise";
import { ExercisesList } from "./components/ExercisesList";
import { NavBar } from "./components/NavBar";
function App() {
  return (
    <Router>
        <NavBar />
      <div className="container">
    
      <br />
      <Switch>
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
