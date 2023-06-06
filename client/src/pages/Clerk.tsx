import React from "react";
import { useUser, SignInButton, SignOutButton } from "@clerk/clerk-react";

function Clerk() {
  const { user } = useUser();

  return (
    <>
      <h1>Welcome {user?.fullName ? user.fullName : "Guest"}</h1>
      <SignInButton>
        <button className="btn btn-primary btn-lg">Login</button>
      </SignInButton>

      <SignOutButton>
        <button className="btn btn-danger btn-lg">Log out</button>
      </SignOutButton>
    </>
  );
}

export default Clerk;
