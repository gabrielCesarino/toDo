import { Lightbulb, Notepad } from "phosphor-react";
import { Task } from "./Task";
import styles from "./TodoList.module.css";

interface Task {
  content: string;
  id: string;
  isCheck: boolean;
}

interface TaskProps {
  tasks: Task[];
  onDeleteTask: (id: string) => void;
  checkTask: (id: string) => void;
  countCheckedTasks: Task[];
}

export function TodoList({
  tasks,
  onDeleteTask,
  checkTask,
  countCheckedTasks,
}: TaskProps) {
  const taskList = tasks;

  return (
    <main className={styles.todoList}>
      <header>
        <p className={styles.createdTasks}>
          Tarefas criadas<span>{tasks.length}</span>
        </p>
        <p className={styles.concludedTasks}>
          Concluídas
          <span>
            {countCheckedTasks.length} de {tasks.length}
          </span>
        </p>
      </header>

      <hr />

      {taskList.length !== 0 ? (
        <ul className={styles.taskList}>
          {taskList.map((task) => {
            return (
              <Task
                key={task.id}
                id={task.id}
                content={task.content}
                onDeleteTask={onDeleteTask}
                checkTask={checkTask}
              />
            );
          })}
        </ul>
      ) : (
        <div className={styles.noTaskCreated}>
          <Notepad size={56} weight="light" />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize sua rotina</p>
        </div>
      )}
    </main>
  );
}
