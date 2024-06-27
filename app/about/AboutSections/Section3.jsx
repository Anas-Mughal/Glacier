import Image from "next/image";
import img3 from "../../../public/assets/png/about/1.png";
import img4 from "../../../public/assets/png/about/2.png";
import img5 from "../../../public/assets/png/about/3.png";
import img6 from "../../../public/assets/png/about/4.png";
import img7 from "../../../public/assets/png/about/5.png";
import img8 from "../../../public/assets/png/about/6.png";
function Section2() {
  return (
    <section className="flex items-center justify-center  flex-col gap-[2vw] ">
      <h1 className="text-nowrap max-[950px]:text-[7vw]">
        OUR <span className="text-primary">PURIFICATION SYSTEM</span>
      </h1>
      <div className="w-full ">
        <div className="flex items-start justify-center gap-[2vw]">
          <div className="flex flex-col items-center justify-center gap-[2vw] w-[42.292vw] max-[950px]:w-[84.584vw]">
            <div className="w-full">
              <Image
                className="w-full h-auto "
                src={img3}
                alt=""
              ></Image>
            </div>
            <div className="w-full">
              <Image
                className="w-full h-auto "
                src={img4}
                alt=""
              ></Image>
            </div>
            <div className="w-full">
              <Image
                className="w-full h-auto "
                src={img5}
                alt=""
              ></Image>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-[3.65vw] max-[950px]:gap-[3.75vw] w-[24.531vw] max-[950px]:w-[49.062vw]">
            <div className="w-full">
              <Image
                className="w-full h-auto "
                src={img6}
                alt=""
              ></Image>
            </div>
            <div className="w-full">
              <Image
                className="w-full h-auto "
                src={img7}
                alt=""
              ></Image>
            </div>
            <div className="w-full">
              <Image
                className="w-full h-auto "
                src={img8}
                alt=""
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Section2;
