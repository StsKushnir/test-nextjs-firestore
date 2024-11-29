import { Todo } from "@/types/interfaces";
import TodoItem from "./TodoItem";
import { useDragAndDrop } from "@/hooks/useDragAndDrop";

interface TodoListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  listId: string;
}

export default function TodoList({ todos, setTodos, listId }: TodoListProps) {
  const { handleDragStart, handleDragOver, handleDrop, draggedTodoIndex } =
    useDragAndDrop(todos, setTodos);

  return (
    <ul className="flex mt-6 flex-wrap gap-4">
      {todos.length === 0 ? (
        <li>No tasks available. Add a task.</li>
      ) : (
        todos.map((todo, index) => (
          <li
            key={todo.id}
            draggable
            onDragStart={(event) => handleDragStart(event, index)}
            onDragOver={(event) => handleDragOver(event, index)}
            onDrop={(event) => handleDrop(event, index)}
            className="rounded-lg"
          >
            <TodoItem
              todo={todo}
              setTodos={setTodos}
              listId={listId}
              isDragged={draggedTodoIndex === index}
              index={index + 1}
            />
          </li>
        ))
      )}
    </ul>
  );
}
