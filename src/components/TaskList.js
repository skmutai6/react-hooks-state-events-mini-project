import React from "react";
import Task from "./Task";

function TaskList( { tasks, onclick }) {
  const tasksList = tasks.map((task, id) =>
    <Task key={id} task={task} text={task.text} category={task.category} onclick={onclick} />
    )

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasksList}
    </div>
  );
}

export default TaskList;
