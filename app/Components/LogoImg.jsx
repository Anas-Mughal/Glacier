import Logo from "../assets/svg/LOGO.svg"; // Ensure you have the correct path to the logo
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";

function LogoImg({ linkPath }) {
  return (
    <Link href={linkPath} className="h-full">
      <Image src={Logo} alt="Logo" className="h-full w-[6.155vw]"></Image>
    </Link>
  );
}

LogoImg.propTypes = {
  linkPath: PropTypes.string.isRequired,
};

export default LogoImg;
