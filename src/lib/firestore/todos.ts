import { Todo } from "@/types/interfaces";
import { db } from "../firebase";
import { addDoc, collection, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";

export const getTodosByListId = async (listId: string): Promise<Todo[]> => {
  const todosRef = collection(db, `lists/${listId}/todos`);
  const snapshot = await getDocs(todosRef);
  return snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      name: data.name,
      description: data.description,
    };
  });
};

export const addTodo = async (
  listId: string,
  name: string,
  description: string
): Promise<void> => {
  const todosRef = collection(db, `lists/${listId}/todos`);
  await addDoc(todosRef, { name, description });
};

export const deleteTodo = async (listId: string, todoId: string): Promise<void> => {
  const todoRef = doc(db, `lists/${listId}/todos`, todoId);
  await deleteDoc(todoRef);
};

export const updateTodo = async (
  listId: string,
  todoId: string,
  updatedData: { name?: string; description?: string }
): Promise<void> => {
  const todoRef = doc(db, `lists/${listId}/todos`, todoId);
  await updateDoc(todoRef, updatedData);
};
