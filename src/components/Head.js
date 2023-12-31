import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { chacheResults } from "../utils/searchSlice";
import { Link } from "react-router-dom";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchChache = useSelector((store) => store.search);
  useEffect(() => {
    // console.log(searchQuery);
    const timer = setTimeout(() => {
      if (searchChache[searchQuery]) {
        setSuggestions(searchChache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  /*
    make a api call after every key press
    if the difference between the the 2 consecutive api calls is < 200ms decline the api call this is called - Debouncing
    to do this in useEffect we have to clear the timer at the return 
  */
  const getSearchSuggestions = async () => {
    // console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json);
    setSuggestions(json[1]);
    // update the chache
    dispatch(
      chacheResults({
        [searchQuery]: json[1],
      })
    );
  };
  const suggestionsOnClick = (suggestion) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
  };

  const handleInputFocus = () => {
    setShowSuggestions(true);
  };

  const handleDocumentClick = (event) => {
    // Close suggestions if clicked outside the input or suggestions
    const inputElement = document.getElementById("searchInput");
    const suggestionsElement = document.getElementById("suggestions");
    if (
      inputElement &&
      !inputElement.contains(event.target) &&
      suggestionsElement &&
      !suggestionsElement.contains(event.target)
    ) {
      setShowSuggestions(false);
    }
  };
  useEffect(() => {
    // Add click event listener to the document body
    document.body.addEventListener("click", handleDocumentClick);

    return () => {
      // Remove the event listener on component unmount
      document.body.removeEventListener("click", handleDocumentClick);
    };
  }, []);
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      {/* first section -- left Section*/}
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
        />
        <a href="/">
          <img
            className="h-8 mx-2"
            alt="youtube-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png"
          />
        </a>
      </div>
      {/* Second Section -Middle Secion  */}
      <div className="col-span-10 px-10">
        <form action={"/search?search_query=" + searchQuery}>
          <input
            id="searchInput"
            className="w-1/2 border border-gray-400 px-5 p-2 rounded-l-full"
            type="text"
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={handleInputFocus}
            value={searchQuery}
          />
          <Link to={"/search?search_query=" + searchQuery}>
            <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
              🔍
            </button>
          </Link>
        </form>
        {showSuggestions && (
          <div
            id="suggestions"
            className="fixed bg-white py-2 px-5 w-1/3 shadow-lg rounded-lg border border-gray-200 absolute"
          >
            <ul>
              {suggestions.map((s) => (
                <Link to={"/search?search_query=" + s}>
                  <li
                    onClick={() => suggestionsOnClick(s)}
                    key={s}
                    className="py-2 px-3 shadow-sm hover:bg-gray-100 cursor-pointer"
                  >
                    🔍 {s}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>
      {/* Third Section -- Right Section */}
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user-icon"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;
