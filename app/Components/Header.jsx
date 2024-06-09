'use client'
import { useEffect } from "react";
import LinksBtn1 from "./LinksBtn1";
import LogoImg from "./LogoImg";
import ShopBtn from "./ShopBtn";

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
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="header-container"
      className="z-50 w-full h-header absolute inset-0 py-[0.25vw]"
    >
      <header className="flex items-center justify-between h-full m-auto w-desktop">
        <LogoImg linkPath={links[0].path} />
        <nav className="flex items-center justify-center h-full">
          <ul className="flex items-center justify-between gap-[3vw] w-full h-full">
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
