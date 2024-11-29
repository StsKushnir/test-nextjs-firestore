"use client";

import { useState, useEffect } from "react";
import { addList, getLists, deleteList } from "@/lib/firestore";
import CreateListForm from "@/conponents/CreateListForm";
import ListsCollection from "@/conponents/ListsCollection";
interface List {
  id: string;
  name: string;
}

export default function TodoListsPage() {
  const [lists, setLists] = useState<List[]>([]);

  const fetchLists = async () => {
    const updatedLists = await getLists();
    setLists(updatedLists);
  };

  const handleAddList = async (name: string) => {
    await addList(name);
    await fetchLists();
  };

  const handleDeleteList = async (id: string) => {
    await deleteList(id);
    await fetchLists();
  };

  useEffect(() => {
    fetchLists();
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <CreateListForm onAddList={handleAddList} />
        <ListsCollection lists={lists} onDeleteList={handleDeleteList} />
      </main>
    </div>
  );
}
