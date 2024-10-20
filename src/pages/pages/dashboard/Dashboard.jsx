import React, { useContext } from "react";
import { AuthContext } from "../../statestore/Authcontext";

export default function Dashboard() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      {user ? (
        <>
          <h1>Welcome, {user.email}</h1>
          <p>Role: {user.role}</p>
          <button onClick={logout}>Logout</button>
          </>
      ) : (
        <h1>You are not logged in</h1>
      )}
    </div>
  );
}
