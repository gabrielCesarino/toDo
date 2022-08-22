import { Trash } from "phosphor-react";
import { useState } from "react";
import styles from "./Task.module.css";

interface TaskProps {
  content: string;
  id: string;
  onDeleteTask: (id: string) => void;
  checkTask: (id: string) => void;
}

export function Task({ content, id, onDeleteTask, checkTask }: TaskProps) {
  const [isCheck, setIsCheck] = useState(false);

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  function handleCheckTask(event) {
    checkTask(id);
    setIsCheck(!isCheck);
  }

  return (
    <li className={`${styles.task} ${isCheck && styles.isCheck}`}>
      <div className={styles.taskContent}>
        <input type="checkbox" onChange={handleCheckTask} />
        <p>{content}</p>
      </div>
      <span className={styles.trash}>
        <Trash size={24} onClick={handleDeleteTask} />
      </span>
    </li>
  );
}
