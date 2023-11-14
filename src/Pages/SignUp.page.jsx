import { Link, useNavigate, useLocation } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { set, useForm } from "react-hook-form";
import {
  useSignInWithGoogle,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import Loading from "../Components/Loading";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [userName, setUserName] = useState("");
  let from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, createUser, createLoading] =
    useCreateUserWithEmailAndPassword(auth);

  const onSubmit = ({ email, password, fullName }) => {
    setUserName(fullName);
    createUserWithEmailAndPassword(email, password);
  };
  if (loading || createLoading) {
    <Loading></Loading>;
  }

  useEffect(() => {
    if (user || createUser) {
      console.log(createUser?.user?.displayName, createUser?.user?.email);
      // Call the post API here to get the token
      const userInfo = {
        email: user?.user?.email || createUser?.user?.email,
        name: user?.user?.displayName || userName,
      };

      fetch("http://localhost:3000/login", {
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
  }, [user, createUser, navigate, from]);
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
      toastId: "error1",
    });
  }

  return (
    <div className='flex flex-col md:flex-row h-screen items-center'>
      <div
        className='bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center'
      >
        <div className='w-full h-100'>
          <Link to={"/"} className='text-3xl font-inter font-semibold'>
            Brand Name
          </Link>
          <h1 className='text-xl md:text-2xl font-bold leading-tight mt-2'>
            Log in to your account
          </h1>

          <form className='mt-2' onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className='block text-gray-700'>Full Name</label>
              <input
                type='text'
                placeholder='Enter Full Name'
                {...register("fullName", { required: true })}
                className='w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none'
              />
              {errors.fullName && (
                <span className='text-red-400 mt-1'>Full Name is required</span>
              )}
            </div>
            <div className='mt-2'>
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
            </div>

            <div className='mt-2'>
              <label className='block text-gray-700'>Password</label>
              <input
                type='password'
                placeholder='Enter Password'
                {...register("password", {
                  required: true,
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).+$/,
                })}
                className='w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none'
              />
              {errors.password && (
                <span className='text-red-400 mt-1'>
                  Invalid Password (8-16 characters, a-z, A-Z, 0-9, and special
                  character required)
                </span>
              )}
            </div>

            <div className='mt-2'>
              <label className='block text-gray-700'>Confirm Password</label>
              <input
                type='password'
                {...register("confirmPassword", {
                  required: true,
                  validate: (val) => {
                    if (watch("password") != val) {
                      return "Your passwords do no match";
                    }
                  },
                })}
                placeholder='Enter Confirm Password'
                className='w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none'
              />
              {errors?.confirmPassword && (
                <span className='text-red-400 mt-1'>
                  {errors?.confirmPassword?.message}
                </span>
              )}
            </div>

            <button
              type='submit'
              className='w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-4'
            >
              Sign Up
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
              <span className='ml-4'>Sing Up with Google</span>
            </div>
          </button>

          <p className='mt-8 text-center'>
            Already have an account please?{" "}
            <Link
              to={"/login"}
              className='text-blue-500 hover:text-blue-700 font-semibold'
            >
              Log in
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
export default SignUp;
