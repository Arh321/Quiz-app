"useclient";
import { useRef } from "react";
import clsx from "clsx";
const Header = ({ name, score }) => {
  const ref = useRef();
  return (
    <div
      ref={ref}
      className="w-full px-2 py-4 flex justify-between bg-yellow-400 absolute top-0 left-0 md:px-14 lg:justify-center lg:items-center lg:gap-[50%]"
    >
      <p
        ref={ref}
        className={clsx(
          "text-2xl font-medium lg:font-bold lg:text-xl lg:flex lg:justify-center lg:items-center"
        )}
      >
        {name && name.toUpperCase()}
      </p>
      <p className="text-2xl font-medium">score: {score}</p>
    </div>
  );
};

export default Header;
