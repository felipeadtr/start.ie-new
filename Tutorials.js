
import React from "react";
import { Link } from "react-router-dom";

export default function Tutorials() {
  return (
    <div>
      <h2>Tutorials</h2>
      <p>This is the Tutorials page.</p>
      <Link to="/">← Back to Home</Link>
    </div>
  );
}
