import Image from "next/image";
import ImgUrl from "../../../public/assets/png/bottle-2.png";
function Section2() {
  return (
    <section className="flex flex-col items-center w-full gap-[5vw] max-[950px]:gap-[10vw]">
      <div className="flex flex-col items-center justify-center">
        <h2 className="max-[950px]:text-[7vw] max-[950px]:gap-[3vw] max-[950px]:flex max-[950px]:items-center max-[950px]:justify-center">
          WATER <span className="text-primary">COMPOSITION</span>
        </h2>
        <p className="text-[1vw] max-[950px]:text-[4vw]">
          What&apos;s inside?
        </p>
      </div>
      <div className="flex max-[950px]:flex-col items-center justify-center max-[950px]:w-full">
        <div className="flex flex-col max-[950px]:flex-row gap-[1vw]  max-[950px]:flex-wrap-reverse justify-center items-center max-[950px]:gap-y-[10vw] max-[950px]:gap-x-[35.4vw] ">
          <div className="*:text-right max-[950px]:*:text-center  ">
            <h3 className="max-[950px]:text-[3vw]">Calcium Ca2+</h3>
            <h3 className="text-primary max-[950px]:text-[1.75vw]">240 mg/L</h3>
            <p className="text-[0.833vw] text-left w-[11.458vw] first-letter:text-primary first-letter:font-bold max-[950px]:hidden">
              | About 99% of the calcium in our bodies is in our bones and
              teeth.
            </p>
          </div>
          <div className="*:text-right max-[950px]:*:text-center  ">
            <h3 className="max-[950px]:text-[3vw]">Calcium Ca2+</h3>
            <h3 className="text-primary max-[950px]:text-[1.75vw]">240 mg/L</h3>
            <p className="text-[0.833vw] text-left w-[11.458vw] first-letter:text-primary first-letter:font-bold max-[950px]:hidden">
              | About 99% of the calcium in our bodies is in our bones and
              teeth.
            </p>
          </div>
          <div className="*:text-right max-[950px]:*:text-center  ">
            <h3 className="max-[950px]:text-[3vw]">Calcium Ca2+</h3>
            <h3 className="text-primary max-[950px]:text-[1.75vw]">240 mg/L</h3>
            <p className="text-[0.833vw] text-left w-[11.458vw] first-letter:text-primary first-letter:font-bold max-[950px]:hidden">
              | About 99% of the calcium in our bodies is in our bones and
              teeth.
            </p>
          </div>
        </div>
        <div className=" h-[28vw] max-[950px]:h-[50vw] max-[950px]:mt-[-20%]">
          <Image src={ImgUrl} className="size-full" alt="" />
        </div>
        <div className="flex flex-col max-[950px]:flex-row max-[950px]:mt-[-15vw] max-[950px]:gap-y-[10vw] max-[950px]:flex-wrap max-[950px]:w-full items-center justify-center max-[950px]:gap-x-[35.45vw] gap-[1vw]">
          <div className="max-[950px]:*:text-center  ">
            <h3 className="max-[950px]:text-[3vw]">Calcium Ca2+</h3>
            <h3 className="text-primary max-[950px]:text-[1.75vw]">240 mg/L</h3>
            <p className="text-[0.833vw] w-[11.458vw] first-letter:text-primary first-letter:font-bold max-[950px]:hidden">
              | About 99% of the calcium in our bodies is in our bones and
              teeth.
            </p>
          </div>
          <div className="max-[950px]:*:text-center  ">
            <h3 className="max-[950px]:text-[3vw]">Calcium Ca2+</h3>
            <h3 className="text-primary max-[950px]:text-[1.75vw]">240 mg/L</h3>
            <p className="text-[0.833vw] w-[11.458vw] first-letter:text-primary first-letter:font-bold max-[950px]:hidden">
              | About 99% of the calcium in our bodies is in our bones and
              teeth.
            </p>
          </div>
          <div className="max-[950px]:*:text-center   ">
            <h3 className="max-[950px]:text-[3vw]">Calcium Ca2+</h3>
            <h3 className="text-primary max-[950px]:text-[1.75vw]">240 mg/L</h3>
            <p className="text-[0.833vw] w-[11.458vw] first-letter:text-primary first-letter:font-bold max-[950px]:hidden">
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
