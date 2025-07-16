
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>This is the Home page.</p>
      <Link to="/">← Back to Home</Link>
    </div>
  );
}
