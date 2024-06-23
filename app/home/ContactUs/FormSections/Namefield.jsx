import Image from "next/image";
import personIcon from "../../../../public/assets/svg/personIcon.svg";

function NameField() {
  return (
    <div className="flex flex-col items-start justify-center gap-[0.5vw]">
      <label
        className="flex items-center justify-center gap-[0.6vw]"
        htmlFor="name"
      >
        <Image
          className="w-[0.708vw] h-[0.885vw]"
          src={personIcon}
          alt="Person Icon"
        />
        <span className="text-[0.883vw] text-white ">Name:</span>
      </label>
      <input
        className="w-full p-[0.5vw] bg-transparent border-[0.1vw] border-[#ffffff80] text-[#ffffff80] text-[0.65vw] rounded-[0.3vw] focus:ring-primary focus:border-primary focus:outline-none"
        type="text"
        id="name"
        name="name"
        placeholder="Enter your name"
        required
      />
    </div>
  );
}

export default NameField;
