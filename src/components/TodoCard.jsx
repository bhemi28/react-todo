import React from "react";

const TodoCard = (props) => {
  const { children, handleDeleteTodo, handleEditTodo, todoIndex } = props;

  return (
    <>
      <li className="flex justify-between font-semibold my-3 sm:px-12 sm:py-3 px-4 py-1  border-2 rounded-md ">
        <h2 className="  w-9/12 text-wrap break-words sm:text-xl text-base">{children}</h2>
        <section id="edit-todo" className="flex sm:gap-8  gap-4 sm:text-2xl text-lg text-zinc-900">
          <button
            onClick={() => {
              handleEditTodo(todoIndex);
              console.log(children);
            }}
          >
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button
            onClick={() => {
              handleDeleteTodo(todoIndex);
            }}
          >
            <i className="fas fa-trash text-red-600"></i>
          </button>
        </section>
      </li>
    </>
  );
};

export default TodoCard;
