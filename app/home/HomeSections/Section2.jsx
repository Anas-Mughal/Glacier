import Image from "next/image";
import ImgUrl from "../../../public/assets/png/bottle-2.png";
function Section2() {
  return (
    <section className="flex flex-col items-center w-full gap-[5vw] max-[950px]:gap-[10vw]">
      <div className="flex flex-col items-center justify-center">
        <h1 className="max-[950px]:text-[8vw] max-[950px]:gap-[3vw] max-[950px]:flex max-[950px]:items-center max-[950px]:justify-center">
          WATER <span className="text-primary">COMPOSITION</span>
        </h1>
        <h4>What&apos;s inside?</h4>
      </div>
      <div className="flex max-[950px]:flex-col items-center justify-center max-[950px]:w-full">
        <div className="flex flex-col max-[950px]:flex-row gap-[1vw]   max-[950px]:w-full  max-[950px]:flex-wrap-reverse max-[950px]:justify-between max-[950px]:items-center max-[950px]:gap-y-[5vw] max-[950px]:gap-x-[30%] ">
          <div className="*:text-right max-[950px]:*:text-center   items-center flex flex-col min-[950px]:items-end">
            <h4 className="">Sodium</h4>
            <h5 className="text-primary ">05-30 MG/L</h5>
            <p className="text-[1vw]  w-[11.458vw] first-letter:text-primary first-letter:font-bold max-[950px]:hidden">
              | About 99% of the calcium in our bodies is in our bones and
              teeth.
            </p>
          </div>
          <div className="*:text-right max-[950px]:*:text-center  items-center flex flex-col min-[950px]:items-end">
            <h4 className="">Calcium</h4>
            <h5 className="text-primary ">35-75 MG/L</h5>
            <p className="text-[1vw]  w-[11.458vw] first-letter:text-primary first-letter:font-bold max-[950px]:hidden">
              | About 99% of the calcium in our bodies is in our bones and
              teeth.
            </p>
          </div>
          <div className="*:text-right max-[950px]:*:text-center  m-auto items-center flex flex-col min-[950px]:items-end">
            <h4 className="">Magnesium</h4>
            <h5 className="text-primary ">05-30 MG/L</h5>
            <p className="text-[1vw]  w-[11.458vw] first-letter:text-primary first-letter:font-bold max-[950px]:hidden">
              | About 99% of the calcium in our bodies is in our bones and
              teeth.
            </p>
          </div>
        </div>
        <div className=" h-[28vw] max-[950px]:h-[50vw]  max-[950px]:mt-[-20%]">
          <Image src={ImgUrl} className="size-full" alt="" />
        </div>
        <div className="flex flex-col max-[950px]:flex-row max-[950px]:mt-[-15vw] max-[950px]:gap-y-[5vw] max-[950px]:flex-wrap max-[950px]:w-full items-center justify-between max-[950px]:gap-x-[30%] gap-[1vw]">
          <div className="max-[950px]:*:text-center  ">
            <h4 className="">Sulphate</h4>
            <h5 className="text-primary ">15-45 MG/L</h5>
            <p className="text-[1vw] w-[11.458vw] first-letter:text-primary first-letter:font-bold max-[950px]:hidden">
              | About 99% of the calcium in our bodies is in our bones and
              teeth.
            </p>
          </div>
          <div className="max-[950px]:*:text-center  ">
            <h4 className="">Chloride</h4>
            <h5 className="text-primary ">50-100 MG/L</h5>
            <p className="text-[1vw] w-[11.458vw] first-letter:text-primary first-letter:font-bold max-[950px]:hidden">
              | About 99% of the calcium in our bodies is in our bones and
              teeth.
            </p>
          </div>
          <div className="max-[950px]:*:text-center m-auto">
            <h4 className="">Bicarbonate</h4>
            <h5 className="text-primary ">15-45 MG/L</h5>
            <p className="text-[1vw] w-[11.458vw] first-letter:text-primary first-letter:font-bold max-[950px]:hidden">
              | About 99% of the calcium in our bodies is in our bones and
              teeth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Section2;
