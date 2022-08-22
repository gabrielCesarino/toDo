import { PlusCircle } from "phosphor-react";
import { useState } from "react";
import styles from "./Todo.module.css";
import { TodoList } from "./TodoList";
import { v4 as uuidv4 } from "uuid";

interface Task {
  content: string;
  id: string;
  isCheck: boolean;
}

export function Todo() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newInput, setNewInput] = useState("");

  function handleCreateTask() {
    setTasks([
      {
        content: newInput,
        id: uuidv4(),
        isCheck: false,
      },
      ...tasks,
    ]);

    setNewInput("");
  }

  function handleNewInput(event) {
    setNewInput(event?.target.value);
  }

  function deleteTask(id: string) {
    const taskListWithoutDeletedOne = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(taskListWithoutDeletedOne);
  }

  function checkTask(id: string) {
    const taskListWithCheckedOnes = tasks.map((task) => {
      if (task.id === id) {
        task.isCheck = !task.isCheck;
      }

      return task;
    });

    const organizedList = taskListWithCheckedOnes.sort(
      (a, b) => Number(a.isCheck) - Number(b.isCheck)
    );
    console.log(organizedList);

    setTasks(organizedList);
  }

  const countCheckedTasks = tasks.filter((task) => task.isCheck);

  return (
    <>
      <div className={styles.input}>
        <input onChange={handleNewInput} value={newInput} type="text" />
        <button type="submit" onClick={handleCreateTask}>
          Criar <PlusCircle size={20} weight="bold" />
        </button>
      </div>
      <TodoList
        tasks={tasks}
        onDeleteTask={deleteTask}
        checkTask={checkTask}
        countCheckedTasks={countCheckedTasks}
      />
    </>
  );
}
