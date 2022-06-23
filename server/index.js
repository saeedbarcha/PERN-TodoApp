const express = require("express");
const app = express();
const cors = require("cors");
const { pool } = require("./db");

//midleware
app.use(cors());
//this app.use(express.json) allows us to get data from client side in json format
app.use(express.json());

// routes

// create todo
app.post("/todos", async (req, res) => {
  try {
    console.log(req.body);
    const { description } = req.body;
    res.json("successfully send data");
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES ($1) RETURNING * ",
      [description]
    );
  } catch (err) {
    console.error(err.message);
  }
});

// get all todos
app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT* FROM todo");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get a todo by :id
app.get("/todos/:id", async (req, res) => {
  try {
    //   console.log(req.params);
    const {id} = req.params;
    const todo = await  pool.query("SELECT * FROM todo WHERE todo_id=($1)", [id])
    res.json(todo.rows[0]);
    console.log(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});


// get a todo by :description
// app.get("/todos/:description", async (req, res) => {
//     try {
//       //   console.log(req.params);
//       const {description} = req.params;
//       const todos = await  pool.query("SELECT * FROM todo WHERE description = $1", [description])
//       res.json(todos.rows[0]);
//     } catch (err) {
//       console.error(err.message);
//     }
//   });
  

// update a todo
app.put("/todos/:id", async (req, res) => {
    try { 
      const {id} = req.params;
      const { description } = req.body;
      const updatedTodo = await  pool.query("UPDATE  todo SET description = $1 WHERE todo_id= $2" , [ description, id ])
      res.json(`todo row no:${id} was updated!`);
      console.log(`todo row no:${id} was updated!`);
    } catch (err) {
      console.error(err.message);
    }
  });


// delete a todo
app.delete("/todos/:id", async (req, res) => {
    try { 
      const {id} = req.params;
      const deleteTodo = await  pool.query("DELETE FROM todo WHERE todo_id= $1" , [ id ])
      res.json(`todo row no:${id} was deleted!`);
      console.log(`todo row no:${id} was deleted!`);
    } catch (err) {
      console.error(err.message);
    }
  });


app.listen(5000, () => {
  console.log("server has start on port 5000");
});
