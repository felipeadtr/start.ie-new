
import React from "react";
import { Link } from "react-router-dom";

export default function Schools() {
  return (
    <div>
      <h2>Schools</h2>
      <p>This is the Schools page.</p>
      <Link to="/">← Back to Home</Link>
    </div>
  );
}
