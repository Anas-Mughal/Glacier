"use client"
import imgUrl1 from "../../../public/assets/svg/free-delivery.svg";
import imgUrl2 from "../../../public/assets/svg/calender.svg";
import imgUrl3 from "../../../public/assets/svg/clock.svg";
import Link from "next/link";
import Image from "next/image";

function Section4() {
  return (
    <div className="w-[26.042vw]">
      <h2>
        DELIVERY <span className="text-primary">SERVICE</span>
      </h2>
      <p>
        Our refreshing purified bottled water can now be delivered directly to
        your door with our water delivery service.
      </p>
      <ul className="flex flex-col gap-[1.5vw] mt-[2vw]">
        <li className="flex items-center gap-[1vw]">
          <Image src={imgUrl1} alt="" className="size-[3.281vw]"></Image>
          <p className="font-extrabold first-letter:text-primary">
            | FREE DELIVERY
          </p>
        </li>
        <li className="flex items-center gap-[1vw]">
          <Image src={imgUrl2} alt="" className="size-[3.281vw]"></Image>
          <p className="font-extrabold first-letter:text-primary">
            | 7 DAYS A WEEK
          </p>
        </li>
        <li className="flex items-center gap-[1vw]">
          <Image src={imgUrl3} alt="" className="size-[3.281vw]"></Image>
          <p className="font-extrabold first-letter:text-primary">
            | 8:00 - 23:00
          </p>
        </li>
      </ul>
      <div className="flex items-center gap-[1vw] mt-[2vw]">
        <Link
          href="/shop"
          className="group relative w-[9.375vw] h-[2.604vw] flex items-center justify-center text-white rounded-full"
        >
          <p className="absolute inset-0 rounded-full -z-[1] bg-gradient-to-br from-secondary to-primary group-hover:opacity-0 transition-all ease-linear duration-[0.3s]"></p>
          <p className="transition-all ease-linear duration-[0.3s] group-hover:text-primary hover:border-primary border-transparent border-[0.0625vw] group-hover:border-[0.0625vw] w-full h-full rounded-full flex justify-center items-center">
            Order Now
          </p>
        </Link>
        <Link
          href="/about"
          className="group w-[9.375vw] h-[2.604vw] flex items-center border-primary justify-center rounded-full bg-none border-[0.0625vw] hover:border-transparent hover:bg-primary transition-all ease-linear duration-[0.3s]"
        >
          <p className="transition-all ease-linear duration-[0.3s] group-hover:text-white text-primary">
            Read More
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Section4;
