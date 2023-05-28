import Home from "./Pages/Home.page";
import { Routes, Route } from "react-router-dom";
import LogIn from "./Pages/LogIn.page";
import SignUp from "./Pages/SignUp.page";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<LogIn />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
      </Routes>
    </>
  );
}

export default App;
