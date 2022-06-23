import React, { Fragment}  from "react";
import './App.css';

//importing our own components
import InputTodo from "./components/InputTodo";
import ListTodo from "./components/ListTodo"
// import InputTodo from "./components/InputTodo"






function App() {
  return (
    <Fragment>
      <div className="container">
         <InputTodo/>
         <ListTodo/>
      </div>
    </Fragment>
  );
}

export default App;
