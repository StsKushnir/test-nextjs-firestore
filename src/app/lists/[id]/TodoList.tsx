import { Todo } from "@/types/interfaces";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  listId: string;
}

export default function TodoList({ todos, setTodos, listId }: TodoListProps) {
  return (
    <ul className="flex mt-6 flex-wrap gap-4 justify-center">
      {todos.length === 0 ? (
        <li>No tasks available. Add a task.</li>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            setTodos={setTodos}
            listId={listId}
          />
        ))
      )}
    </ul>
  );
}
