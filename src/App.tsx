import { useState } from "react";
import "./Global.css";
import { Header } from "./components/Header";
import { InputTask } from "./components/InputTask";
import { TaskList } from "./components/TaskList";

interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  function toggleTaskCompleted(taskId: string) {
    const updateTask = tasks.map((ts) =>
      ts.id === taskId ? { ...ts, isCompleted: !ts.isCompleted } : ts
    );
    setTasks(updateTask);
  }
  function handleCreateNewTask(task: ITask) {
    setTasks([...tasks, task]);
  }

  function handleDeleteTask(taskId: string) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task.id !== taskId;
    });
    setTasks(tasksWithoutDeletedOne);
  }

  return (
    <>
      <Header />
      <InputTask handleCreateNewTask={handleCreateNewTask} />

      <TaskList
        tasks={tasks}
        toggleTaskCompleted={toggleTaskCompleted}
        handleDeleteTask={handleDeleteTask}
      />
    </>
  );
}

export default App;
