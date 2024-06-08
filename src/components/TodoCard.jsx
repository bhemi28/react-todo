import React from "react";

const TodoCard = (props) => {
  const { children, handleDeleteTodo, handleEditTodo, todoIndex } = props;

  return (
    <>
      <li className="flex justify-between font-semibold my-3 px-12 py-3 text-xl border-2 rounded-md ">
        {children}
        <section id="edit-todo" className="flex gap-8 text-2xl text-zinc-900">
          <button
            onClick={() => {
              handleEditTodo(todoIndex);
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
