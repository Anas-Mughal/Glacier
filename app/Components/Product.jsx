import PropTypes from "prop-types";
import saleSvg from "../../public/assets/svg/sale.svg";
import cartSvg from "../../public/assets/svg/cart.svg";
import WhatsAppSvg from "../../public/assets/svg/whatsapp.svg";
import Link from "next/link";
import Image from "next/image";

function Product({ imgSrc, description, price, flag, tag, pstyles }) {
  const img_Size = pstyles[0].imgSize;
  const p_Size = pstyles[0].pSize;
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
      <div className={`h-[15vw] flex justify-center items-center ${img_Size} `}>
        <Image
          className={`flex items-center justify-center object-contain size-full `}
          src={imgSrc}
          alt=""
          width={680}
          height={680}
        />
      </div>
      <p
        className={`flex items-center justify-center w-full overflow-hidden text-center text-balance ${p_Size}`}
      >
        {description}
      </p>
      <div className="flex flex-col items-center justify-center gap-[0.5vw] max-[950px]:gap-[2vw]">
        <h5>{price} RS</h5>
        <Link
          href="https://wa.me/03195999704"
          target="_blank"
          className="relative flex border-[0.0625vw] hover:border-transparent items-center justify-center overflow-hidden rounded-full group before:bg-[#25D366] before:w-full before:h-full before:absolute before:translate-y-[200%] hover:before:translate-y-0 transition-all ease-out duration-[0.3s] before:transition-all before:ease-out before:duration-[0.3s] px-[17.5%] py-[2.5%]"
        >
          <span className="flex justify-center items-center gap-[1vw] group-hover:opacity-0 overflow-hidden transition-all ease-out duration-[0.3s]">
            <span className="size-[2vw] max-[950px]:size-[3.5vw]">
              <Image src={cartSvg} alt="Cart" className="size-full" />
            </span>
            <h5 className="text-nowrap">Buy Now</h5>
          </span>
          <span className="flex justify-center items-center gap-[0.5vw] absolute inset-0 group-hover:opacity-100 opacity-0 transition-all ease-out duration-[0.3s]">
            <span className="size-[2vw] max-[950px]:size-[3.5vw]">
              <Image src={WhatsAppSvg} alt="WhatsApp" className="size-full" />
            </span>
            <h5 className="text-nowrap">WhatsApp</h5>
          </span>
        </Link>
      </div>
    </div>
  );
}

Product.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  flag: PropTypes.bool.isRequired,
  tag: PropTypes.string.isRequired,
  pstyles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Product;
