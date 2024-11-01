"use client";

import React, { useEffect, useState } from "react";

const GET_TASK_BY_ID = (id: string) => `
  query {
    getTaskById(id: "${id}") {
      id
      title
    }
  }
`;

const TaskDetails = ({ params }: { params: { id: string } }) => {
  const [task, setTask] = useState<{ id: string; title: string } | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTaskDetails = async () => {
      try {
        const response = await fetch("http://localhost:5000/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: GET_TASK_BY_ID(params.id), // Use the dynamic ID in the query
          }),
        });

        const { data, errors } = await response.json();

        if (errors) {
          setError("Error fetching task details.");
          console.error("GraphQL errors:", errors);
          return;
        }

        setTask(data.getTaskById);
      } catch (error) {
        setError("Failed to fetch task details.");
        console.error("Error fetching task details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTaskDetails();
  }, [params.id]); // Fetch task details when the ID changes

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Task Details</h1>
      {task ? (
        <div>
          <h2>{task.title}</h2>
          <p>Task ID: {task.id}</p>
        </div>
      ) : (
        <p>Task not found.</p>
      )}
    </div>
  );
};

export default TaskDetails;
