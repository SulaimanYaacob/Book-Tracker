import { SignInButton, SignOutButton, UserButton } from "@clerk/clerk-react";
import useGetUsers from "../hooks/useGetUsers";

function Clerk() {
  const { setUsers, users } = useGetUsers();

  console.log({ users });

  return (
    <div className="my-5 container py-3 ">
      <div className=" text-center py-3">
        <UserButton />
      </div>
      <SignInButton>
        <button className="btn btn-primary btn-lg">Login</button>
      </SignInButton>
      <SignOutButton>
        <button className="btn btn-danger btn-lg">Log out</button>
      </SignOutButton>
    </div>
  );
}

export default Clerk;
