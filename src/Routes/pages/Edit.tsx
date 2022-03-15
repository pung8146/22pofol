import { useNavigate , useSearchParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const [seacrchParmas, setSearchParams] = useSearchParams();

  const id = seacrchParmas.get('id');
  console.log("id : ", id)

  const mode = seacrchParmas.get("mode");
  console.log("mode : ", mode)

  return <div>
    <h1>Edit</h1>
    <p>이곳은 일기 수정페이지 입니다.</p>
    <button onClick={() =>setSearchParams({who:"PSH"})}>QS 바꾸기</button>
    <button onClick={() =>{navigate('/home')}}>HOME으로 이동</button>
    <button onClick={() =>{navigate(-1)}}>뒤로가기 이동</button>
  </div>
}

export default Edit;