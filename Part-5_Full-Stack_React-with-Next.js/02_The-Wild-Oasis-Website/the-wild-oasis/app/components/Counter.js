"use client";

import { useState } from "react";

export default function Counter({ users }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>There are {users.length} users in the database</p>
      <button onClick={() => setCount((c) => c + 1)}>
        Click me to increment the count {count}
      </button>
    </div>
  );
}
