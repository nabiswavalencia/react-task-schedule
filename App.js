import { useState } from "react";
import Header from "./components/header";
import Task from "./components/tasks";

function App() {
  const[tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: "Doctor's Appointment",
        day: "Feb 5th at 2:30PM",
        reminder: true,
      },
      {
        id: 2,
        text: "Meeting at school",
        day: "Feb 6th at 1:30PM",
        reminder: true,
      },
      {
        id: 3,
        text: "Food Shopping",
        day: "Feb 5th at 2:30PM",
        reminder: false,
      }
      
    ]
  )

  //delete task
  const deleteTask = (id)=>{
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //toggle reminder
const toggleReminder = (id) => {
  
}

  return (
    <>
    
    <div className="container">
       <Header title='Task Tracker'/>
       {tasks.length > 0 ? (<Task tasks={tasks} onDelete={deleteTask}/>) : "No tasks today"}
      <h1> </h1>
      
    </div>
    </>
    
  );
}


export default App;

