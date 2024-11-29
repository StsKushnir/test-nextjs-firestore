import { List } from "@/types/interfaces";
import Link from "next/link";

interface ListsCollectionProps {
  lists: List[];
  onDeleteList: (id: string) => Promise<void>;
}

export default function ListsCollection({
  lists,
  onDeleteList,
}: ListsCollectionProps) {
  const handleDeleteList = async (id: string) => {
    try {
      await onDeleteList(id);
    } catch (error) {
      console.error("Error deleting list:", error);
    }
  };

  return (
    <div className="p-4 mt-8">
      <h2 className="text-xl font-bold mb-10">Your To-Do Lists</h2>
      <ul>
        {lists.length === 0 ? (
          <li>No lists available. Please add a list.</li>
        ) : (
          lists.map((list) => (
            <li key={list.id} className="mb-2">
              <div className="flex justify-between items-center">
                <Link
                  href={`/lists/${list.id}`}
                  className=" flex items-center justify-center w-[120px] h-[70px]  hover:bg-[#f0f0f0] bg-white rounded-lg transition-all duration-200"
                >
                  <p className="text-[#228B22] font-bold hover:scale-130 hover:text-[#2d6a4f] uppercase transition-all duration-200">
                    {list.name}
                  </p>
                </Link>
                <button
                  onClick={() => handleDeleteList(list.id)}
                  className="text-red-500 font-bold hover:underline ml-4"
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
