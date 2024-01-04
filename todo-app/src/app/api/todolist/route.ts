import { NextResponse } from "next/server";
import { tasks } from "../../../todo.json";

export const GET = async (request: Request) => {
  return NextResponse.json(tasks, { status: 200 });
};
