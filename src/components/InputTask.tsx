import React from "react";
import styles from "./InputTask.module.css";

export const InputTask = () => {
  return (
    <div className={styles.input_task}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button>criar</button>
    </div>
  );
};
