
import { BrowserRouter , Route , Routes} from "react-router-dom";
import Header from "./Routes/Components/Header";
import Home from "./Routes/Home";
import Versus from "./Routes/Versus";
// import {Home , Versus } from "./Routes";


function App() {
  return(
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/" element={<Versus />} /> 
    </Routes>
    </BrowserRouter>
      )
}

export default App