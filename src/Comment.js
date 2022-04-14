import { useEffect, useState } from "react";
import { db } from "./firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  orderBy,
  query,
} from "firebase/firestore";
import styled from "styled-components";
import { motion } from "framer-motion";
import backgroundImg from "./img/spaceStar.jpg";
import p1 from "./img/pngSet/p1.png";
import p2 from "./img/pngSet/p2.png";
// import p3 from "./img/pngSet/p3.png";
// import p4 from "./img/pngSet/p4.png";
// import p5 from "./img/pngSet/p5.png";

//  코멘트 부분

const CommentBox = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  /* background-image: url(${backgroundImg}); */
  background-color: black;
`;

const Ul = styled.ul`
  max-height: 450px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  overflow: hidden;
`;

const Li = styled(motion.li)`
  white-space: normal;
  word-wrap: break-word;
  margin: 20px auto;
  padding: 10px 0;
  color: white;
  line-height: 30px;
  font-size: 20px;
  width: 200px;
  height: 200px;
  border-radius: 100px;
  text-align: center;
  /* background-color: white; */
  background-size: cover;
`;

//  코멘트 입력 부분

const InputForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 400px;
  margin: 0 auto;
  border-radius: 200px;
  background-color: black;
  justify-content: center;
`;
const Input = styled.input`
  color: white;
  margin: 20px auto;
  text-align: center;
  width: ${(props) => props.width || "200px"};
  height: ${(props) => props.height || "40px"};
  background-color: rgb(255, 255, 255, 0.1);
  border-radius: 20px;
  border: 2px solid white;
`;

const CreateBtn = styled(motion.button)`
  margin: 0 auto;
  width: 200px;
  height: 40px;
  color: white;
  background-color: silver;
  border-radius: 20px;
`;

function Comment() {
  // 랜덤 이미지 행성 li마다 각각 해주고싶음 아직안됨
  const backgroundImage = [p1, p2];
  const [image, setImage] = useState({});

  const changeBackground = () => {
    const imageNumber = Math.floor(Math.random() * backgroundImage.length);
    const randomImage = backgroundImage[imageNumber];
    setImage({
      backgroundImage: `url(${randomImage})`,
    });
  };

  useEffect(() => {
    changeBackground();
  }, []);

  // comment 생성 부분
  const [newName, setNewName] = useState("");
  const [newContent, setNewContent] = useState("");
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(usersCollectionRef, {
      name: newName,
      Content: newContent,
      date: new Date().toISOString().substr(0, 20).replace("T", " "),
    });

    alert("작성해 주셔서 감사합니다!!");
    window.location.reload();
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
      const data = await getDocs(
        query(usersCollectionRef, orderBy("date", "desc"))
      );

      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  return (
    <CommentBox id="move3">
      <Ul>
        {users.map((user) => {
          return (
            <Li drag style={image}>
              <h1>{user.name}</h1>
              <h1>{user.Content}</h1>
              <h1 style={{ fontSize: "15px" }}>{user.date}</h1>
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
          minLength={1}
          placeholder="Name..."
          onChange={(event) => setNewName(event.target.value)}
        />
        <Input
          minLength={5}
          maxLength={25}
          height={"160px"}
          placeholder="Content..."
          onChange={(event) => setNewContent(event.target.value)}
        />
        <CreateBtn onClick={createUser}>Create Planet</CreateBtn>
      </InputForm>
    </CommentBox>
  );
}

export default Comment;
