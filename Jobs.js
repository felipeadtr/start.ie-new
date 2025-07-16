
import React from "react";
import { Link } from "react-router-dom";

export default function Jobs() {
  return (
    <div>
      <h2>Jobs</h2>
      <p>This is the Jobs page.</p>
      <Link to="/">← Back to Home</Link>
    </div>
  );
}
