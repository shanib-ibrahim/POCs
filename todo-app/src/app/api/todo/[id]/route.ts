import { NextResponse } from "next/server";
import todo from "@/data/todo.json";
import fs from "fs";

export const GET = async (
  request: Request,
  { params }: { params: { id: number } }
) => {
  const task = todo.tasks.filter((task) => task.id === Number(params.id));
  return NextResponse.json(task, { status: 200 });
};

export const DELETE = async (
  request: Request,
  { params }: { params: { id: number } }
) => {
  let msg = "Successfully deleted the task";
  let status = 200;
  const data = {
    tasks: todo.tasks.filter((task) => task.id !== Number(params.id)),
  };
  await fs.writeFile("./src/todo.json", JSON.stringify(data), (err) => {
    if (err) {
      msg = "Error in deleting the tasks :" + err;
      status = 500;
    }
  });
  return NextResponse.json(msg, { status });
};

export const PUT = async (
  request: Request,
  { params }: { params: { id: number } }
) => {
  let msg = "Successfully edited the task";
  let status = 200;
  const taskData = await request.json();
  const task = todo.tasks.find((task) => task.id === Number(params.id));
  if (task) {
    task.text = taskData.text;
  }
  const data = { tasks: todo.tasks };
  await fs.writeFile(
    "./src/data/todo.json",
    JSON.stringify(data, null, 2),
    (err) => {
      if (err) {
        msg = "Error in editing the tasks :" + err;
        status = 500;
      }
    }
  );
  return NextResponse.json(msg, { status });
};
