import logo from './logo.svg';
import './App.css';
import ToDo from './components/Todo/Todo';
import AddTodo from './components/Todo/AddTodo';
import { useState, useEffect } from 'react';
import { onValue, ref, set, remove, update } from "firebase/database";
import { v4 as uuidv4 } from 'uuid';
import db from './firebase/index';
function App() {

  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    const query = ref(db, "tasks");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();

      setToDoList((previousList) => []);
      if (snapshot.exists()) {
        Object.values(data).map((toDoItem) => 
          setToDoList((previousList) => [...previousList, toDoItem])
        );
      }
    });
  }, []);
  
  const receiveFormData = (data) => {
    // Receive data from grand child (child <- grand child)
    // Make API Calls with the form data
    const newUuid = uuidv4();
    if (data.myTaskName && data.myTaskDate) {
      set(ref(db, 'tasks/' + newUuid), {
        id: newUuid,
        title: data.myTaskName,
        dueDate: data.myTaskDate,
        isCompleted : false
      })
      .then(() => {
        // alert('Added successfully');
      })
      .catch((error) => {
        // The write failed...
        alert('Error!!!')
      });
    }
  }

  const toggleCompleteTask = (data) => {
    update(ref(db, 'tasks/' + data.id), {
      isCompleted : !data.isCompleted,
    })
    .then(() => {
      
    })
    .catch((error) => {
      // The write failed...
      alert('Error!!!')
    });
  }

  const deleteTask = (taskId) => {
    remove(ref(db, 'tasks/' + taskId))
      .then(() => {
        // alert('deleted successfully');
      })
      .catch((error) => {
        // The write failed...
        alert('Error!!!')
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h5>Todo App</h5>
      </header>
      <main>
        <div>
          <AddTodo
            class="todo" 
            onFormSubmit={receiveFormData}
          />
          <ToDo
            title="To do List" 
            subTitle="Well organized work" 
            color="blue"
            toDoList={toDoList}
            onTaskComplete={toggleCompleteTask}
            onTaskDelete={deleteTask}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
