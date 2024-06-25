import Image from "next/image";
import lock from "../../../../public/assets/svg/lock.svg";
import { useState, useRef } from "react";

function BottlesField() {
  const [bottles, setBottles] = useState(0);
  const inputRef = useRef(null);

  const handleIncrement = (event) => {
    event.preventDefault();
    setBottles((prevCount) => (prevCount < 99999 ? prevCount + 1 : prevCount));
  };

  const handleDecrement = (event) => {
    event.preventDefault();
    setBottles((prevCount) => (prevCount > 0 ? prevCount - 1 : prevCount));
  };

  return (
    <div className="flex flex-col items-start justify-center gap-[0.5vw]">
      <label
        className="flex items-center justify-center gap-[0.6vw]"
        htmlFor="bottles"
      >
        <Image
          className="object-contain size-full"
          src={lock}
          alt="Lock Icon"
        />
        <p className="text-white text-nowrap">No of Bottles for exchange:</p>
      </label>
      <div
        ref={inputRef}
        className="flex items-center justify-center relative w-full border-[0.1vw] border-[#ffffff80] focus-within:border-primary rounded-[0.3vw] overflow-hidden"
      >
        <button
          className="flex items-center justify-center text-white cursor-pointer p-[0.5vw] h-full hover:bg-primary transition-all ease-linear"
          onClick={handleDecrement}
          aria-label="Decrease value"
          tabIndex="0"
        >
          <div className="w-[2vw] h-0 border-b-[0.35vw] rounded border-white"></div>
        </button>
        <input
          className="w-full p-[0.5vw] bg-transparent border-l-[0.1vw] border-r-[0.1vw] border-[#ffffff80] text-[#ffffff80] focus:ring-primary focus:border-primary focus:outline-none text-center"
          type="number"
          id="bottles"
          name="bottles"
          value={bottles}
          onChange={(e) =>
            setBottles(
              Math.min(Math.max(0, parseInt(e.target.value) || 0), 99999)
            )
          }
          placeholder="0"
          required
        />
        <button
          className="relative flex items-center justify-center cursor-pointer p-[0.5vw] h-full  hover:bg-primary transition-all ease-linear"
          onClick={handleIncrement}
          aria-label="Increase value"
          tabIndex="0"
        >
          <div className="w-[2vw] h-0 border-b-[0.35vw] rounded border-white"></div>
          <div className="h-[2vw] w-0 border-l-[0.35vw] rounded border-white absolute"></div>
        </button>
      </div>
    </div>
  );
}

export default BottlesField;
