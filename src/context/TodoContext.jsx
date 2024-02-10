import { createContext, useState } from "react";

const TodoContext = createContext({});

export const TodoContextProvider = ({ children }) => {
  const [notes, setNotes] = useState("");
  const [todo, setTodo] = useState([]);
  const addTodo = () => {
    if (notes !== "") {
      let currentTodo = { id: todo.length + 1, text: notes, checked: false };
      setTodo([...todo, currentTodo]);
      setNotes("");
    } else {
      alert("type something");
    }
  };
  console.log(todo);

  return (
    <TodoContext.Provider value={{ notes, setNotes, todo, setTodo, addTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
