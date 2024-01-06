import Task from "./Task";
const TodoList = () => {
  const tasks = [
    {
      id: 1,
      text: "Reading NextJS Documentation",
      status: true,
    },
    {
      id: 2,
      text: "Testing edit function",
      status: false,
    },
    {
      id: 3,
      text: "Read book 0.5 hours",
      status: true,
    },
    {
      id: 4,
      text: "Workout 1hour",
      status: false,
    },
    {
      id: 5,
      text: "Reading NextJS Documentation",
      status: true,
    },
  ];
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-4">
              Tasks
            </th>
            <th scope="col" className="px-6 py-4 text-right">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
        {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
