import React, {Fragment , useState} from "react";

const InputTodo = () => {
//  const [description, setDescription] = useState("hello") // this hello word will shou on that input default
    const [description, setDescription] = useState("")
    
    const onSubmitFrom = async(e) =>{
        e.preventDefault();
        try{
        const body = {description}
        const response =await fetch("http://localhost:5000/todos", {
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify(body)
        });

        window.location ="/";
        console.log(response)
        }catch(err){
        console.error(err.message)
        }
    }
 return(
        <Fragment> 
          <h1 className="text-center mt-5"><u>PERN Todo List</u></h1>
          <form  className="d-flex mt-5" onSubmit={onSubmitFrom}>
              <input type="text" className="form-control" value = {description} onChange = { e => setDescription(e.target.value) }/>
              <button type="submit" className="btn btn-success"> Add </button>
              <h1>{setDescription}</h1>
          </form>
        </Fragment>
       
    )
}

export default InputTodo;