"use client";

import { FiEdit } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";

const Task = ({ task }) => {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalDeleted, setOpenModalDeleted] = useState(false);

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
          <form>
            <h3 className="font-bold text-lg">Edit task</h3>
            <div className="modal-action">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
              <button type="submit" className="btn">
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
          <h3 className="text-lg">
            Are you sure, you want to delete this task?
          </h3>
          <div className="modal-action">
            <button onClick={() => handleDeleteTask(task.id)} className="btn">
              Yes
            </button>
          </div>
        </Modal>
      </td>
    </tr>
  );
};

export default Task;
