
import Image from "next/image";
import lock from "../../../assets/svg/lock.svg";
import { useState } from "react";

function BottlesField() {
  const [bottles, setBottles] = useState(0);

  const handleIncrement = (event) => {
    event.preventDefault();
    setBottles((prevCount) => (prevCount < 99999 ? prevCount + 1 : prevCount));
  };

  const handleDecrement = (event) => {
    event.preventDefault();
    setBottles((prevCount) => (prevCount > 0 ? prevCount - 1 : prevCount));
  };

  return (
    <div className="flex flex-col items-start justify-center gap-[0.5vw] relative">
      <label
        className="flex items-center justify-center gap-[0.6vw]"
        htmlFor="bottles"
      >
        <Image className="w-[0.677vw] h-[0.781vw]" src={lock} alt="Lock Icon" />
        <span className="text-[0.883vw] text-white">No of Bottles for exchange:</span>
      </label>
      <div className="flex flex-col items-start justify-center gap-[0.5vw] relative w-full">
        <input
          className="w-full p-[0.5vw] bg-transparent border-[0.1vw] border-[#ffffff80] text-[#ffffff80] text-[0.65vw] rounded-[0.3vw] focus:ring-primary focus:border-primary focus:outline-none"
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
        <div className="absolute right-[2%] flex items-center justify-center  gap-[0.833vw]  h-full">
          <button
            className="text-[2vw] flex justify-center items-center text-white cursor-pointer h-full"
            onClick={handleDecrement}
            aria-label="Decrease value"
            tabIndex="0"
          >
            <span aria-hidden="true" className="flex items-center justify-center h-full">
              -
            </span>
          </button>
          <button
            className="text-[1.5vw] flex justify-center items-center text-white cursor-pointer h-full"
            onClick={handleIncrement}
            aria-label="Increase value"
            tabIndex="0"
          >
            <span aria-hidden="true" className="flex items-center justify-center h-full mt-[0.2vw]">
              +
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BottlesField;
