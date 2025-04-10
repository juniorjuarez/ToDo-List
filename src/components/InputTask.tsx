import {
  useState,
  type FormEvent,
  ChangeEvent,
  type InvalidEvent,
} from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./InputTask.module.css";

interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

interface IInputTaskProps {
  handleCreateNewTask: (task: ITask) => void;
}
export const InputTask = ({ handleCreateNewTask }: IInputTaskProps) => {
  const [readInput, setReadInput] = useState("");

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setReadInput(event.target.value);
  }

  function handleInputNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo não pode ficar vazio");
  }

  function createTask(event: FormEvent) {
    event.preventDefault();
    if (readInput === "") {
      alert("O campo não pode ser vazio");
    } else {
      let taskInput: ITask = {
        id: uuidv4(),
        title: readInput,
        isCompleted: false,
      };
      handleCreateNewTask(taskInput);
      setReadInput("");
    }
  }

  return (
    <div>
      <form className={styles.input_task} onSubmit={createTask}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          onInvalid={handleInputNewTaskInvalid}
          onChange={handleNewTaskChange}
          value={readInput}
          required
        />
        <button type="submit">criar</button>
      </form>
    </div>
  );
};
