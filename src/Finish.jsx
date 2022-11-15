import React from "react";

const Finish = ({ renderpage }) => {
  return (
    <div className="flex justify-center items-center  h-screen">
      <div
        style={{ backgroundColor: "rgb(15, 23, 42)" }}
        className="p-20 space-y-5"
      >
        <h1 className="text-white text-4xl font-bold">
          You have completed the Game
        </h1>
        <p
          className="text-white text-2xl flex justify-center"
          onClick={() => renderpage()}
        >
          Do You Want To Play Again?
        </p>
        <div className="flex justify-center">
          <button className="mt-1 text-white py-2 font-bold text-lg text px-5 bg-opacity-25 rounded-full bg-gradient-to-r from-pink-500 to-red-400">
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default Finish;
