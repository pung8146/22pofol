import { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

function Comment() {
  const [newName, setNewName] = useState("")
  const [newAge, setNewAge] = useState(0)
  
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collectio n(db, "users");

  const createUser = async () => {
    await addDoc(usersCollectionRef, {name: newName, age:newAge }); 
  }
  
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  return (
    <div>
      <input placeholder="Name..." onChange={(event) => setNewName(event.target.value)}/>
      <input type="number" placeholder="Age..." onChange={(event) => setNewAge(event.target.value)}/>
      <button onClick={createUser}> Create User</button>
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
