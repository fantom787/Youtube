import React from "react";

const VideoCard = ({ info }) => {
  if (info) {
    const { snippet, statistics } = info;
    const { title, channelTitle, thumbnails } = snippet;
    return (
      <div className="p-2 m-2 w-72 shadow-lg">
        <img
          alt={title + " - thumbnail"}
          src={thumbnails.medium.url}
          className="rounded-lg"
        />
        <ul>
          <li className="font-bold py-2">{title}</li>
          <li>{channelTitle}</li>
          <li>{statistics.viewCount} views</li>
        </ul>
      </div>
    );
  }
  return <div>VideoCard Loading..</div>;
};

export default VideoCard;
