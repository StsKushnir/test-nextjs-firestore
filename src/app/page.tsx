import TodoLists from "./lists/page";

export default function Home() {
  return (
    <div className="justify-items-center min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
      <main className="items-center sm:items-start">
          <TodoLists/>
      </main>
    </div>
  );
}
