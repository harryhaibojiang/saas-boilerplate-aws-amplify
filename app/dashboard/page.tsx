// app/page.tsx
"use client";

import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import TodoList from "@/components/TodoList";
import type { WithAuthenticatorProps } from "@aws-amplify/ui-react";

function App({ signOut, user }: WithAuthenticatorProps) {
  return (
    <div>
      <h1>Welcome, {user?.username}</h1>
      <button onClick={signOut}>Sign out</button>
      <TodoList />
    </div>
  );
}

export default withAuthenticator(App);
