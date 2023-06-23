import axios from "axios";
import { useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

function useGetUsers() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost/myrestfulws3/api/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return { setUsers, users };
}

export default useGetUsers;
