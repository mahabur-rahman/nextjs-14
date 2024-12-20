"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

// GraphQL query to fetch all tasks
const GET_ALL_TASKS = `
  query {
    getAllTasks {
      id
      title
    }
  }
`;

// GraphQL mutation to create a task
const CREATE_TASK = `
  mutation($createTaskDto: CreateTaskDto!) {
    createTask(createTaskInput: $createTaskDto) {
      id
      title
    }
  }
`;

// Updated GraphQL mutation to update a task using the correct type
const UPDATE_TASK = `
  mutation($id: String!, $updateTaskDto: UpdateTaskDto!) {
    updateTask(id: $id, updateTaskInput: $updateTaskDto) {
      id
      title
    }
  }
`;

// GraphQL mutation to delete a task
const DELETE_TASK = `
  mutation($id: String!) {
    deleteTask(id: $id) {
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
  const [editTaskId, setEditTaskId] = useState<string | null>(null);
  const [newTitle, setNewTitle] = useState<string>("");
  const [createTaskTitle, setCreateTaskTitle] = useState<string>("");

  // Fetch tasks when the component mounts
  useEffect(() => {
    const loadTasks = async () => {
      const tasks = await fetchTasks();
      setTasks(tasks);
    };

    loadTasks();
  }, []);

  // Function to create a new task
  const createTask = async (title: string) => {
    try {
      const response = await fetch("http://localhost:5000/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: CREATE_TASK,
          variables: {
            createTaskDto: { title }, // Use createTaskDto
          },
        }),
      });

      const { data, errors } = await response.json();

      if (errors) {
        console.error("GraphQL errors:", errors);
        return; // Early return if there are errors
      }

      const newTask = data.createTask;

      // Update the tasks state with the new task
      setTasks((prevTasks) => [...prevTasks, newTask]);

      // Reset create task input
      setCreateTaskTitle("");
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  // Function to update a task
  const updateTask = async (id: string, title: string) => {
    try {
      const response = await fetch("http://localhost:5000/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: UPDATE_TASK,
          variables: {
            id,
            updateTaskDto: { title }, // Updated input structure to match the GraphQL schema
          },
        }),
      });

      const { data, errors } = await response.json();

      // Handle any errors from the GraphQL response
      if (errors) {
        console.error("GraphQL errors:", errors);
        return; // Early return if there are errors
      }

      // Destructure the updated task from the response
      const updatedTask = data.updateTask;

      // Update the tasks state
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === updatedTask.id ? updatedTask : task
        )
      );

      // Reset edit state
      setEditTaskId(null);
      setNewTitle("");
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  // Function to delete a task
  const deleteTask = async (id: string) => {
    try {
      await fetch("http://localhost:5000/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: DELETE_TASK,
          variables: { id },
        }),
      });

      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div>
      <h2 className="font-bold text-center text-4xl my-8">Task List</h2>

      {/* Input for creating a new task */}
      <div className="mb-4">
        <input
          type="text"
          value={createTaskTitle}
          onChange={(e) => setCreateTaskTitle(e.target.value)}
          placeholder="New task title"
          className="border px-2 py-1"
        />
        <button
          onClick={() => createTask(createTaskTitle)}
          className="ml-2 px-3 py-1 bg-blue-500 text-white rounded"
        >
          Create Task
        </button>
      </div>

      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center my-2">
            {editTaskId === task.id ? (
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="Edit title"
                className="border px-2 py-1"
              />
            ) : (
              <span>{task.title}</span>
            )}
            {editTaskId === task.id ? (
              <button
                onClick={() => updateTask(task.id, newTitle)}
                className="ml-2 px-3 py-1 bg-green-500 text-white rounded"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => {
                  setEditTaskId(task.id);
                  setNewTitle(task.title);
                }}
                className="ml-2 px-3 py-1 bg-blue-500 text-white rounded"
              >
                Edit
              </button>
            )}
            <button
              onClick={() => deleteTask(task.id)}
              className="ml-2 px-3 py-1 bg-red-500 text-white rounded"
            >
              Delete
            </button>
            <Link
              href={`/task/${task.id}`}
              className="ml-2 px-3 py-1 bg-slate-500 text-white rounded"
            >
              Get single task
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Task;
