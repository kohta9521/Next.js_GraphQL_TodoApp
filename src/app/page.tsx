"use client";
import React, { useState } from "react";

// graphql
import { gql, useMutation, useQuery } from "@apollo/client";

const GET_TODOS = gql`
  query GetTodos {
    todos {
      id
      title
      completed
    }
  }
`;

const ADD_TODO = gql`
  mutation AddTodo($title: String!) {
    addTodo(title: $title) {
      id
      title
      completed
    }
  }
`;

// scss
import styles from "./page.module.css";

// components
import Title from "@/components/TItle";

export default function Home() {
  const { loading, error, data } = useQuery(GET_TODOS);
  const [title, setTitle] = useState("");
  const [addTodo] = useMutation(ADD_TODO, {
    refetchQueries: [{ query: GET_TODOS }],
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error.message}</p>;

  const handleAddTodo = () => {
    addTodo({
      variables: { title },
    });
    setTitle("");
  };

  return (
    <div className={styles.page}>
      <Title id="title" text="Todo App / Next.js + GraphQL" />
      <ul>
        {data.todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} {todo.completed ? "✔" : "❌"}
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
}
