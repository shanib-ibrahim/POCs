import AddTask from "@/components/AddTask";
import TodoList from "@/components/TodoList";

const baseUrl = "http://localhost:3000";

export default async function Home() {
  const res = await fetch(`${baseUrl}/api/todo`, { cache: "no-store" });
  const tasks = await res.json();
  return (
    <main>
      <div className="my-5">
        <AddTask tasks={tasks} />
        <TodoList tasks={tasks} />
      </div>
    </main>
  );
}
