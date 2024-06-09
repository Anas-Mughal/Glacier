import PropTypes from "prop-types";
import Image from "next/image";
function Section1({ flow, ImgPath, component: Section1Content }) {
  return (
    <section className={`flex items-center w-full  justify-evenly ${flow}`}>
      <Section1Content />
      <div>
        <Image src={ImgPath} alt="" className="size-auto" priority />
      </div>
    </section>
  );
}

// PropTypes validation
Section1.propTypes = {
  flow: PropTypes.string.isRequired, // Validate flow as a required string
  ImgPath: PropTypes.string.isRequired, // Validate ImgPath as a required string
  component: PropTypes.elementType.isRequired, // Validate component as a required element type (component)
};

export default Section1;
