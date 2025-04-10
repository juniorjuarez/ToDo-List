import styles from "./Tasks.module.css";
import { Trash } from "lucide-react";

interface ITaskProps {
  id: string;
  title: string;
  isCompleted: boolean;
  toggleTaskCompleted: (id: string) => void;
  handleDeleteTask: (id: string) => void;
}

export const Task = ({
  id,
  title,
  isCompleted,
  toggleTaskCompleted,
  handleDeleteTask,
}: ITaskProps) => {
  function deleteTask() {
    handleDeleteTask(id);
  }
  function handleChangeTask() {
    toggleTaskCompleted(id);
  }

  return (
    <div className={styles.task}>
      <div
        className={`${styles.taskItem} ${isCompleted ? styles.checked : ""}`}
      >
        <input
          type="checkbox"
          onChange={handleChangeTask}
          checked={isCompleted}
        />
        <p>{title}</p>
        <button className={styles.trashButton} onClick={deleteTask}>
          <Trash size={16} />
        </button>
      </div>
    </div>
  );
};
