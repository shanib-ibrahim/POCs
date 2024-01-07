"use client";

import { FiEdit } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";

interface TaskProps {
  task: {
    id: number;
    text: string;
    status: boolean;
  };
}

const baseUrl = "http://localhost:3000";

const Task: React.FC<TaskProps> = ({ task }) => {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalDeleted, setOpenModalDeleted] = useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = useState<string>(task.text);

  const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const data = {
      id: task.id,
      text: taskToEdit,
    };
    await fetch(`${baseUrl}/api/todo/${task.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    setOpenModalEdit(false);
    router.refresh();
  };

  const handleDeleteTask = async (id: number) => {
    await fetch(`${baseUrl}/api/todo/${id}`, {
      method: "DELETE",
    });
    setOpenModalDeleted(false);
    router.refresh();
  };

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="px-6 py-4">{task.text}</td>
      <td className="px-6 py-4 flex gap-2 justify-end">
        <FiEdit
          onClick={() => setOpenModalEdit(true)}
          cursor="pointer"
          className="text-blue-500"
          size={15}
        />
        <Modal open={openModalEdit} onClose={() => setOpenModalEdit(false)}>
          <form onSubmit={handleSubmitEditTodo}>
            <h3 className="font-bold text-2xl mb-3">Edit task</h3>
            <div className="modal-action text-end">
              <input
                value={taskToEdit}
                type="text"
                onChange={(e) => setTaskToEdit(e.target.value)}
                placeholder="Type here"
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
              >
                Submit
              </button>
            </div>
          </form>
        </Modal>
        <FiTrash2
          onClick={() => setOpenModalDeleted(true)}
          cursor="pointer"
          className="text-red-500"
          size={15}
        />
        <Modal
          open={openModalDeleted}
          onClose={() => setOpenModalDeleted(false)}
        >
          <h3 className="text-lg ">
            Are you sure, you want to delete this task?
          </h3>
          <div className="modal-action text-end mt-2">
            <button
              onClick={() => handleDeleteTask(task.id)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Yes
            </button>
          </div>
        </Modal>
      </td>
    </tr>
  );
};

export default Task;
