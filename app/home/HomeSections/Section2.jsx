import Image from "next/image";
import ImgUrl from "../../assets/png/bottle-2.png";
function Section2() {
  return (
    <section className="flex flex-col items-center w-full gap-[5vw]">
      <div className="flex flex-col items-center justify-center">
        <h2>
          WATER <span className="text-primary">COMPOSITION</span>
        </h2>
        <p className="text-[0.833vw]">What&apos;s inside?</p>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col gap-[2.5vw] mt-[0.5vw]">
          <div className="*:text-right f">
            <h3>Calcium Ca2+</h3>
            <h3 className="text-primary">240 mg/L</h3>
            <p className="text-[0.833vw] text-left w-[11.458vw] first-letter:text-primary first-letter:font-bold">
              | About 99% of the calcium in our bodies is in our bones and
              teeth.
            </p>
          </div>
          <div className="*:text-right">
            <h3>Calcium Ca2+</h3>
            <h3 className="text-primary">240 mg/L</h3>
            <p className="text-[0.833vw] text-left w-[11.458vw] first-letter:text-primary first-letter:font-bold">
              | About 99% of the calcium in our bodies is in our bones and
              teeth.
            </p>
          </div>
          <div className="*:text-right">
            <h3>Calcium Ca2+</h3>
            <h3 className="text-primary">240 mg/L</h3>
            <p className="text-[0.833vw] text-left w-[11.458vw] first-letter:text-primary first-letter:font-bold">
              | About 99% of the calcium in our bodies is in our bones and
              teeth.
            </p>
          </div>
        </div>
        <div>
          <Image src={ImgUrl} className="w-[31.25vw]" alt=""></Image>
        </div>
        <div className="flex flex-col gap-[2.5vw] mt-[0.5vw]">
          <div>
            <h3>Calcium Ca2+</h3>
            <h3 className="text-primary">240 mg/L</h3>
            <p className="text-[0.833vw] w-[11.458vw] first-letter:text-primary first-letter:font-bold">
              | About 99% of the calcium in our bodies is in our bones and
              teeth.
            </p>
          </div>
          <div>
            <h3>Calcium Ca2+</h3>
            <h3 className="text-primary">240 mg/L</h3>
            <p className="text-[0.833vw] w-[11.458vw] first-letter:text-primary first-letter:font-bold">
              | About 99% of the calcium in our bodies is in our bones and
              teeth.
            </p>
          </div>
          <div>
            <h3>Calcium Ca2+</h3>
            <h3 className="text-primary">240 mg/L</h3>
            <p className="text-[0.833vw] w-[11.458vw] first-letter:text-primary first-letter:font-bold">
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
