import { NextResponse } from "next/server";
import todo from "../../../todo.json";
import fs from "fs";

export const GET = async (request: Request) => {
  return NextResponse.json(todo.tasks, { status: 200 });
};

export async function POST(request: Request) {
  let msg = "Successfully added the task";
  let status = 200;
  const task = await request.json();
  todo.tasks.push(task);
  const data = { tasks: todo.tasks };
  await fs.writeFile("./src/todo.json", JSON.stringify(data), (err) => {
    if (err) {
      msg = "Error in adding the tasks :" + err;
      status = 500;
    }
  });
  return NextResponse.json(msg, { status });
}
