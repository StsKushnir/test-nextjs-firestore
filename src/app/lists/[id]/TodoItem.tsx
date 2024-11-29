import { Todo } from "@/types/interfaces";
import { useEditTodo } from "@/hooks/useEditTodo";
import { handleDeleteTodo, handleSaveTodo } from "@/lib/todoHandlers";
import { TodoActionButtons } from "@/conponents/TodoActionButtons";
import { TodoEditForm } from "@/conponents/TodoEditForm";

interface TodoItemProps {
  todo: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  listId: string;
  isDragged: boolean;
  index: number;
}

export default function TodoItem({
  todo,
  setTodos,
  listId,
  isDragged,
  index,
}: TodoItemProps) {
  const {
    editTodoId,
    editTodoName,
    editTodoDescription,
    startEditing,
    cancelEditing,
    setEditTodoName,
    setEditTodoDescription,
  } = useEditTodo(todo);

  const saveTodo = (name: string, description: string) => {
    handleSaveTodo(listId, todo.id, name, description, setTodos);
  };

  return (
    <div
      className={`w-[300px] h-[200px] flex flex-col shadow-md p-4 ${isDragged ? "bg-[#87CEFA]" : "bg-[#E0FFFF]"}`}
    >
      <div className="text-lg font-bold text-black mb-2">
        #{index}
      </div>
      {editTodoId === todo.id ? (
        <TodoEditForm
          editTodoName={editTodoName}
          editTodoDescription={editTodoDescription}
          setEditTodoName={setEditTodoName}
          setEditTodoDescription={setEditTodoDescription}
          saveEdit={saveTodo}
          cancelEditing={cancelEditing}
        />
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
    </div>
  );
}
