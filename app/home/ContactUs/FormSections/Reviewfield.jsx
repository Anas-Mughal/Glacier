function ReviewField() {
  return (
    <div className="size-full flex flex-col justify-between gap-[0.28vw] max-[950px]:h-[50vw] max-[950px]:gap-[1.5vw]">
      <label htmlFor="review">
        <p>Any Complaint or Review:</p>
      </label>
      <textarea
        className="size-full p-[0.75vw] bg-transparent border-[0.1vw] border-[#ffffff80] text-[#ffffff80]  rounded-[0.3vw] flex items-center justify-center focus:ring-primary focus:border-primary focus:outline-none resize-none max-[950px]:rounded-[1vw]"
        id="review"
        name="review"
        placeholder="Write here"
      ></textarea>
    </div>
  );
}

export default ReviewField;
