import Image from "next/image";
import telephone from "../../../../public/assets/svg/telephone.svg";

function NumberField() {
  return (
    <div className="flex flex-col items-start justify-center gap-[0.5vw] max-[950px]:gap-[1.5vw]">
      <label
        className="flex items-center justify-center gap-[0.6vw] max-[950px]:gap-[1.5vw]"
        htmlFor="number"
      >
        <div className="size-[2vw] max-[950px]:size-[4vw] flex justify-center items-center">
          <Image
            className="object-contain size-full"
            src={telephone}
            alt="Telephone Icon"
          />
        </div>
        <p className="text-white text-nowrap">WhatsApp Number:</p>
      </label>
      <input
        className="w-full p-[0.5vw] bg-transparent border-[0.1vw] border-[#ffffff80] text-[#ffffff80]  rounded-[0.3vw] focus:ring-primary focus:border-primary focus:outline-none flex justify-center items-center max-[950px]:rounded-[1vw]"
        type="tel"
        id="number"
        name="number"
        placeholder="+90 123-345-324"
        required
      />
    </div>
  );
}

export default NumberField;
