import React from "react";

const SearchCard = ({ info }) => {
  const { snippet } = info;
  const { title, channelTitle, thumbnails, description } = snippet;
  console.log(info);
  return (
    <div className="p-2 m-2 w-screen shadow-lg flex">
      <img src={thumbnails.medium.url} alt="thumbnail" className="rounded-lg" />
      <ul className="font-bold pu-2 px-10">
        <li>{title}</li>
        <ul className="flex text text-gray-400 ">
          <li className="pr-2">2M Views</li>
          <li> - 4 Months ago</li>
        </ul>
        <li>{channelTitle}</li>
        <li>{description}</li>
      </ul>
    </div>
  );
};

export default SearchCard;
