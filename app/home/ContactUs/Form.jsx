"use client";
import personIcon from "../../assets/svg/personIcon.svg";
import telephone from "../../assets/svg/telephone.svg";
import msg from "../../assets/svg/msg.svg";
import lock from "../../assets/svg/lock.svg";
import Image from "next/image";
import { useState } from "react";
function Section6() {
  const [bottles, setBottles] = useState(0);

  const handleIncrement = () => {
    setBottles((prevCount) => (prevCount < 99999 ? prevCount + 1 : prevCount));
  };

  const handleDecrement = () => {
    setBottles((prevCount) => (prevCount > 0 ? prevCount - 1 : prevCount));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const number = formData.get("number");
    const bottles = formData.get("bottles");
    const review = formData.get("review");

    try {
      const response = await fetch("/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          number,
          bottles,
          review,
        }),
      });

      if (response.ok) {
        alert("Message sent successfully!");
      } else {
        throw new Error(
          `Failed to send message: ${response.status} ${response.statusText}`
        );
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center w-full gap-[5vw] mt-[10vw]"
    >
      <h1>
        CONTACT <span className="text-primary">US</span>
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-end gap-[1vw]"
      >
        <div className="flex items-center justify-center gap-[1vw] h-[19.271vw]">
          <div className="w-[34.375vw] h-full justify-between flex flex-col">
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
                <p className="text-[0.883vw]">Name:</p>
              </label>
              <input
                className="w-full p-[0.5vw] bg-transparent border-[0.1vw] border-[#ffffff80] text-[#ffffff80] text-[0.65vw] rounded-[0.3vw] flex items-center justify-center focus-visible:ring-[primary] focus-visible:border-primary focus-visible:outline-none"
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="flex flex-col items-start justify-center gap-[0.5vw]">
              <label
                className="flex items-center justify-center gap-[0.6vw]"
                htmlFor="email"
              >
                <Image
                  className="w-[0.781vw] h-[0.625vw]"
                  src={msg}
                  alt="Message Icon"
                />
                <p className="text-[0.883vw]">Email:</p>
              </label>
              <input
                className="w-full p-[0.5vw] bg-transparent border-[0.1vw] border-[#ffffff80] text-[#ffffff80] text-[0.65vw] rounded-[0.3vw] flex items-center justify-center focus-visible:ring-[primary] focus-visible:border-primary focus-visible:outline-none"
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
                required
              />
            </div>
            <div className="flex flex-col items-start justify-center gap-[0.5vw]">
              <label
                className="flex items-center justify-center gap-[0.6vw]"
                htmlFor="number"
              >
                <Image
                  className="w-[0.776vw]"
                  src={telephone}
                  alt="Telephone Icon"
                />
                <p className="text-[0.883vw]">WhatsApp Number :</p>
              </label>
              <input
                className="w-full p-[0.5vw] bg-transparent border-[0.1vw] border-[#ffffff80] text-[#ffffff80] text-[0.65vw] rounded-[0.3vw] flex items-center justify-center focus-visible:ring-[primary] focus-visible:border-primary focus-visible:outline-none"
                type="tel"
                id="number"
                name="number"
                placeholder="+90 123-345-324"
                required
              />
            </div>

            <div className="flex flex-col items-start justify-center gap-[0.5vw] relative">
              <label
                className="flex items-center justify-center gap-[0.6vw]"
                htmlFor="bottles"
              >
                <Image
                  className="w-[0.677vw] h-[0.781vw]"
                  src={lock}
                  alt="Lock Icon"
                />
                <p className="text-[0.883vw]">No of Bottles for exchange:</p>
              </label>
              <div className="flex flex-col items-start justify-center gap-[0.5vw] relative w-full">
                <input
                  className="w-full p-[0.5vw] bg-transparent border-[0.1vw] border-[#ffffff80] text-[#ffffff80] text-[0.65vw] rounded-[0.3vw] flex items-center justify-center focus-visible:ring-[primary] focus-visible:border-primary focus-visible:outline-none"
                  type="number"
                  id="bottles"
                  name="bottles"
                  value={bottles}
                  onChange={(e) =>
                    setBottles(
                      Math.min(
                        Math.max(0, parseInt(e.target.value) || 0),
                        99999
                      )
                    )
                  }
                  placeholder="0"
                  required
                />
                <div className="absolute right-[4%] flex items-center justify-center top-[50%] gap-[1vw] size-[1.563vw] translate-y-[-50%]">
                  <button
                    className="text-[2vw] size-full flex justify-center items-center text-white cursor-pointer"
                    onClick={handleDecrement}
                    aria-label="Decrease value"
                    tabIndex="0"
                  >
                    <span aria-hidden="true">-</span>
                  </button>
                  <button
                    className="text-[2vw] size-full flex justify-center items-center text-white cursor-pointer"
                    onClick={handleIncrement}
                    aria-label="Increase value"
                    tabIndex="0"
                  >
                    <span aria-hidden="true">+</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[33vw] flex flex-col h-full justify-between gap-[0.28vw]">
            <label htmlFor="review">
              <p className="">Any Complaint or Review:</p>
            </label>
            <textarea
              className="w-full h-full p-[0.75vw] bg-transparent border-[0.1vw] border-[#ffffff80] text-[#ffffff80] text-[0.65vw] rounded-[0.3vw] flex items-center justify-center focus-visible:ring-[primary] focus-visible:border-primary focus-visible:outline-none resize-none"
              id="review"
              name="review"
              placeholder="Write here"
            ></textarea>
          </div>
        </div>
        <div>
          <button
            type="submit"
            aria-label="Submit form"
            className="group relative w-[9.375vw] h-[2.604vw] flex items-center justify-center text-white rounded-full"
          >
            <p className="absolute inset-0 rounded-full -z-[1] bg-gradient-to-br from-secondary to-primary group-hover:opacity-0 transition-all ease-linear duration-[0.3s]"></p>
            <p className="transition-all ease-linear duration-[0.3s] group-hover:text-primary hover:border-primary border-transparent border-[0.0625vw] group-hover:border-[0.0625vw] w-full h-full rounded-full flex justify-center items-center">
              Submit
            </p>
          </button>
        </div>
      </form>
    </section>
  );
}

export default Section6;
