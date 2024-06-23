import Logo from "../../public/assets/svg/LOGO.svg"; // Ensure you have the correct path to the logo
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";

function LogoImg({ linkPath }) {
  return (
    <Link
      href={linkPath}
      className="h-full w-[7vw] max-[950px]:w-[20vw] z-[50]"
    >
      <Image src={Logo} alt="Logo" className="size-full" priority />
    </Link>
  );
}

LogoImg.propTypes = {
  linkPath: PropTypes.string.isRequired,
};

export default LogoImg;
