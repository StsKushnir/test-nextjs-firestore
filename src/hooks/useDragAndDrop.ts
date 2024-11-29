import { Todo } from "@/types/interfaces";
import { useState } from "react";

export const useDragAndDrop = (todos: Todo[], setTodos: React.Dispatch<React.SetStateAction<Todo[]>>) => {
  const [draggedTodoIndex, setDraggedTodoIndex] = useState<number | null>(null);

  const handleDragStart = (event: React.DragEvent, index: number) => {
    setDraggedTodoIndex(index);
    event.dataTransfer.setData("text/plain", index.toString());
  };

  const handleDragOver = (event: React.DragEvent, index: number) => {
    event.preventDefault();
    if (draggedTodoIndex === index) return;
  };

  const handleDrop = (event: React.DragEvent, targetIndex: number) => {
    event.preventDefault();
    if (draggedTodoIndex === null) return;

    const updatedTodos = [...todos];
    const draggedTodo = updatedTodos[draggedTodoIndex];
    updatedTodos.splice(draggedTodoIndex, 1);
    updatedTodos.splice(targetIndex, 0, draggedTodo);
    setTodos(updatedTodos);
    setDraggedTodoIndex(null);
  };

  return { handleDragStart, handleDragOver, handleDrop, draggedTodoIndex };
};
