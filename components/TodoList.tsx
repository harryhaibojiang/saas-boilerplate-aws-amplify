// components/TodoList.tsx
"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

// generate your data client using the Schema from your backend
const client = generateClient<Schema>();
import { getCurrentUser } from 'aws-amplify/auth';

async function currentAuthenticatedUser() {
  try {
    const { username, userId, signInDetails } = await getCurrentUser();
    console.log(`The username: ${username}`);
    console.log(`The userId: ${userId}`);
    console.log(`The signInDetails: ${JSON.stringify(signInDetails)}`);
  } catch (err) {
    console.log(err);
  }
}

export default function TodoList() {
  const [todos, setTodos] = useState<Schema["Todo"][]>([]);

  async function listTodos() {
    const user = await currentAuthenticatedUser();
    // fetch all todos
    const { data } = await client.models.Todo.list();
    setTodos(data);
  }

  useEffect(() => {
    listTodos();
  }, []);

  useEffect(() => {
    const sub = client.models.Todo.observeQuery().subscribe(({ items }) =>
     setTodos([...items])
    );
  
    return () => sub.unsubscribe();
  }, []);

  return (
    <div>
      <h1>Todos</h1>
      <button onClick={async () => {
        // create a new Todo with the following attributes
        const { errors, data: newTodo } = await client.models.Todo.create({
          // prompt the user to enter the title
          content: window.prompt("title"),
          done: false,
          priority: 'medium'
        })
        console.log(errors, newTodo);
      }}>Create </button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>
    </div>
  );
}