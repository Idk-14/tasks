import { useState } from "react";
import Task from "./task";
import "./styles.css"

export default function TodoApp(){

    const [title, setTitle] = useState("");

    const [task, setTask] = useState([]);

// Esta funcion hace que el texto cambie

    function handleChange(event){
        const value = event.target.value;

        setTitle(value);
    }



    function handleDelete(id){
        const temp = task.filter((item) => item.id != id); 
    
        setTask(temp);
    
    }
//Boton que agrega las tareas en forma de lista

    function handleSubmit(e){
        e.preventDefault();

        const newTask = {
            id: crypto.randomUUID(),
            title:title,
            completed: false,
        };

        const temp = [... task];
        temp.unshift(newTask);

        setTask(temp);
        setTitle("");
    }

// Esta es la funcion para editar las tareas //
    function handleUpdate(id, value){
        const temp = [... task];
        const item = temp.find(item => item.id === id);
        item.title = value;
        setTask(temp);
    }

    return (<div className="tasksContainer">
        <form className="tasksCreateForm" onSubmit={handleSubmit}>
            <input onChange={handleChange} className="taskInput" value={title} placeholder="Agrega tu tarea"/>
            <input onClick={handleSubmit} type="submit" value="Create" className="buttonCreate"/>

        </form>

{/* Esta parte del codigo es la que muestra las tareas agregadas
el .map es para buscar los datos y convertirlas a una estructura html  

la propiedad key es para que no confunda los elementos o renderice uno antesque otro
*/}
      <div className="taskContainerWrapper">
        {/* Esta parte del código es la que muestra las tareas agregadas */}
        <div className="taskContainer">
          {task.map((item) => (
            <Task
              key={item.id}
              item={item}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </div>
    );
}