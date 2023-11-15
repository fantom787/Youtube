import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg w-48">
      <ul>
        <li>
          <Link to="/"> Home</Link>
        </li>
        <Link to={"/search?search_query=" + "Shorts"}>
          <li>Shorts</li>
        </Link>
        <Link to={"/search?search_query=" + "Videos"}>
          <li>Videos</li>
        </Link>
        <Link to={"/search?search_query=" + "Live"}>
          <li>Live</li>
        </Link>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <Link to={"/search?search_query=" + "Music"}>
          <li>Music</li>
        </Link>
        <Link to={"/search?search_query=" + "Sports"}>
          <li>Sports</li>
        </Link>
        <Link to={"/search?search_query=" + "Gaming"}>
          <li>Gaming</li>
        </Link>
        <Link to={"/search?search_query=" + "Movies"}>
          <li>Movies</li>
        </Link>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <Link to={"/search?search_query=" + "Music"}>
          <li>Music</li>
        </Link>
        <Link to={"/search?search_query=" + "Sports"}>
          <li>Sports</li>
        </Link>
        <Link to={"/search?search_query=" + "Gaming"}>
          <li>Gaming</li>
        </Link>
        <Link to={"/search?search_query=" + "Movies"}>
          <li>Movies</li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
