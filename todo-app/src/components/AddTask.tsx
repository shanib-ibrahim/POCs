import { AiOutlinePlus } from "react-icons/ai";

const AddTask = () => {
  return (
    <div className="flex">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full flex  justify-center">
        <span>Add new task</span>
        <AiOutlinePlus className="ml-2 self-center" size={18} />
      </button>
    </div>
  );
};

export default AddTask;
