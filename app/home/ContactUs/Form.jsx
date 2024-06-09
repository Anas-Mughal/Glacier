"use client";
import axios from "axios";
import NameField from "./FormSections/Namefield";
import NumberField from "./FormSections/Numberfield";
import EmailField from "./FormSections/Emailfield";
import BottlesField from "./FormSections/Bottlesfield";
import ReviewField from "./FormSections/Reviewfield";
import SubmitBtn from "./FormSections/Submitbtn";

function Section6() {
  // Section6 component
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const number = formData.get("number");
    const bottles = formData.get("bottles");
    const review = formData.get("review");

    try {
      const response = await axios.post("/api/formhandler", {
        name,
        email,
        number,
        bottles,
        review,
      });

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
      className="flex flex-col items-center w-full gap-[5vw] "
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
            <NameField />
            <NumberField />
            <EmailField />
            <BottlesField />
          </div>
          <ReviewField />
        </div>
        <div>
          <SubmitBtn />
        </div>
      </form>
    </section>
  );
}

export default Section6;
