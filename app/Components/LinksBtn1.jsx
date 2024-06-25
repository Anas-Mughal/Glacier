"use client";
import PropTypes from "prop-types";
import Link from "next/link";

function LinksBtn1({ linkName, linkPath, onClick }) {
  return (
    <li className="flex items-center justify-center">
      <Link
        href={linkPath}
        onClick={onClick} // Directly use the onClick handler
      >
        <h6 className="relative text-white font-semibold before:w-0 before:bottom-[-20%] before:absolute before:bg-gradient-to-r from-transparent to-teal-500 before:h-[10%] hover:before:w-full before:transition-all transition-all hover:text-primary ">
          {linkName}
        </h6>
      </Link>
    </li>
  );
}

LinksBtn1.propTypes = {
  onClick: PropTypes.func.isRequired,
  linkName: PropTypes.string.isRequired,
  linkPath: PropTypes.string.isRequired,
};

export default LinksBtn1;
