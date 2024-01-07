import Task from "./Task";

interface TaskProps {
  tasks: [
    {
      id: number;
      text: string;
      status: boolean;
    }
  ];
}
const TodoList: React.FC<TaskProps> = ({ tasks }) => {
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
