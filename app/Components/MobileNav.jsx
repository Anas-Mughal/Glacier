"use client";
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import LinksBtn1 from "./LinksBtn1";

function MobileNav({ flag, setIsChecked }) {
  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/#contact" },
  ];

  const handleLinkClick = () => {
    setIsChecked(false); // Close the mobile nav by setting isChecked to false
  };

  useEffect(() => {
    const toggleScrollLock = () => {
      document.body.classList.toggle("scroll-lock", flag);
    };

    toggleScrollLock(); // Initial setup

    // Cleanup function to remove the class when component unmounts or flag changes
    return () => {
      toggleScrollLock(); // Cleanup: remove the class
    };
  }, [flag]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center w-full transition-all duration-300 bg-[rgba(55,203,226,0.5)] backdrop-blur-2xl  ${
        flag ? "h-screen" : "h-0"
      }`}
    >
      <nav
        className={`items-center justify-center transition-opacity duration-300 ${
          flag ? "flex opacity-100" : "hidden opacity-0"
        } h-full`}
      >
        <ul className="flex items-center justify-center gap-[3%] h-full w-full flex-col">
          {links.map((link) => (
            <LinksBtn1
              key={link.name}
              linkName={link.name}
              linkPath={link.path}
              onClick={handleLinkClick}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
}

MobileNav.propTypes = {
  flag: PropTypes.bool.isRequired,
  setIsChecked: PropTypes.func.isRequired,
};

export default MobileNav;
