import React, { Fragment } from "react";
import './Todo.scss'

const ToDo = (props) => {

  const handleItemClickHandler = (e, data) => {
    e.preventDefault();
    props.onTaskComplete(data)
  }

  const handleItemDeleteHandler = (e, id) => {
    e.preventDefault();
    props.onTaskDelete(id);
  }

  const renderItems = () => props.toDoList.map(
    (todoItem, index) => <li key={todoItem?.id}>
      <span onClick={(e) => handleItemClickHandler(e, todoItem)} className={'title ' + (todoItem?.isCompleted ? 'underline' : '')}>{ todoItem?.title } { todoItem?.dueDate?.toString() }</span>
      <span onClick={(e) => handleItemDeleteHandler(e, todoItem?.id)} className="delete"> X </span>
    </li>
  );

  const myStyle = {
    color: props.color,
  }

  return (
    <Fragment>
      { /* Inline style type 1 */ }
      <h4 style={myStyle}>
        {props.title}
      </h4>
      { /* Inline style type 2 */ }
      <h6 style={{color: props.color}}>{props.subTitle}</h6>
      <ul>
        { renderItems() }
      </ul>
    </Fragment>
  );
}

export default ToDo;