import { useState, useEffect } from "react";
import { TodoInput } from "./components/TodoInput";
import TodoList from "./components/TodoList";

import "./index.css";

function App() {
  // let todos = ["do something 1", "do something 4", "do something 3"];
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  function persistData (newList){
    localStorage.setItem('todos', JSON.stringify({ todos: newList}))
  }

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleEditTodo (index){
    const valueToEdit = todos[index];
    setTodoValue(valueToEdit);
    handleDeleteTodo(index)
  }

  useEffect(() => {
    if(!localStorage) {return }

    let lcoalTodos = localStorage.getItem('todos');
    if(!lcoalTodos) {return }

    lcoalTodos = JSON.parse(lcoalTodos).todos
    setTodos(lcoalTodos);

  }, [])
  

  return (
    <>
      <TodoInput handleAddTodo={handleAddTodo} todoValue={todoValue} setTodoValue={setTodoValue} />
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo}handleEditTodo={handleEditTodo} />
    </>
  );
}

export default App;
