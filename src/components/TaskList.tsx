import styles from "./TaskList.module.css";
import { Task } from "./Task";
import { ClipboardList } from "lucide-react";
interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

interface ITaskListProps {
  tasks: ITask[];
  toggleTaskCompleted: (taskId: string) => void;
  handleDeleteTask: (id: string) => void;
}

export const TaskList = ({
  tasks,
  toggleTaskCompleted,
  handleDeleteTask,
}: ITaskListProps) => {
  const taskCount = tasks.length;
  const isCompleted = tasks.filter((task) => task.isCompleted).length;

  return (
    <section className={styles.taskList}>
      <header className={styles.header}>
        <div className={styles.createdTasksContainer}>
          <span className={styles.createdTasks}>Tarefas Criadas:</span>
          <span className={styles.createdTasksCount}>{taskCount}</span>
        </div>
        <div className={styles.createdTasksContainer}>
          <span className={styles.finishTasks}>Concluidas:</span>
          <span className={styles.createdTasksCount}>{isCompleted}</span>
        </div>
      </header>

      <div className={styles.taskItens}>
        {tasks.length > 0 ? (
          tasks.map((task) => {
            return (
              <Task
                id={task.id}
                key={task.id}
                title={task.title}
                isCompleted={task.isCompleted}
                toggleTaskCompleted={toggleTaskCompleted}
                handleDeleteTask={handleDeleteTask}
              />
            );
          })
        ) : (
          <div className={styles.emptyTask}>
            <ClipboardList size={56} />
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        )}
      </div>
    </section>
  );
};
