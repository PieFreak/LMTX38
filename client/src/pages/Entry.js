import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import BackButton from '../components/buttons/BackButton';

export default function Entry() {


  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const onEntryPageLoginOption = () => {
    setShowLoginForm(true);
  };

  const onEntryPageRegisterOption = () => {
    setShowRegisterForm(true);
  };

  const onFormBackOption = () => {
    setShowLoginForm(false);
    setShowRegisterForm(false);
  };

  return (
    <div className="h-screen flex justify-center flex-col items-center bg-[#6b8db9]">
      <div className="bg-blue-600 relative flex max-w-xs w-3/5 h-3/5 justify-center items-center border-2 border-yellow-50 rounded">
        {!showLoginForm && !showRegisterForm && (
          <div className="flex flex-col justify-center items-center">
            <button
              className="w-40 my-2 mx-auto px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-2xl md:text-2xl"
              onClick={onEntryPageLoginOption}
            >
              Login
            </button>
            <button
              className="w-40 my-2 mx-auto px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-2xl md:text-2xl"
              onClick={onEntryPageRegisterOption}
            >
              Register
            </button>
          </div>
        )}
        {showLoginForm && (
          <>
            <BackButton onClick={onFormBackOption} />
            <LoginForm />
          </>
        )}
        {showRegisterForm && (
          <>
            <BackButton onClick={onFormBackOption} />
            <RegisterForm />
          </>
        )}
      </div>
    </div>
  );
}
