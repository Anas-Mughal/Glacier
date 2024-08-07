// Form.jsx
"use client";
import axios from "axios";
import NameField from "./FormSections/Namefield";
import NumberField from "./FormSections/Numberfield";
import EmailField from "./FormSections/Emailfield";
import BottlesField from "./FormSections/Bottlesfield";
import ReviewField from "./FormSections/Reviewfield";
import SubmitBtn from "./FormSections/Submitbtn";

function Section6() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;
    const bottles = document.getElementById("bottles").value;
    const review = document.getElementById("review").value;

    const postData = {
      name,
      email,
      number,
      bottles,
      review,
    };

    try {
      const response = await axios.post("/api/submit", postData);

      if (response.status === 200) {
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
      className="flex flex-col items-center w-full gap-[5vw]"
    >
      <div className="h-[5vw] max-[950px]:h-[10vw]"></div>
      <h1>
        CONTACT <span className="text-primary">US</span>
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-end gap-[1vw] w-full max-[950px]:gap-[4vw]"
        name="contact"
      >
        <div className="flex items-stretch in justify-center gap-[1vw] max-[950px]:gap-[5vw] max-[950px]:flex-col min-[951px]:h-[25vw]  w-full">
          <div className="flex flex-col justify-between size-full max-[950px]:gap-[2vw]">
            <NameField />
            <NumberField />
            <EmailField />
            <BottlesField />
          </div>
          <div className="size-full">
            <ReviewField />
          </div>
        </div>
        <div>
          <SubmitBtn />
        </div>
      </form>
    </section>
  );
}

export default Section6;
