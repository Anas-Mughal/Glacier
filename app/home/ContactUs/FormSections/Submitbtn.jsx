function SubmitButton() {
  return (
    <button
      type="submit"
      aria-label="Submit form"
      className="group relative w-[9.375vw] h-[2.604vw] flex items-center justify-center text-white rounded-full"
    >
      <span className="absolute inset-0 rounded-full -z-[1] bg-gradient-to-br from-secondary to-primary group-hover:opacity-0 transition-all ease-linear duration-[0.3s]"></span>
      <span className="transition-all ease-linear duration-[0.3s] group-hover:text-primary hover:border-primary border-transparent border-[0.0625vw] group-hover:border-[0.0625vw] w-full h-full rounded-full flex justify-center items-center text-[1.2vw]">
        Submit
      </span>
    </button>
  );
}

export default SubmitButton;
