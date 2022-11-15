import React, { useState } from "react";
import App from "./App";

const Welcome = () => {
  const [flag, setflag] = useState(true);

  // function renderpage() {
  //   setflag(false);
  // }
  return (
    <>
      {flag ? (
        <div className="flex justify-center items-center  h-screen">
          <div
            style={{ backgroundColor: "rgb(15, 23, 42)" }}
            className="p-20 space-y-5"
          >
            <h1 className="text-white text-4xl font-bold">
              Welcome to Movie Guessing Game
            </h1>
            <p className="text-white text-2xl flex justify-center">
              Do You want to Play Movie Guessing Game
            </p>
            <div className="flex justify-center">
              <button
                className="mt-9 text-white py-2 font-bold text-lg text px-5 bg-opacity-25 rounded-full bg-gradient-to-r from-pink-500 to-red-400"
                onClick={() => setflag(false)}
              >
                Play Game
              </button>
            </div>
          </div>
        </div>
      ) : (
        <App />
      )}
    </>
  );
};

export default Welcome;
