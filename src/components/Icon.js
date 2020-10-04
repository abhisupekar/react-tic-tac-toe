import React from "react";
import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa";

const Icon = ({ name }) => {
  switch (name) {
    case "Circle":
      return <FaRegCircle size="1.5em" className="icons" />;

    case "Cross":
      return <FaTimes size="1.5em" className="icons" />;

    default:
      return <FaPen size="1.5em" className="icons" />;
  }
};

export default Icon;
