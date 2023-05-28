
import Home from "./Pages/Home.page";
import { Routes, Route } from "react-router-dom";
import LogIn from "./Pages/LogIn.page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<LogIn/>}></Route>
      </Routes>
     
    </>
  );
}

export default App;
