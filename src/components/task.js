import React, { useState } from "react";

export default function Task({ item, onUpdate, onDelete }) {
  const [isEdit, setIsEdit] = useState(false);
  const [newValue, setNewValue] = useState(item.title);

  // Función para manejar la actualización de la tarea
  function handleClickUpdateEdit(e) {
    e.preventDefault();
    onUpdate(item.id, newValue);
    setIsEdit(false);
  }

  // Función para manejar el cambio en la entrada de texto de edición
  function handleChange(e) {
    const value = e.target.value;
    setNewValue(value);
  }

  // JSX para el formulario de edición
  const FormEdit = (
    <form className="listUpdateForm" onSubmit={handleClickUpdateEdit}>
      <input
        type="text"
        className="listInput"
        onChange={handleChange}
        value={newValue}
      />
      <button type="submit" className="buttonUpdate">
        Update
      </button>
    </form>
  );

  // JSX para la representación de la tarea y los botones
  const TaskElement = (
    <div className="taskInfo">
      {item.title}
      <button className="buttonEdit" onClick={() => setIsEdit(true)}>
        Edit
      </button>
      <button className="buttonD" onClick={() => onDelete(item.id)}>
        Delete
      </button>
    </div>
  );

  // JSX principal que renderiza FormEdit o TaskElement según el estado de isEdit
  return <div className="List">{isEdit ? FormEdit : TaskElement}</div>;
}

