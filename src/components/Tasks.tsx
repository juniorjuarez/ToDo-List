import { useState } from "react";
import styles from "./Tasks.module.css";
import { Trash } from "lucide-react";

export const Tasks = () => {
  const [checked, setChecked] = useState<boolean>(false);

  function handleCheck() {
    setChecked(!checked);
  }

  return (
    <section className={styles.task}>
      <div className={`${styles.taskItem} ${checked ? styles.checked : ""}`}>
        <input type="checkbox" name="" id="" onChange={handleCheck} />
        <p>
          Apenas uma tarefa de teste com um texto bem longo para ter certeza e
          que não vai dar pau nessa merda que estou fazendo.
        </p>
        <button
          className={styles.trashButton}
          onClick={() => {
            console.log("teste");
          }}
        >
          <Trash size={16} />
        </button>
      </div>
    </section>
  );
};
