import { TodoContext } from "./TodoService";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import { useState } from "react";

function TodoApp(){

    const [tasks, setTasks] = useState([
        {
            id: 1,
            name: 'Taking React JS class at 8 am',
            isCompleted: true
        },
        {
            id: 2,
            name: 'Going to Hanuman Movie.',
            isCompleted: false
        },
        {
            id: 3,
            name: 'Shopping',
            isCompleted: false
        }
    ]);

    const toggleStatus = (id)=>{
        const updatedTasks = tasks.map((task)=>{
            if(id === task.id){
                return {...task, isCompleted:!task.isCompleted};
            }
            return task;
        })
        setTasks(updatedTasks);
    }

    const deleteTask = (id)=>{
        setTasks(tasks.filter(task=> task.id !== id ))
    }

    const addTask = (taskName)=>{
        setTasks([...tasks,{id:tasks.length+1,name:taskName,isCompleted:false}]);
    }

    return (
      <div className="container">  
        <div className="row">
          <TodoContext.Provider value={{tasks : tasks, toggleStatus:toggleStatus, deleteTask:deleteTask,addTask:addTask}}>
                < div className="col-sm">
                    <TodoList/>
                </div>

                < div className="col-sm">
                    <AddTodo/>
                </div>
          </TodoContext.Provider>
        </div>
      </div>
    );

}

export default TodoApp;