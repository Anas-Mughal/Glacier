import Image from "next/image";
import telephone from "../../../assets/svg/telephone.svg";

function NumberField() {
  return (
    <div className="flex flex-col items-start justify-center gap-[0.5vw]">
      <label className="flex items-center justify-center gap-[0.6vw]" htmlFor="number">
        <Image className="w-[0.776vw]" src={telephone} alt="Telephone Icon" />
        <span className="text-[0.883vw] text-white">WhatsApp Number:</span>
      </label>
      <input
        className="w-full p-[0.5vw] bg-transparent border-[0.1vw] border-[#ffffff80] text-[#ffffff80] text-[0.65vw] rounded-[0.3vw] focus:ring-primary focus:border-primary focus:outline-none"
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
