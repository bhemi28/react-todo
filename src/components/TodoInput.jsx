import React, { useState } from "react";

export const TodoInput = (props) => {
  const { handleAddTodo, todoValue,setTodoValue } = props;
  

  function handleClick(){
    handleAddTodo(todoValue)
    setTodoValue('');
  }

  return (
    <header className=" w-4/5 flex mx-auto justify-around py-4 ">
      <input
        className="w-3/4 px-6 py-5 text-2xl self-center border-2 rounded-md border-zinc-500 "
        type="text"
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        placeholder="Enter the todo here..."
      />
      <button
        onClick={() => {
          handleAddTodo(todoValue);
          setTodoValue("");
        }}
        className=" bg-red-500 text-white px-8 py-2  rounded-md font-bold text-xl"
        type="submit"
      >
        Add
      </button>
    </header>
  );
};
