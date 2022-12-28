import { useRef, useState } from "react";
import "./AddTodo.scss";

const AddTodo = (props) => {
  const [taskName, setTaskName] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const taskRef = useRef();

  const taskNameChangeHandler = ($event) => {
    setTaskName($event.target.value);
  }

  const taskDateChangeHandler = ($event) => {
    setTaskDate($event.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onFormSubmit({
      myTaskName: taskName,
      myTaskDate: taskDate
    });
    setTaskName('');
    setTaskDate('');
    taskRef.current.focus();
  }
  return (
    <>
      { /* React fragment: <Fragment> and shortform is <> */ }
      <form onSubmit={handleSubmit} className="create-container">

        <div className="create-container__row">
          <div>Task Name</div>
          <div>
            { 
            /* 
              > two way binding
              > set css width from props with % 
              > add conditional style & class name
            */
            }
            <input 
              ref={taskRef}
              type="text"
              className={`input-class ${props?.class} ${props.myWidth > 50 ? 'red' : 'green' }`}
              value={taskName} 
              onChange={taskNameChangeHandler}
            />
          </div>
        </div>

        <div className="create-container__row">
          <div>Task Date</div>
          <div><input type="date" value={taskDate} onChange={taskDateChangeHandler}></input></div>
        </div>

        <div className="create-container__row btn-submit">
          <button type="submit">Add Task</button>
        </div>
        
      </form>
    </>
  )
}

export default AddTodo;
