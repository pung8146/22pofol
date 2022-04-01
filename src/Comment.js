import { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

function Comment() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");
  const 
  
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  return (
    <div>
      <input placeholder="Name..." />
      <input type="number" placeholder="Age..." />
      <button> Create User</button>
      {users.map((user) => {
        return (
          <div>
            {" "}
            <h1>Name:{user.name}</h1>
            <h1>age:{user.age}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default Comment;
