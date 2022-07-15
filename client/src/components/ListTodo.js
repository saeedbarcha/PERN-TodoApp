import React, { useEffect, useState} from 'react';
import EditTodo from "./EditTodo";


const ListTodos = ()=>{
    
    //useState
    const [todos, setTodos] = useState([]);
    //useState

    // Delete todo function    
    const deleteTodo = async (id) => {
        try {
            const deleteTodo =await fetch (`http://localhost:5000/todos/${id}`, {
                method:"DELETE"
            });

            setTodos(todos.filter( todo => todo.todo_id !== id))
            console.log(deleteTodo)
        } catch (err) {
         console.error(err.message) 
        }
    }
    // Delete todo function   

    // useEffect
    const getTodos= async() =>{
       try{
       const response = await fetch("http://localhost:5000/todos")
       const jsonData = await response.json();
    //    console.log(jsonData)
       setTodos(jsonData)
       }catch(err){
       console.error(err.message)
       }
   }
    useEffect(()=>{
     getTodos();
    }, [])
  // useEffect

console.log(todos)


    return(
        <> 
            <table className="table mt-5 text-center">
            <thead>
                <tr>
                <th scope="col">Description</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
               
                </tr>
            </thead>
            <tbody>
            {todos.map(todo => (
                <tr key={todo.todo_id}>
                    <td>{todo.description}</td>
                    <td><EditTodo todo={todo}/></td>
                    <td>
                     <button className="btn btn-danger" 
                     onClick={() => deleteTodo(todo.todo_id)}>Delete</button>
                    </td>
                </tr>
            ))}
               
            </tbody>
            </table>
        </>
       
    )
}



export default ListTodos;