import React from 'react';
import { NavLink } from 'react-router-dom'

export default function Error() {
  return (
    <div style={{ color: "red", marginTop: "40vh" }}>
      {" "}
      <center>
        <h1>Eroor 404 page not found</h1>
        <NavLink to="/">Back to home page</NavLink>
      </center>
    </div>
  );
}
