import { useState } from "react";
import "./Global.css";
import { Header } from "./components/Header";
import { InputTask } from "./components/InputTask";
import { TaskList } from "./components/TaskList";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <InputTask />
      <TaskList />
    </>
  );
}

export default App;
