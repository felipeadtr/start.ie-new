
import React from "react";
import { Link } from "react-router-dom";

export default function Housing() {
  return (
    <div>
      <h2>Housing</h2>
      <p>This is the Housing page.</p>
      <Link to="/">← Back to Home</Link>
    </div>
  );
}
