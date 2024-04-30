import React from "react";

function NewTaskForm({ onTaskFormSubmit, categories }) {
  const newArr = categories.filter(cat => cat !== "All").map((cat, index) => <option key={index}>{cat}</option>);

  return (
    <form className="new-task-form" onSubmit={function (event) {
      event.preventDefault();
      const newTask = document.getElementsByName("text")[0].value;
      const taskCategory = document.getElementsByName("category")[0].value;
      onTaskFormSubmit({ "text": newTask, "category": taskCategory })}}
      autoComplete="off">

      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {/* render <option> elements for each category here */}
          {newArr}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
