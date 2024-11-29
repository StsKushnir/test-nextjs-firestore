import { Todo } from "@/types/interfaces";
import { useEditTodo } from "@/hooks/useEditTodo";
import { handleSaveTodo, handleDeleteTodo } from "@/lib/todoHandlers";
import { TodoActionButtons } from "@/conponents/TodoActionButtons";

interface TodoItemProps {
  todo: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  listId: string;
}

export default function TodoItem({ todo, setTodos, listId }: TodoItemProps) {
  const {
    editTodoId,
    editTodoName,
    editTodoDescription,
    startEditing,
    cancelEditing,
    saveEdit,
    setEditTodoName,
    setEditTodoDescription,
  } = useEditTodo(todo);

  return (
    <li className="max-w-[300px] h-[200px] flex flex-col bg-[#E0FFFF] rounded-lg shadow-md p-4">
      {editTodoId === todo.id ? (
        <div className="flex flex-col gap-2">
          <input
            type="text"
            className="border p-2 text-black"
            value={editTodoName}
            onChange={(e) => setEditTodoName(e.target.value)}
          />
          <textarea
            className="border p-2 text-black"
            value={editTodoDescription}
            onChange={(e) => setEditTodoDescription(e.target.value)}
          />
          <div className="flex justify-between mt-2">
            <button
              onClick={() =>
                saveEdit((name, description) =>
                  handleSaveTodo(listId, todo.id, name, description, setTodos)
                )
              }
              className="bg-green-500 text-white py-1 px-4 rounded"
            >
              Save
            </button>
            <button
              onClick={cancelEditing}
              className="bg-gray-500 text-white py-1 px-4 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="flex flex-row mb-2">
              <p className="text-black font-bold mr-2">Task Name:</p>
              <p className="font-bold text-[#006400]">{todo.name}</p>
            </div>
            <div className="flex flex-row">
              <p className="text-black font-bold mr-2">Description:</p>
              <p className="font-bold text-[#008000]">{todo.description}</p>
            </div>
          </div>
          <TodoActionButtons
            onChange={startEditing}
            onDelete={() => handleDeleteTodo(listId, todo.id, setTodos)}
          />
        </div>
      )}
    </li>
  );
}
