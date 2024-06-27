import Image from "next/image";
import msg from "../../../../public/assets/svg/msg.svg";

function EmailField() {
  return (
    <div className="flex flex-col items-start justify-center gap-[0.5vw] max-[950px]:gap-[1.5vw]">
      <label
        className="flex items-center justify-center gap-[0.6vw] max-[950px]:gap-[1.5vw]"
        htmlFor="email"
      >
        <div className="size-[2vw] max-[950px]:size-[4vw] flex justify-center items-center">
          <Image
            className="object-contain size-full"
            src={msg}
            alt="Message Icon"
          />
        </div>
        <p className="text-white">Email:</p>
      </label>
      <input
        className="w-full p-[0.5vw] bg-transparent border-[0.1vw] border-[#ffffff80] text-[#ffffff80] rounded-[0.3vw] focus:ring-primary focus:border-primary focus:outline-none max-[950px]:rounded-[1vw]"
        type="email"
        id="email"
        name="email"
        placeholder="example@gmail.com"
        required
      />
    </div>
  );
}

export default EmailField;
