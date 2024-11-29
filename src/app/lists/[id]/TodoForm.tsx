import { useState } from "react";
import { addTodo, getTodosByListId } from "@/lib/firestore";
import { Todo } from "@/types/interfaces";

interface TodoFormProps {
  listId: string;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function TodoForm({ listId, setTodos }: TodoFormProps) {
  const [todoName, setTodoName] = useState("");
  const [todoDescription, setTodoDescription] = useState("");

  const handleAddTodo = async () => {
    if (todoName.trim() && todoDescription.trim()) {
      await addTodo(listId, todoName, todoDescription);
      setTodoName("");
      setTodoDescription("");
      const updatedTodos = await getTodosByListId(listId);
      setTodos(updatedTodos);
    } else {
      alert("Please provide both name and description for the task.");
    }
  };

  return (
    <div className="mt-2">
      <input
        type="text"
        className="border p-2 mr-2 text-black"
        placeholder="Task Name"
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
      />
      <input
        className="border px-8 py-2 mr-2 text-black"
        placeholder="Task Description"
        value={todoDescription}
        onChange={(e) => setTodoDescription(e.target.value)}
      />
      <button
        onClick={handleAddTodo}
        className="bg-blue-500 text-white py-2 px-4"
      >
        Add Task
      </button>
    </div>
  );
}
