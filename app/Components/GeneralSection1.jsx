"use client";
import PropTypes from "prop-types";
import Image from "next/image";
import { useEffect, useState } from "react"; // Import useState and useEffect from React

function Section1({
  flow,
  ImgPath,
  component: Section1Content,
  extraProperties,
}) {
  const [matches, setMatches] = useState(false);

  // Use useEffect to check media query on component mount
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 950px)"); // Define your media query here
    // Check initial matches
    setMatches(mediaQuery.matches);

    // Add listener for media query changes
    const handleChange = (e) => {
      setMatches(e.matches);
    };

    // Use addEventListener instead of addListener
    mediaQuery.addEventListener("change", handleChange);

    // Clean up listener
    return () => {
      // RemoveEventListener instead of removeListener
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <section className={`flex items-center  justify-center  ${flow}`}>
      <Section1Content />
      {/* Conditional rendering based on media query */}
      {!matches && (
        <div
          className={`flex items-center justify-center ${extraProperties} `}
        >
          <Image
            src={ImgPath}
            alt=""
            className={`flex items-center justify-center object-contain size-full`}
            width={500}
            height={500}
            priority
          />
        </div>
      )}
    </section>
  );
}

// PropTypes validation
Section1.propTypes = {
  extraProperties: PropTypes.string.isRequired,
  flow: PropTypes.string.isRequired,
  ImgPath: PropTypes.string.isRequired,
  component: PropTypes.elementType.isRequired,
};

export default Section1;
