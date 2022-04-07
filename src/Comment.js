import { useEffect, useState } from "react";
import { db } from "./firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import styled from "styled-components";
import { motion } from "framer-motion";

const CommentBox = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  background-color: #527ebf;
`;

const InputForm = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 20vw;
  height: 20vh;
  background-color: gold;
  margin: 0 auto;
`;

const CreateBtn = styled(motion.button)`
  margin: 0 auto;
  width: 200px;
  height: 40px;
  color: white;
  background-color: purple;
  border-radius: 20px;
`;

const Input = styled.input`
  margin: 0 auto;
  width: ${(props) => props.width || "200px"};
  height: ${(props) => props.height || "40px"};
  border-radius: 10px;
  border: none;
`;
const Ul = styled.ul``;
const Li = styled(motion.li)`
  padding: 10px 0;
  background-color: white;
  line-height: 30px;
  font-size: 20px;
  width: 200px;
  height: 200px;
  border-radius: 100px;
  text-align: center;
`;
function Comment() {
  const [newName, setNewName] = useState("");
  const [newContent, setNewContent] = useState("");
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(usersCollectionRef, {
      name: newName,
      Content: newContent,
      date: new Date().toISOString().substr(0, 10).replace("T", " "),
    });
  };

  const updateUser = async (id, Content, date) => {
    const userDoc = doc(db, "users", id);
    const newFields = { Content: Content + 1 };
    await updateDoc(userDoc, newFields);
  };
  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  return (
    <CommentBox>
      <Ul>
        {users.map((user) => {
          return (
            <Li>
              <h1>{user.name}</h1>
              <h1>{user.Content}</h1>
              <h1>{user.date}</h1>
              {/* <button
                onClick={() => {
                  updateUser(user.id, user.Content, user.date);
                }}
              >
                Increase Content
              </button>
              <button
                onClick={() => {
                  deleteUser(user.id);
                }}
              >
                Delete User
              </button> */}
            </Li>
          );
        })}
      </Ul>
      <InputForm>
        <Input
          maxLength={5}
          placeholder="Name..."
          onChange={(event) => setNewName(event.target.value)}
        />
        <Input
          maxLength={25}
          width={"60vw"}
          height={"50vh"}
          placeholder="Content..."
          onChange={(event) => setNewContent(event.target.value)}
        />
        <CreateBtn onClick={createUser}> Create User</CreateBtn>
      </InputForm>
    </CommentBox>
  );
}

export default Comment;
