import { updateTodo, deleteTodo, getTodosByListId } from "@/lib/firestore";
import { Todo } from "@/types/interfaces";

export const handleSaveTodo = async (
  listId: string,
  todoId: string,
  name: string,
  description: string,
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
) => {
  await updateTodo(listId, todoId, { name, description });
  const updatedTodos = await getTodosByListId(listId);
  setTodos(updatedTodos);
};

export const handleDeleteTodo = async (
  listId: string,
  todoId: string,
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
) => {
  await deleteTodo(listId, todoId);
  const updatedTodos = await getTodosByListId(listId);
  setTodos(updatedTodos);
};
