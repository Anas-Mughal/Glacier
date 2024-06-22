import React from "react";
import LinksBtn1 from "./LinksBtn1";

function MobileNav({ flag }) {
  
  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/#contact" },
  ];

  return (
    <>
      <div
        className={`fixed inset-0 flex items-center justify-center w-full transition-height duration-300 ${
          flag ? "h-full" : "h-0"
        } bg-[rgba(55,203,226,0.5)] backdrop-blur-xl`}
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
              />
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default MobileNav;
