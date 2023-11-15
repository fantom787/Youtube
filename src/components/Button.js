import React from "react";
import { Link } from "react-router-dom";

const Button = ({ name }) => {
  return (
    <div>
      {/* <Link to={"/search?search_query=" + s}></Link> */}
      <Link to={"/search?search_query=" + name}>
        <button className="m-2 px-5 py-2 bg-gray-200 rounded-lg">{name}</button>
      </Link>
    </div>
  );
};

export default Button;
