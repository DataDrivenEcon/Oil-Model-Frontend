import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import {
  useSignInWithGoogle,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import Loading from "../Components/Loading";
import { toast } from "react-toastify";

const LogIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [errorMessage, setErrorMessage] = useState("");
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, loginUser, loginLoading, loginError] =
    useSignInWithEmailAndPassword(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ email, password }) => {
    signInWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    if (loginError) {
      if (loginError?.message === "Firebase: Error (auth/user-not-found).") {
        setErrorMessage("user not found");
      } else if (
        loginError?.message === "Firebase: Error (auth/wrong-password)."
      ) {
        setErrorMessage("wrong password");
      }
    }
  }, [loginError]);

  useEffect(() => {
    if (user || loginUser) {
      // Call the post API here to get the token
      const userInfo = {
        email: user?.user?.email || loginUser?.user?.email,
        name: user?.user?.displayName,
      };
      fetch("https://gary-eisen-project-backend.vercel.app/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userInfo }), // Include any required data
      })
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem("token", data.token);
          navigate(from, { replace: true });
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [user, loginUser, navigate, from]);

  if (loading || loginLoading) {
    return <Loading />;
  }

  if (error) {
    toast.error(`${error.message}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      toastId: "error2",
    });
  }

  return (
    <div className='flex flex-col md:flex-row h-screen items-center'>
      <div className='bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center'>
        <div className='w-full h-100'>
          <Link to={"/"} className='text-3xl font-inter font-semibold'>
            ROAD MOBILITY
          </Link>
          <h1 className='text-xl md:text-2xl font-bold leading-tight mt-12'>
            Log in to your account
          </h1>

          <form className='mt-6' onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className='block text-gray-700'>Email Address</label>
              <input
                type='email'
                {...register("email", { required: true })}
                placeholder='Enter Email Address'
                className='w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none'
              />
              {errors.email && (
                <span className='text-red-400 mt-1'>Email is required</span>
              )}
              {errorMessage === "user not found" && (
                <span className='text-red-500'>{errorMessage}</span>
              )}
            </div>

            <div className='mt-4'>
              <label className='block text-gray-700'>Password</label>
              <input
                type='password'
                {...register("password", {
                  required: true,
                })}
                placeholder='Enter Password'
                className='w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none'
              />
              {errors.password && (
                <span className='text-red-400 mt-1'>Password is required</span>
              )}
              {errorMessage === "wrong password" && (
                <span className='text-red-500'>{errorMessage}</span>
              )}
            </div>

            <div className='text-right mt-2'>
              <Link
                to='/forgot-password'
                className='text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700'
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type='submit'
              className='w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6'
            >
              Log In
            </button>
          </form>

          <hr className='my-6 border-gray-300 w-full' />

          <button
            onClick={() => signInWithGoogle()}
            type='button'
            className='w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300'
          >
            <div className='flex items-center justify-center'>
              <FcGoogle className='w-6 h-6' />
              <span className='ml-4'>Log in with Google</span>
            </div>
          </button>

          <p className='mt-8 text-center'>
            Need an account?{" "}
            <Link
              to={"/signup"}
              className='text-blue-500 hover:text-blue-700 font-semibold'
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
      <div className='bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen'>
        <img
          src='https://source.unsplash.com/random'
          alt=''
          className='w-full h-full object-cover'
        />
      </div>
    </div>
  );
};

export default LogIn;
