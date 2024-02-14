import { useContext } from "react";
import { TodoContext } from "./TodoService";

function Todo(props){

    const {toggleStatus, deleteTask} = useContext(TodoContext)

    return(
        <div className="border-bottom mb-2 ">
            <div className="text-end">

                <button className="btn btn-danger" onClick={()=>deleteTask(props.task.id)} ><i className="fa-solid fa-trash"></i></button>

                {props.task.isCompleted ? 
                <button className="btn btn-success ms-2" onClick={()=>toggleStatus(props.task.id)} ><i className="fa-solid fa-check"></i></button> :
                <button className="btn btn-warning ms-2" onClick={()=>toggleStatus(props.task.id)}><i className="fa-solid fa-xmark"></i></button>
                 }

            </div>
  
                <h6 > ID: <span className="text-danger">{props.task.id}</span> </h6>
                <h6 > Task Name: <span className="text-danger">{props.task.name}</span> </h6>
                <h6 > Task Completed: {props.task.isCompleted ? <span className="text-success">Yes</span> : <span className="text-danger">No</span> }</h6>

        </div>
    )

}

export default Todo;