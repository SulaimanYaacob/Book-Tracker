import {
  SignInButton,
  SignOutButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import useGetMyBooks from "../hooks/useGetMyBooks";
import useAddBookToList from "../hooks/useAddBookToList";

//! Testing Other API
function Clerk() {
  const { user } = useUser();
  const { listBooks } = useGetMyBooks({ userId: user?.id });
  const { handleAddBookToList, error, loading } = useAddBookToList({
    bookId: "123",
    userId: user?.id,
  });

  console.log({ error, loading });

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

      <div>
        <h1 className="text-center">My Books</h1>
        <div className="row">
          {listBooks?.map((book) => (
            <div key={book.id} className="col-3">
              <div className="card">
                <img
                  src={book.volumeInfo.imageLinks?.thumbnail}
                  className="card-img-top"
                  alt={book.volumeInfo.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{book.volumeInfo.title}</h5>
                  <p className="card-text">{book.volumeInfo.authors}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button onClick={handleAddBookToList}>Add book to list</button>
    </div>
  );
}

export default Clerk;
