import Home from "./Pages/Home.page";
import { Routes, Route } from "react-router-dom";
import LogIn from "./Pages/LogIn.page";
import SignUp from "./Pages/SignUp.page";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ForgotPassword from "./Pages/ForgotPassword.page";
import EmailVerification from "./Pages/EmailVerification.page";
import RequireAuth from "./Hooks/RequireAuth";
import Dashboard from "./Pages/Dashboard.page";
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<LogIn />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/forgot-password' element={<ForgotPassword />}></Route>
        <Route path='/verify-email' element={<EmailVerification />}></Route>
        <Route
          path='/dashboard'
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        ></Route>
      </Routes>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </>
  );
}

export default App;
