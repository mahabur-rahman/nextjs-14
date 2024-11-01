"use client";

import { useEffect, useState } from "react";

// Define the GraphQL query as a string
const GET_ALL_TASKS = `
  query {
    getAllTasks {
      id
      title
    }
  }
`;

const Task = () => {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks using `fetch` when the component mounts
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("http://localhost:5000/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query: GET_ALL_TASKS }),
        });

        const { data } = await response.json();
        setTasks(data.getAllTasks); // Set the tasks in state
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div>
      <h2 className="font-bold text-center text-4xl my-8">Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Task;
