import { useContext } from "react";
import TodoContext from "../context/TodoContext";

function InputFeild() {
  const { notes, setNotes, addTodo } = useContext(TodoContext);

  return (
    <form className="w-full flex items-center gap-2">
      <input
        onChange={(e) => setNotes(e.target.value)}
        value={notes}
        type="text"
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="John"
        required
      />
      <button
        onClick={() => addTodo()}
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Default
      </button>
    </form>
  );
}

export default InputFeild;
