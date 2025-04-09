import React from "react";
import styles from "./TaskList.module.css";
import { Tasks } from "./Tasks";

export const TaskList = () => {
  return (
    <section className={styles.taskList}>
      <header className={styles.header}>
        <div className={styles.createdTasksContainer}>
          <span className={styles.createdTasks}>Tarefas Criadas:</span>
          <span className={styles.createdTasksCount}>10</span>
        </div>
        <div className={styles.createdTasksContainer}>
          <span className={styles.finishTasks}>Concluidas:</span>
          <span className={styles.createdTasksCount}>10</span>
        </div>
      </header>

      <Tasks />
      <Tasks />
    </section>
  );
};
