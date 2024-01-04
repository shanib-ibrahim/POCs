import { NextResponse } from "next/server";
import { tasks } from "../../../../todo.json";

export const GET = async (
  request: Request,
  { params }: { params: { id: number } }
) => {
  const task = tasks.filter((task) => task.id === Number(params.id));
  return NextResponse.json(task, { status: 200 });
};
