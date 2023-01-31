import React from "react";

const RegisterForm = ({email, password, passwordConfirm, onChange}) => (
  <div className="flex flex-col justify-center items-center">
    <label className="text-white text-lg max-md:text-xs" htmlFor="email">Email:</label>
    <input className="bg-gray-200 p-2 rounded mt-2" type="email" id="email" value={email} onChange={onChange} />
    <label className="text-white text-lg max-md:text-xs mt-6" htmlFor="password">Password:</label>
    <input className="bg-gray-200 p-2 rounded mt-2" type="password" id="password" value={password} onChange={onChange} />
    <label className="text-white text-lg max-md:text-xs mt-6" htmlFor="passwordConfirm">Confirm Password:</label>
    <input className="bg-gray-200 p-2 rounded mt-2" type="password" id="passwordConfirm" value={passwordConfirm} onChange={onChange} />
  </div>
);

export default RegisterForm;
