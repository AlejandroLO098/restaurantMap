import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Friends2 from "./Friends2";
import AddFriend from "./AddFriend";

// function App() {
//   const name = "alejandro";
//   const x = true;
//   return (
//     <div className="container">
//       <Header />
//     </div>
//   );
// }

const Friends = () => {
  const [showAddtask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Erik",
      day: "test123@gmail.com",
      reminder: true,
    },
    {
      text: "Mario",
      day: "test456@gmail.com",
      reminder: false,
      id: 3,
    },
    {
      text: "hello",
      day: "rn",
      reminder: false,
      id: 4,
    },
  ]);

  // useEffect(() => {
  //   const getTasks = async () => {
  //     const tasksFromServer = await fetchTasks();
  //     setTasks(tasksFromServer);
  //   };

  //   getTasks();
  // }, []);

  //Add task
  const addTask = async (task) => {
    // const res = await fetch("http://localhost:5000/tasks", {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify(task),
    // });

    // const data = await res.json();
    // setTasks([...tasks, data]);
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  //Delete task
  const deleteTask = async (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //toggle reminder
  const toggleReminder = async (id) => {
    // const taskToToggle = await fetchTask(id);
    // const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    // // const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    // //   method: "PUT",
    // //   headers: {
    // //     "Content-type": "application/json",
    // //   },
    // //   body: JSON.stringify(updTask),
    // // });

    // const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: task.reminder } : task
      )
    );
  };

  return (
    <Router>
      <div className="container1">
        <Header
          onAdd={() => setShowAddTask(!showAddtask)}
          showAdd={showAddtask}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {showAddtask && <AddFriend onAdd={addTask} />}
                {tasks.length > 0 ? (
                  <Friends2
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                  />
                ) : (
                  "No friends to show"
                )}
              </>
            }
          />
          <Route path="/show" />
        </Routes>
      </div>
    </Router>
  );
};

export default Friends;
