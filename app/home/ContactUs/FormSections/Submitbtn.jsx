import Link from "next/link";

function SubmitButton() {
  return (
    <button type="submit" aria-label="Submit form">
      <div className="relative flex items-center justify-center text-white rounded-full group py-[0.75vw] px-[3.5vw] max-[950px]:py-[1.5vw] max-[950px]:px-[5vw]  hover:border-primary border-transparent border-[0.0625vw] group-hover:border-[0.0625vw]">
        <p className="absolute inset-0 rounded-full -z-[1] bg-gradient-to-br from-secondary to-primary group-hover:opacity-0 transition-all ease-linear duration-[0.3s] py-[0.75%] px-[3.5%] max-[950px]:py-[1.5%] max-[950px]:px-[5%]"></p>
        <h5 className="transition-all ease-linear duration-[0.3s] group-hover:text-primary  text-nowrap">
          Shop Now
        </h5>
      </div>
    </button>
  );
}

export default SubmitButton;
