import { useState } from "react";

const WelcomeBox = ({ handleStart }) => {
  const [value, setValue] = useState("");
  const handleClick = () => {
    handleStart(value);
  };
  return (
    <div className="w-full flex flex-col md:w-[60%] md:mx-auto lg:w-[40%]  px-4 py-5 bg-yellow-400 rounded-lg gap-3">
      <p className="w-full text-4xl font-bold text-center ">Hi...</p>
      <p className="w-full lg:flex lg:justify-center lg:px-[10%] text-xl font-medium ">
        Welcome to my app please enter your name and chalange yuor self :)
      </p>
      <div className="w-full lg:px-[10%] flex flex-col items-start gap-1 lg:gap-0 mt-8">
        <label className="text-lg font-medium " htmlFor="name">
          name
        </label>
        <input
          value={value}
          className="lg:w-2/3 bg-inherit border-b-2 px-2 py-1 rounded border-black focus:outline-none placeholder:text-black"
          id="name"
          type={"text"}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="w-full flex justify-center mt-3">
        <button
          onClick={() => handleClick()}
          className="text-lg font-medium  border-2 px-2 lg:px-8 lg:py-1 rounded border-black active:scale-95"
          disabled={value != "" ? false : true}
        >
          start
        </button>
      </div>
    </div>
  );
};

export default WelcomeBox;
