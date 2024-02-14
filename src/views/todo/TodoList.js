import Todo from "./Todo";
import { useContext } from "react";
import { TodoContext } from "./TodoService";

function TodoList(){
    const {tasks} = useContext(TodoContext);
    console.log(tasks);

    return (
      <div>
        <h4 className="text-primary text-center">ToDo List</h4>
            {tasks.map(task=>(
                <Todo task={task} />
            ))}
       
       </div>
    );

}
export default TodoList;