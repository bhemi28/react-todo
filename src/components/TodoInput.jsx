import React, { useState } from "react";

export const TodoInput = (props) => {
  const { handleAddTodo, todoValue,setTodoValue } = props;
  

  function handleClick(){
    handleAddTodo(todoValue)
    setTodoValue('');
  }

  return (
    <header className=" w-4/5 flex mx-auto justify-between md:gap-8 gap-4 py-4 ">
      <input
        className="w-full md:px-6 md:py-5 px-2 py-1 md:text-2xl text-sm border-2 rounded-md border-zinc-500 "
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
        className=" bg-red-500 text-white md:px-8 md:py-2 px-4 py-2  rounded-md  font-bold  text-sm md:text-2xl"
        type="submit"
      >
        Add
      </button>
    </header>
  );
};
