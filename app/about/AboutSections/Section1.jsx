import Image from "next/image";
import img1 from "../../../public/assets/png/about/aboutUs.png";

function Section3() {
  return (
    <section className="flex flex-col items-center justify-between ">
      <h1>
        ABOUT <span className="text-primary">US</span>
      </h1>
      <div className="flex items-center justify-evenly  w-[100%] gap-[7vw]">
        <div className="w-[30.208vw]">
          <p className=" first-letter:text-primary first-letter:font-bold">
            | Welcome to Glacier Water, where we believe that access to lean,
            pure water is a fundamental right. Our mission is to ensure every
            home and business enjoys the benefits of crystal-clear hydration.
            With a passion for quality and a commitment to excellence, we source
            and deliver the purest water, free from contaminants and rich in
            essential minerals. Whether you&apos;re looking to stay refreshed,
            boost your health, or simply enjoy a superior taste, Glacier Water
            is dedicated to bringing the best water experience right to your
            doorstep. Join us in our journey to make pure water an everyday
            delight for everyone.
          </p>
        </div>
        <div className="size-[23.75vw] ">
          <Image src={img1} className="size-full" alt=""></Image>
        </div>
      </div>
    </section>
  );
}
export default Section3;
