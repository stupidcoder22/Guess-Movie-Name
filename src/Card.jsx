import React from "react";
import { IoIosTime } from "react-icons/io";

const Card = () => {
  return (
    <div className="container mx-auto px-20 mt-20">
      <div style={{ backgroundColor: "rgb(15, 23, 42)" }}>
        <div
          className="relative flex flex-col flex-wrap items-center p-8 bg-opacity-75 border border-pink-500 "
          style={{ cursor: "auto" }}
        >
          <span className="absolute px-12 py-4 text-lg font-medium text-white bg-opacity-25 rounded-full bg-gradient-to-r from-pink-500 to-red-400 -top-8 ">
            Movie Guess
          </span>
          <div className="flex items-center space-x-3 justify-between w-[100%]">
            <p className="pb-5 pt-3 text-indigo-200 opacity-75 mr-3 text-2xl">
              Score : 0
            </p>
            <div className="flex items-center">
              <IoIosTime
                size={30}
                className="mt-0.5"
                style={{ color: "white" }}
              />
              <h3 className="text-4xl font-medium flex justify-end mr-4 ml-1 text-white">
                2
              </h3>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between w-[100%]">
            <h3 className=" text-4xl font-medium text-white my-7 ">Yoyodd</h3>
            <div className="flex p-2">
              <input
                type="text"
                className="p-1 rounded-md mr-7 outline-none ml-12"
                placeholder="Guess movie name"
              />
              <button className="py-2 text-white px-4 bg-opacity-25 rounded-full bg-gradient-to-r from-pink-500 to-red-400">
                Guess
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
