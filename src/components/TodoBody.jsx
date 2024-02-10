import { useContext } from "react";
import TodoContext from "../context/TodoContext";
import TodoItem from "./TodoItem";

function TodoBody() {
  const { todo } = useContext(TodoContext);
  return (
    <div>
      <ul>
        {todo.map((item, i) => (
          <TodoItem key={i} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default TodoBody;
