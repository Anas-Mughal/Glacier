"use client";
import Link from "next/link";
function Section1() {
  return (
    <div className={`flex flex-col justify-center max-[950px]:items-center`}>
      <h1 className="leading-[90%]">PURE WATER </h1>
      <h1 className="leading-[90%] text-primary text-nowrap">
        DELIVERY SERVICE
      </h1>
      <p className="w-[85%] max-[950px]:w-[97.5%] mt-[2.5%]  first-letter:text-primary first-letter:font-bold  max-[950px]:text-center ">
        | We now deliver different types of bottled water. To drink the best
        water please come to us and give us an order and take safe and sound
        water for you.
      </p>
      <div
        className="flex items-center max-[950px]:
max-[950px]:justify-center gap-[1vw] mt-[1vw]"
      >
        <Link
          href="/shop"
          className="relative flex items-center justify-center text-white rounded-full group py-[0.75%] px-[3.5%] max-[950px]:py-[5%] max-[950px]:px-[25%]  hover:border-primary border-transparent border-[0.0625vw] group-hover:border-[0.0625vw]"
        >
          <p className="absolute inset-0 rounded-full -z-[1] bg-gradient-to-br from-secondary to-primary group-hover:opacity-0 transition-all ease-linear duration-[0.3s] py-[0.75%] px-[3.5%] max-[950px]:py-[5%] max-[950px]:px-[25%]"></p>
          <h6 className="transition-all ease-linear duration-[0.3s] group-hover:text-primary  text-nowrap">
            Shop Now
          </h6>
        </Link>
        <Link
          href="/about"
          className="group   flex items-center  border-primary justify-center rounded-full bg-none border-[0.0625vw] hover:border-transparent hover:bg-primary transition-all ease-linear duration-[0.3s] py-[0.75%] px-[3.5%] max-[950px]:py-[5%] max-[950px]:px-[25%]"
        >
          <h6 className="transition-all ease-linear duration-[0.3s] group-hover:text-white text-primary  text-nowrap">
            Read More
          </h6>
        </Link>
      </div>
    </div>
  );
}

export default Section1;
