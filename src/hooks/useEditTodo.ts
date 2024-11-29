import { Todo } from "@/types/interfaces";
import { useState } from "react";

export function useEditTodo(todo: Todo) {
  const [editTodoId, setEditTodoId] = useState<string | null>(null);
  const [editTodoName, setEditTodoName] = useState(todo.name);
  const [editTodoDescription, setEditTodoDescription] = useState(todo.description);

  const startEditing = () => setEditTodoId(todo.id);

  const cancelEditing = () => setEditTodoId(null);

  const saveEdit = (saveTodo: (name: string, description: string) => Promise<void>) => {
    saveTodo(editTodoName, editTodoDescription);
    setEditTodoId(null);
  };

  return {
    editTodoId,
    editTodoName,
    editTodoDescription,
    startEditing,
    cancelEditing,
    saveEdit,
    setEditTodoName,
    setEditTodoDescription
  };
}
