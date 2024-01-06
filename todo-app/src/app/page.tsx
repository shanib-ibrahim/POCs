"use client";
import AddTask from "@/components/AddTask";
import TodoList from "@/components/TodoList";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <main>
      <div className="my-5">
        <AddTask />
        <TodoList />
      </div>
    </main>
  );
}
