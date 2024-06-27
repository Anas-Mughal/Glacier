"use client";
import { useEffect } from "react";
import LinksBtn1 from "./LinksBtn1";
import LogoImg from "./LogoImg";
import ShopBtn from "./ShopBtn";
import Hamburger from "./Hamburger";

function Header() {
  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/#contact" },
  ];

  useEffect(() => {
    const headerElement = document.querySelector("#header-container");

    const handleScroll = () => {
      headerElement.classList.toggle("Stickyheader", window.scrollY >= 245);
      headerElement.classList.toggle("backdrop-blur-xl", window.scrollY >= 245);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="header-container"
      className="absolute z-50 flex items-center justify-center w-full transition-all "
    >
      <header className="flex items-center justify-evenly max-[950px]:justify-between max-[950px]:px-[2.5vw] max-[950px]:gap-0 gap-[12.5vw]   w-full my-[1.5vw] ">
        <Hamburger></Hamburger>
        <LogoImg linkPath={links[0].path} />
        <nav className="flex items-center justify-center  max-[950px]:hidden ml-[7.5vw]">
          <ul className="flex items-center justify-between gap-[3vw] w-full ">
            {links.map((link) => (
              <LinksBtn1
                key={link.name}
                linkName={link.name}
                linkPath={link.path}
              />
            ))}
          </ul>
        </nav>
        <ShopBtn linkPath="/shop" />
      </header>
    </div>
  );
}

export default Header;
