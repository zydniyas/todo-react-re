import React from "react";
import InputFeild from "./components/InputFeild";
import { TodoContextProvider } from "./context/TodoContext";
import TodoBody from "./components/TodoBody";

function App() {
  return (
    <TodoContextProvider>
      <div className="flex flex-col justify-center items-center h-screen max-w-md mx-auto w-full ">
        <TodoBody />
        <InputFeild />
      </div>
    </TodoContextProvider>
  );
}

export default App;
