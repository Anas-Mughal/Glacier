import PropTypes from "prop-types";
import RightArrow from "../assets/svg/right-arrow.svg";
import Link from "next/link";
import Image from "next/image";

function ShopBtn({ linkPath }) {
  return (
    <Link
      href={linkPath}
      className="relative group flex items-center justify-center w-btn-width h-btn-height bg-white rounded-full gap-[0.5vw] overflow-hidden"
    >
      <span className="bg-primary w-[1.75vw] h-[1.75vw] rounded-full group-hover:scale-[9] absolute transition-all ease-linear duration-[0.3s] left-[7%]"></span>
      <Image
        className="h-[1.25vw] w-[1.25vw] absolute left-[10%] group-hover:translate-x-[700%] z-[1] transition-all ease-linear duration-[0.3s]"
        src={RightArrow}
        alt="Right Arrow"
      />
      <span className="absolute left-[22.5%] inset-0 flex items-center justify-center text-primary text-header-text font-semibold z-[1] group-hover:text-white transition-all ease-linear duration-[0.3s] group-hover:left-0">
        SHOP NOW
      </span>
    </Link>
  );
}

ShopBtn.propTypes = {
  linkPath: PropTypes.string.isRequired,
};

export default ShopBtn;
