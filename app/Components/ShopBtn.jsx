import PropTypes from "prop-types";
import RightArrow from "../../public/assets/svg/right-arrow.svg";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";

function ShopBtn({ linkPath }) {
  const [matches, setMatches] = useState(false);

  // Use useEffect to check media query on component mount
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 950px)"); // Define your media query here
    // Check initial matches
    setMatches(mediaQuery.matches);

    // Add listener for media query changes
    const handleChange = (e) => {
      setMatches(e.matches);
    };

    // Use addEventListener instead of addListener
    mediaQuery.addEventListener("change", handleChange);

    // Clean up listener
    return () => {
      // RemoveEventListener instead of removeListener
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);
  if (matches) {
  }
  return (
    <Link
      href={linkPath}
      className="relative group flex items-center justify-center w-[12.5vw] h-[3.25vw] bg-white rounded-full gap-[0.5vw] overflow-hidden max-[950px]:w-[23.5vw] max-[950px]:h-[6vw]"
    >
      <div>
        <span className="bg-primary size-[1.75vw] max-[950px]:size-[3.5vw] rounded-full group-hover:scale-[13] absolute transition-all ease-linear duration-[0.3s] max-[950px]:left-[5%] left-[7%] top-[50%] translate-y-[-50%]"></span>
        <Image
          className="size-[1.25vw] max-[950px]:size-[1.95vw] absolute left-[8.95%] max-[950px]:left-[8.25%] top-[50%] translate-y-[-50%] group-hover:translate-x-[1000%] z-[1] transition-all ease-linear duration-[.3s]"
          src={RightArrow}
          alt="Right Arrow"
          width={15}
          height={15}
        />
        <h5 className="absolute group-hover:left-[50%] flex items-center justify-center text-primary text-nowrap font-semibold z-[1] group-hover:text-white transition-all ease-linear duration-[0.3s]  max-[950px]:top-[55%] translate-y-[-50%] translate-x-[-50%] size-full left-[60%]">
          SHOP NOW
        </h5>
      </div>
    </Link>
  );
}

ShopBtn.propTypes = {
  linkPath: PropTypes.string.isRequired,
};

export default ShopBtn;
