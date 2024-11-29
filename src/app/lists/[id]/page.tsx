"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { getListById, getTodosByListId } from "@/lib/firestore";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { List, Todo } from "@/types/interfaces";

export default function ListPage() {
  const { id } = useParams();
  const router = useRouter();
  const [list, setList] = useState<List | null>(null);
  const [todos, setTodos] = useState<Todo[]>([]);  

  useEffect(() => {
    if (id) {
      const fetchList = async () => {
        const listData = await getListById(id as string);
        setList(listData);
        const todosData = await getTodosByListId(id as string);
        setTodos(todosData);
      };

      fetchList();
    }
  }, [id]);

  return (
    <div className="container justify-items-center p-8 pb-20 gap-16">
      {list && (
        <>
          <h1 className="text-2xl font-bold">{list.name}</h1>
          <TodoForm listId={list.id} setTodos={setTodos} />
          <TodoList todos={todos} setTodos={setTodos} listId={list.id} />
          <button
            onClick={() => router.back()}
            className="mt-8 bg-gray-300 text-black py-2 px-4 rounded hover:bg-gray-400"
          >
            Back to lists
          </button>
        </>
      )}
    </div>
  );
}
