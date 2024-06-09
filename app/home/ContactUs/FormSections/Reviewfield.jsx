function ReviewField() {
  return (
    <div className="w-[33vw] flex flex-col h-full justify-between gap-[0.28vw]">
      <label htmlFor="review" className="text-[1vw] text-white ">
        Any Complaint or Review:
      </label>
      <textarea
        className="w-full h-full p-[0.75vw] bg-transparent border-[0.1vw] border-[#ffffff80] text-[#ffffff80] text-[0.65vw] rounded-[0.3vw] flex items-center justify-center focus:ring-primary focus:border-primary focus:outline-none resize-none"
        id="review"
        name="review"
        placeholder="Write here"
      ></textarea>
    </div>
  );
}

export default ReviewField;
