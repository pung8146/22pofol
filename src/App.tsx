import { BrowserRouter , Route , Routes} from "react-router-dom";
import Header from "./Routes/Components/Header";
import Home from "./Routes/Home";
import Versus from "./Routes/Versus";
import {motion} from 'framer-motion';
// import Loading from "./Loading";
// import {Home , Versus } from "./Routes";


function App() {
  return(
    <BrowserRouter>
    {/* <Header /> */}
    {/* <Loading /> */}
    <Routes>
      {/* <Route path="/" element={<Versus />} />  */}
      <Route path="/" element={<Home />} /> 
    </Routes>
    </BrowserRouter>
      )
}

export default App;