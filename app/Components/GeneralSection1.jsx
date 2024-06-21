import PropTypes from "prop-types";
import Image from "next/image";
function Section1({
  flow,
  ImgPath,
  component: Section1Content,
  extraProperties,
}) {
  return (
    <section className={`flex items-center w-full  justify-evenly ${flow} `}>
      <Section1Content />
      <div
        className={`flex items-center justify-center size-[26.042vw] ${extraProperties}`}
      >
        <Image
          src={ImgPath}
          alt=""
          className={`flex items-center justify-center object-contain size-full `}
          width={500}
          height={500}
          priority
        />
      </div>
    </section>
  );
}

// PropTypes validation
Section1.propTypes = {
  extraProperties: PropTypes.string.isRequired,
  flow: PropTypes.string.isRequired, // Validate flow as a required string
  ImgPath: PropTypes.string.isRequired, // Validate ImgPath as a required string
  component: PropTypes.elementType.isRequired, // Validate component as a required element type (component)
};

export default Section1;
