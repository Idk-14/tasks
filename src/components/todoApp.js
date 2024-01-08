import { useState } from "react";

export default function TodoApp(){

    const [title, setTitle] = useState("Agrega tu tarea");

    const [task, setTask] = useState([]);

// Esta funcion hace que el texto cambie

    function handleChange(event){
        const value = event.target.value;

        setTitle(value);
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
    }

    return (<div className="todoContainer">
        <form className="todoCreateForm" onSubmit={handleSubmit}>
            <input onChange={handleChange} className="todoInput" value={title}/>
            <input onClick={handleSubmit} type="submit" value="create todo" className="buttunCreate"/>

        </form>

{/* Esta parte del codigo es la que muestra las tareas agregadas
el .map es para buscar los datos y convertirlas a una estructura html  

la propiedad key es para que no confunda los elementos o renderice uno antesque otro
*/}

        <div className="taskcontainer">
            {
                task.map(item => (
                    <div key={item.id}>{item.title}</div>
                ))
            }
        </div>
    </div>
    );
}