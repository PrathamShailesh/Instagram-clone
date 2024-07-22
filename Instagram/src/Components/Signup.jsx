import React from 'react';

export default function SignUp() {
  function handleSubmit(e) {
    e.preventDefault();
    fetch('http://localhost:4000/signup').catch((err) => console.log(err));
  }

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md max-w-md w-full min-w-max">
        <div className="flex justify-center mb-6">
          <img
            src="https://kq-storage.s3.ap-south-1.amazonaws.com/logo.png"
            alt="Logo"
            className="w-20 sm:w-24"
          />
        </div>
        <p className="text-center mb-4 sm:mb-6 text-gray-700 text-sm sm:text-base">
          Sign up to see photos and videos from your friends.
        </p>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            className="mb-2 sm:mb-3 p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
          <input
            type="text"
            placeholder="Email"
            className="mb-2 sm:mb-3 p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
          <input
            type="text"
            placeholder="Username"
            className="mb-2 sm:mb-3 p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
          <input
            type="password"
            placeholder="Password"
            className="mb-2 sm:mb-3 p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
          <p className="text-xs text-gray-500 mb-4 sm:mb-6 text-center">
            By signing up, you agree to our terms and conditions.
          </p>
          <button className="bg-blue-500 text-white py-2 rounded-md mb-2 sm:mb-3 hover:bg-blue-600 transition duration-300">
            Sign Up
          </button>
          <div className="flex items-center mb-4 sm:mb-6">
            <hr className="flex-grow border-gray-300" />
            <p className="mx-2 text-gray-500">or</p>
            <hr className="flex-grow border-gray-300" />
          </div>
          <button className="bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition duration-300">
            Continue with Google
          </button>
        </form>
        <p className="text-center text-gray-700 mt-4 sm:mt-6">
          Have an account? <a href="#" className="text-blue-500">Log in</a>
        </p>
      </div>
    </div>
  );
}
