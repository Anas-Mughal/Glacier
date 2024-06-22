import PropTypes from "prop-types";
import saleSvg from "../assets/svg/sale.svg";
import cartSvg from "../assets/svg/cart.svg";
import WhatsAppSvg from "../assets/svg/whatsapp.svg";
import Link from "next/link";
import Image from "next/image";
Product.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  flag: PropTypes.bool.isRequired,
  tag: PropTypes.string.isRequired,
};
function Product({ imgSrc, description, price, flag, tag }) {
  const saleBadgeVisibility = flag ? "hidden" : "";
  return (
    <div
      className="w-[18.228vw] h-[26.628vw] max-[950px]:w-[50%] bg-[#ffffff1c] backdrop-blur-lg rounded-[0.75vw] p-[0.5vw] flex flex-col items-center justify-between relative"
      data-set={tag}
      id="product"
    >
      <div
        className={`absolute size-[3.125vw] right-[-3.5%] top-[-3.5%] ${saleBadgeVisibility}`}
      >
        <Image src={saleSvg} alt="Sale" className="size-full" />
      </div>
      <div className="w-full h-[15vw] flex justify-center items-center">
        <Image
          className="flex items-center justify-center object-contain size-full"
          src={imgSrc}
          alt=""
          width={680}
          height={680}
          // objectFit="fit"
        />
      </div>
      <p className="h-[4vw] flex justify-center items-center text-pretty word\ text-center ">
        {description}
      </p>
      <h3>{price} RS</h3>
      <Link
        href="#0"
        className="relative flex items-center justify-center overflow-hidden rounded-full group before:bg-[#25D366] before:w-full before:h-full before:absolute before:translate-y-[200%] hover:before:translate-y-0 transition-all ease-out duration-[0.3s] before:transition-all before:ease-out before:duration-[0.3s]"
      >
        <span className="border-[0.0625vw] w-[9.375vw] h-[2.604vw] flex justify-center items-center gap-[0.75vw] rounded-full group-hover:opacity-0 overflow-hidden transition-all ease-out duration-[0.3s]">
          <span className="size-[1.042vw]">
            <Image src={cartSvg} alt="Cart" className="size-full" />
          </span>
          <p className="text-[0.833vw]">Buy Now</p>
        </span>
        <span className="w-[9.375vw] h-[2.604vw] flex justify-center items-center gap-[0.75vw] absolute inset-0 group-hover:opacity-100 opacity-0 transition-all ease-out duration-[0.3s]">
          <span className="size-[1.042vw]">
            <Image src={WhatsAppSvg} alt="WhatsApp" className="size-full" />
          </span>
          <p className="text-[0.833vw]">WhatsApp</p>
        </span>
      </Link>
    </div>
  );
}

export default Product;
