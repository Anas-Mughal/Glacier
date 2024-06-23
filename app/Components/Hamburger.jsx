"use client";
import { useState, useEffect } from "react";
import MobileNav from "./MobileNav";

function Hamburger() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    const headerElement = document.querySelector("#header-container");
    if (headerElement) {
      if (isChecked) {
        headerElement.classList.remove("backdrop-blur-xl");
      } else {
        headerElement.classList.add("backdrop-blur-xl");
      }
    }
  }, [isChecked]);

  return (
    <>
      <label className="hamburger" htmlFor="HamLabel">
        <input
          type="checkbox"
          id="HamLabel"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <svg viewBox="0 0 32 32">
          <path
            className="line line-top-bottom"
            d="M27 10L13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
          ></path>
          <path className="line" d="M7 16L27 16"></path>
        </svg>
      </label>
      <MobileNav flag={isChecked} setIsChecked={setIsChecked} />
    </>
  );
}

export default Hamburger;
