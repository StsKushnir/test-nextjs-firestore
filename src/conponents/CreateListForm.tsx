import { useState } from "react";

interface CreateListFormProps {
  onAddList: (name: string) => void; 
}

export default function CreateListForm({ onAddList }: CreateListFormProps) {
  const [listName, setListName] = useState("");

  const handleSubmit = () => {
    if (listName.trim()) {
      onAddList(listName);
      setListName("");
    } else {
      alert("Please provide a name for the list.");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Create a New To-Do List</h1>
      <input
        type="text"
        className="border border-gray-300 p-2 mb-4 text-black"
        value={listName}
        onChange={(e) => setListName(e.target.value)}
        placeholder="Enter list name"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white py-2 px-4 rounded"
      >
        Add List
      </button>
    </div>
  );
}
