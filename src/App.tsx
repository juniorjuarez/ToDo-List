import { useState } from "react";
import "./Global.css";
import { Header } from "./components/Header";
import { InputTask } from "./components/InputTask";
import { TaskList } from "./components/TaskList";
import styles from "./App.module.css";

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
    <main className={styles.main}>
      <Header />
      <InputTask handleCreateNewTask={handleCreateNewTask} />

      <TaskList
        tasks={tasks}
        toggleTaskCompleted={toggleTaskCompleted}
        handleDeleteTask={handleDeleteTask}
      />
    </main>
  );
}

export default App;
