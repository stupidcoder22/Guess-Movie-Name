import { useEffect, useState } from "react";
import { IoIosTime } from "react-icons/io";
import Finish from "./Finish";
import Store from "./Global";
function App() {
  const [time, settime] = useState(20);
  const [score, setscore] = useState(0);
  const [index, setindex] = useState(0);
  const [moviename, setmoviename] = useState("");
  const [guess, setguess] = useState("");
  const [btnName, setbtnName] = useState("Guess");
  const [btncolor, setbtncolor] = useState("white");

  const movie = [
    "Krish",
    "Avenger",
    "Hulk",
    "Batman",
    "Superman",
    "Ironman",
    "Thor",
    "Spiderman",
    "Hawkeye",
    "Deadpool",
  ];

  var interset;

  useEffect(() => {
    if (index < movie.length) {
      const data = [...movie[index]];
      var newdata = [];
      for (let index = 0; index < data.length; index++) {
        newdata = data.sort(() => 0.5 - Math.random());
      }
      var newstring = "";
      for (const c in newdata) {
        newstring = newstring.concat(newdata[c]);
      }
      setmoviename(newstring);
    } else {
      settime(0);
      clearInterval(interset);
    }
  }, [index]);

  useEffect(() => {
    if (time < 1 && index < movie.length) {
      setindex((old) => old + 1);
      settime(20);
    }

    interset = setInterval(timeinterval, 1000);

    return () => clearInterval(interset);
  }, [time]);

  function timeinterval() {
    if (index > movie.length) {
      settime(0);
      clearInterval(interset);
    }

    if (index < movie.length) {
      settime(time - 1);
    }
  }

  function checkAnswer() {
    if (
      index < movie.length &&
      movie[index].toLowerCase() === guess.toLowerCase()
    ) {
      btnchangename(true);
      setscore(score + 1);
      setindex(index + 1);
      settime(20);
      setguess("");
    }

    if (index > movie.length) {
      settime(0);
      clearInterval(interset);
    }
    if (
      index < movie.length &&
      movie[index].toLowerCase() !== guess.toLowerCase()
    ) {
      btnchangename(false);
      setindex(index + 1);
      settime(20);
      setguess("");
    }
  }

  function inputChange(e) {
    setguess(e.target.value);
  }

  function btnchangename(flag) {
    if (flag === true) {
      setbtnName("Correct");
      console.log(btncolor);
      setbtncolor("green");
      console.log(btncolor);
      setTimeout(() => {
        setbtncolor("white");
        setbtnName("Guess");
      }, 500);
    }
    if (flag === false) {
      console.log(btncolor);
      setbtncolor("red");
      console.log(btncolor);
      setbtnName("Wrong");
      setTimeout(() => {
        setbtncolor("white");
        setbtnName("Guess");
      }, 500);
    }
  }

  return (
    <>
      {index < movie.length ? (
        <div className="container mx-auto px-20 mt-52 ">
          <div style={{ backgroundColor: "rgb(15, 23, 42)" }}>
            <div
              className="relative flex flex-col flex-wrap items-center p-8 bg-opacity-75 "
              style={{ cursor: "auto" }}
            >
              <span className="absolute px-12 py-4 text-lg font-medium text-white bg-opacity-25 rounded-full bg-gradient-to-r from-pink-500 to-red-400 -top-8 ">
                Movie Guess
              </span>
              <div className="flex items-center space-x-3 justify-between w-[100%] mt-5">
                <p className="pb-5 pt-3 text-indigo-200 font-bold mr-3 text-2xl">
                  Score : <span style={{ color: btncolor }}>{score}</span>
                </p>
                <div className="flex items-center">
                  <IoIosTime
                    size={30}
                    className="mt-0.5 mr-2"
                    style={{ color: "white" }}
                  />
                  <h3
                    className={`text-4xl font-medium text flex justify-end mr-4 ml-1 text-white`}
                  >
                    {time}
                  </h3>
                </div>
              </div>
              <div className="flex flex-col items-center justify-between w-[100%] mb-3">
                <h3 className=" text-4xl font-medium text-white my-7 ">
                  {moviename}
                </h3>
                <div className=" lg:flex p-2 pb-6">
                  <input
                    type="text"
                    className="py-1 px-3 rounded-md mr-7 outline-none ml-12"
                    placeholder="Guess movie name"
                    value={guess}
                    onChange={inputChange}
                  />
                  <button
                    className={`py-2 font-bold text-lg text px-5 bg-opacity-25 rounded-full bg-gradient-to-r from-pink-500 to-red-400`}
                    style={{ color: btncolor }}
                    onClick={checkAnswer}
                  >
                    {btnName}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Finish />
      )}
    </>
  );
}

export default App;
