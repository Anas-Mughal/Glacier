import PropTypes from "prop-types";
import RightArrow from "../../public/assets/svg/right-arrow.svg";
import Link from "next/link";
import Image from "next/image";

function ShopBtn({ linkPath }) {
  return (
    <Link
      href={linkPath}
      className="relative group flex items-center justify-center w-btn-width h-btn-height bg-white rounded-full gap-[0.5vw] overflow-hidden max-[950px]:w-[14.4vw] max-[950px]:h-[4.6872vw]"
    >
      <span className="bg-primary size-[1.75vw] max-[950px]:size-[3.5vw] rounded-full group-hover:scale-[9] absolute transition-all ease-linear duration-[0.3s] max-[950px]:left-[5%] left-[7%] top-[50%] translate-y-[-50%]"></span>
      <Image
        className="size-[1.25vw] max-[950px]:size-[1.95vw] absolute left-[10%] top-[50%] translate-y-[-50%] group-hover:translate-x-[700%] z-[1] transition-all ease-linear duration-[0.3s]"
        src={RightArrow}
        alt="Right Arrow"
        width={15}
        height={15}
      />
      <span className="absolute left-[22.5%] inset-0 flex items-center justify-center text-primary text-header-text font-semibold z-[1] group-hover:text-white transition-all ease-linear duration-[0.3s] group-hover:left-0 max-[950px]:text-[1.5vw] top-[50%] translate-y-[-50%]">
        SHOP NOW
      </span>
    </Link>
  );
}

ShopBtn.propTypes = {
  linkPath: PropTypes.string.isRequired,
};

export default ShopBtn;
