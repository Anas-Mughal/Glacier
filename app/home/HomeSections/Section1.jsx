import Link from "next/link";
function Section1() {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="leading-[3.75vw]">PURE WATER </h1>
      <h1 className="leading-[3.75vw] text-primary">DELIVERY SERVICE</h1>
      <p className="w-[28.646vw] mt-[1vw]  first-letter:text-primary first-letter:font-bold">
        | We now deliver different types of bottled water. To drink the best
        water please come to us and give us an order and take safe and sound
        water for you.
      </p>
      <div className="flex items-center gap-[1vw] mt-[1vw]">
        <Link
          href="/shop"
          className="group relative w-[9.375vw] h-[2.604vw] flex items-center justify-center text-white rounded-full"
        >
          <p className="absolute inset-0 rounded-full -z-[1] bg-gradient-to-br from-secondary to-primary group-hover:opacity-0 transition-all ease-linear duration-[0.3s]"></p>
          <p className="transition-all ease-linear duration-[0.3s] group-hover:text-primary hover:border-primary border-transparent border-[0.0625vw] group-hover:border-[0.0625vw] w-full h-full rounded-full flex justify-center items-center">
            Shop Now
          </p>
        </Link>
        <Link
          href="/about"
          className="group w-[9.375vw] h-[2.604vw] flex items-center  border-primary justify-center rounded-full bg-none border-[0.0625vw] hover:border-transparent hover:bg-primary transition-all ease-linear duration-[0.3s]"
        >
          <p className="transition-all ease-linear duration-[0.3s] group-hover:text-white text-primary">
            Read More
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Section1;
