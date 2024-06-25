"use client";
import imgUrl1 from "../../../public/assets/svg/free-delivery.svg";
import imgUrl2 from "../../../public/assets/svg/calender.svg";
import imgUrl3 from "../../../public/assets/svg/clock.svg";
import Link from "next/link";
import Image from "next/image";

function Section4() {
  return (
    <div className="flex flex-col gap-[1vw] max-[950px]:gap-[5vw]">
      <div>
      <h1 className="flex items-center gap-[2.5%] ">
        DELIVERY <span className="text-primary">SERVICE</span>
      </h1>
      <p className="max-[950px]:text-center  max-[950px]:">
        Our refreshing purified bottled water can now be delivered directly to
        your door with our water delivery service.
      </p>
      </div>
      <ul className="flex flex-col gap-[1.5vw] mt-[2vw] max-[950px]:flex-row max-[950px]:justify-center max-[50px]:items-center max-[950px]:gap-[7.5%] ">
        <li className="flex items-center gap-[1vw] max-[950px]:gap-[2.5vw] max-[950px]:flex-col">
          <Image src={imgUrl1} alt="" className="size-[3.281vw] max-[950px]:size-[16.146vw] "></Image>
          <p className="font-extrabold first-letter:text-primary text-nowrap">
            | FREE DELIVERY
          </p>
        </li>
        <li className="flex items-center gap-[1vw] max-[950px]:gap-[2.5vw] max-[950px]:flex-col">
          <Image src={imgUrl2} alt="" className="size-[3.281vw] max-[950px]:size-[16.146vw] "></Image>
          <p className="font-extrabold first-letter:text-primary text-nowrap">
            | 7 DAYS A WEEK
          </p>
        </li>
        <li className="flex items-center gap-[1vw] max-[950px]:gap-[2.5vw] max-[950px]:flex-col">
          <Image src={imgUrl3} alt="" className="size-[3.281vw] max-[950px]:size-[16.146vw] "></Image>
          <p className="font-extrabold first-letter:text-primary text-nowrap">
            | 8:00 - 23:00
          </p>
        </li>
      </ul>
      <div
        className="flex items-center max-[950px]:
max-[950px]:justify-center gap-[1vw] mt-[1vw]"
      >
        <Link
          href="/shop"
          className="relative flex items-center justify-center text-white rounded-full group py-[0.75%] px-[3.5%] max-[950px]:py-[1.5%] max-[950px]:px-[5%]  hover:border-primary border-transparent border-[0.0625vw] group-hover:border-[0.0625vw]"
        >
          <p className="absolute inset-0 rounded-full -z-[1] bg-gradient-to-br from-secondary to-primary group-hover:opacity-0 transition-all ease-linear duration-[0.3s] py-[0.75%] px-[3.5%] max-[950px]:py-[1.5%] max-[950px]:px-[5%]"></p>
          <h5 className="transition-all ease-linear duration-[0.3s] group-hover:text-primary  text-nowrap">
            Shop Now
          </h5>
        </Link>
        <Link
          href="/about"
          className="group   flex items-center  border-primary justify-center rounded-full bg-none border-[0.0625vw] hover:border-transparent hover:bg-primary transition-all ease-linear duration-[0.3s] py-[0.75%] px-[3.5%] max-[950px]:py-[1.5%] max-[950px]:px-[5%]"
        >
          <h5 className="transition-all ease-linear duration-[0.3s] group-hover:text-white text-primary  text-nowrap">
            Read More
          </h5>
        </Link>
      </div>
    </div>
  );
}

export default Section4;
