import React from "react";
import TodoCard from "./TodoCard";

const TodoList = (props) => {

  const {todos} = props;

  return (
    <ul className="w-4/5 flex-col gap-8 mx-auto mt-10">
     { todos.map((todo, todoIndex) => {
        return (
          <TodoCard key={todoIndex} {...props} todoIndex={todoIndex}>
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
};

export default TodoList;
