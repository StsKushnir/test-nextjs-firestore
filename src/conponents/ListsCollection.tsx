import { GetServerSideProps } from "next";
import Link from "next/link";

interface List {
  id: string;
  name: string;
}

interface ListsCollectionProps {
  lists: List[];
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/lists`);
    const lists: List[] = await res.json();

    return {
      props: { lists },
    };
  } catch (error) {
    console.error("Error fetching lists:", error);
    return {
      props: { lists: [] },
    };
  }
};

const ListsCollection = ({ lists }: ListsCollectionProps) => {
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
                  className="flex items-center justify-center w-[120px] h-[70px] hover:bg-[#f0f0f0] bg-white rounded-lg transition-all duration-200"
                >
                  <p className="text-[#228B22] font-bold hover:scale-130 hover:text-[#2d6a4f] uppercase transition-all duration-200">
                    {list.name}
                  </p>
                </Link>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ListsCollection;
