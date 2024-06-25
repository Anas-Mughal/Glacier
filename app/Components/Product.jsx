import PropTypes from "prop-types";
import saleSvg from "../../public/assets/svg/sale.svg";
import cartSvg from "../../public/assets/svg/cart.svg";
import WhatsAppSvg from "../../public/assets/svg/whatsapp.svg";
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
      className="w-full gap-[1vw] max-[950px]:gap-[3vw] bg-[#ffffff1c] backdrop-blur-lg rounded-[0.75vw] max-[950px]:rounded-[3vw] max-[950px]:p-[3vw] p-[1vw] flex flex-col items-center justify-between relative"
      data-set={tag}
      id="product"
    >
      <div
        className={`absolute size-[3.125vw] max-[950px]:size-[8vw] right-[-5%] top-[-3.5%] ${saleBadgeVisibility}`}
      >
        <Image src={saleSvg} alt="Sale" className="size-full" priority />
      </div>
      <div className=" h-[15vw] max-[950px]:h-[60vw]  flex justify-center items-center">
        <Image
          className="flex items-center justify-center object-contain size-full"
          src={imgSrc}
          alt=""
          width={680}
          height={680}
          objectFit="fit"
        />
      </div>
      <p className="flex items-center justify-center w-full overflow-hidden text-center text-balance max-[950px]:text-[3.75vw]">
        {description}
      </p>
      <h5>{price} RS</h5>
      <Link
        href="#0"
        className="relative flex border-[0.0625vw] hover:border-transparent items-center justify-center overflow-hidden rounded-full group before:bg-[#25D366] before:w-full before:h-full before:absolute before:translate-y-[200%] hover:before:translate-y-0 transition-all ease-out duration-[0.3s] before:transition-all before:ease-out before:duration-[0.3s] px-[17.5%] py-[2.5%]"
      >
        <span className=" flex justify-center items-center gap-[1vw]  group-hover:opacity-0 overflow-hidden transition-all ease-out duration-[0.3s]">
          <span className="size-[2vw] max-[950px]:size-[3.5vw]">
            <Image src={cartSvg} alt="Cart" className="size-full" />
          </span>
          <h5 className="text-nowrap">Buy Now</h5>
        </span>
        <span className=" flex justify-center items-center gap-[1vw] absolute inset-0 group-hover:opacity-100 opacity-0 transition-all ease-out duration-[0.3s]">
          <span className="size-[2vw] max-[950px]:size-[3.5vw]">
            <Image src={WhatsAppSvg} alt="WhatsApp" className="size-full" />
          </span>
          <h5 className="text-nowrap">WhatsApp</h5>
        </span>
      </Link>
    </div>
  );
}

export default Product;
