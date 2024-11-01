"use client";

import React, { useState, useEffect } from "react";

// Define the GraphQL queries and mutations as strings
const GET_ALL_TASKS = `
  query {
    getAllTasks {
      id
      title
    }
  }
`;

const CREATE_TASK = `
  mutation($createTaskInput: CreateTaskDto!) {
    createTask(createTaskInput: $createTaskInput) {
      id
      title
    }
  }
`;

interface Task {
  id: string;
  title: string;
}

async function fetchTasks() {
  const response = await fetch("http://localhost:5000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: GET_ALL_TASKS }),
    cache: "no-store",
  });

  const { data } = await response.json();
  return data.getAllTasks;
}

const Task = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");

  const fetchAndSetTasks = async () => {
    const tasksData = await fetchTasks();
    setTasks(tasksData);
  };

  // Fetch tasks when the component mounts
  useEffect(() => {
    fetchAndSetTasks();
  }, []);

  const handleCreateTask = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: CREATE_TASK,
        variables: {
          createTaskInput: { title }, // Create Task input object
        },
      }),
    });

    const { data } = await response.json();
    if (data.createTask) {
      setTasks((prevTasks) => [...prevTasks, data.createTask]); // Add the new task to the list
      setTitle(""); // Clear the input field
    }
  };

  return (
    <div>
      <h2 className="font-bold text-center text-4xl my-8">Task List</h2>

      <form onSubmit={handleCreateTask} className="mb-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title"
          className="border rounded p-2"
          required
        />
        <button
          type="submit"
          className="ml-2 bg-blue-500 text-white rounded p-2"
        >
          Create Task
        </button>
      </form>

      <ul>
        {tasks.map((task: Task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Task;
