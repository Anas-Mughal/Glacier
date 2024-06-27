import Image from "next/image";
import img2 from "../../../public/assets/png/about/filter.png";

function Section2() {
  return (
    <section className="flex items-center justify-center  flex-col gap-[2vw] ">
      <h1 className="text-nowrap">
        HOW WE <span className="text-primary">PURIFY</span>
      </h1>
      <div className="flex items-center max-[950px]:flex-col-reverse justify-evenly w-full gap-[7vw]">
        <div className="size-[23.75vw] max-[950px]:size-[60vw]">
          <Image src={img2} alt="" className="size-full"></Image>
        </div>
        <div className="w-[30.208vw] max-[950px]:w-full">
          <p className="text-right first-letter:text-primary max-[950px]:text-center first-letter:font-bold">
            | At Glacier Water, we take pride in our meticulous purification
            process to ensure you receive the cleanest and safest water
            possible. Our journey begins with sourcing high-quality water, which
            then undergoes a multi-stage filtration process. We use advanced
            technologies like reverse osmosis, carbon filtration, and UV
            sterilization to eliminate impurities, contaminants, and harmful
            microorganisms. Each step is carefully monitored and tested to meet
            rigorous quality standards. Finally, the water is enriched with
            essential minerals to enhance its taste and health benefits. Our
            dedication to purity means you can trust every drop of Glacier Water
            to be of the highest quality.
          </p>
        </div>
      </div>
    </section>
  );
}
export default Section2;
