import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import Loading from "../Components/Loading";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

const EmailVerification = () => {
  const navigate = useNavigate();

  const [user] = useAuthState(auth);
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  sending && <Loading />;
  useEffect(() => {
    if (error) {
      alert(error.message);
    }
  }, [error]);

  return (
    <div className='relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-6 sm:py-12 bg-white'>
      <div className='max-w-xl px-5 text-center'>
        <h2 className='mb-2 text-[42px] font-bold text-zinc-800'>
          verify your email
        </h2>
        <p className='mb-2 text-lg text-zinc-500'>
          We are glad, that you’re with us ? We’ve sent you a verification link
          to the email address{" "}
          <span className='font-medium text-indigo-500'>{user.email}</span>.
        </p>
        <a
          onClick={async () => {
            const success = await sendEmailVerification(user.email);
            success && navigate("/");
          }}
          className='mt-3 cursor-pointer inline-block w-96 rounded bg-indigo-600 px-5 py-3 font-medium text-white shadow-md shadow-indigo-500/20 hover:bg-indigo-700'
        >
          Send Email →
        </a>
      </div>
    </div>
  );
};

export default EmailVerification;
