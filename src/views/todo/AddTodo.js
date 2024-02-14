import { useState, useContext } from "react";
import { TodoContext } from "./TodoService";

function AddTodo(){

    const [task,setTask] = useState('');
    const {addTask} = useContext(TodoContext);
    
    const addToList = ()=>{
       addTask(task);
       setTask('');
    }

    return(
        <div className="row">
           <div className="col-sm-10 text-center">
                <h4 className="text-primary mb-3">Add Todo List</h4>
          
                <div className="mb-2" id="name">
                    <label>Task Name :  </label>
                    <input value={task} className="ms-2" onChange={(event)=>setTask(event.target.value)} placeholder="enter task name"/>
                </div>

                <div className="mb-2">
                    <button className="btn btn-primary btn-sm" onClick={()=>addToList()} >Add</button>
                </div>
           </div>
        </div>
    )

}

export default AddTodo;