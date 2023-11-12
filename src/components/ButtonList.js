import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "Cooking",
  "News",
  "Valentines",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((e) => (
        <Button name={e} />
      ))}
    </div>
  );
};

export default ButtonList;
