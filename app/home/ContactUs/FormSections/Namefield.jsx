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
          className="object-contain size-full "
          src={personIcon}
          alt="Person Icon"
        />
        <p className="text-white ">Name:</p>
      </label>
      <input
        className="w-full p-[0.5vw] bg-transparent border-[0.1vw] border-[#ffffff80] text-[#ffffff80]  rounded-[0.3vw] max-[950px]:rounded-[1vw] focus:ring-primary focus:border-primary focus:outline-none flex justify-center items-center"
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
