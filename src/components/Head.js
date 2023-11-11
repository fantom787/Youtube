import React from "react";

const Head = () => {
  return (
    <>
      {/* first section -- left Section*/}
      <div>
        <img
          alt="menu"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
        />
        <img
          alt="youtube-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png"
        />
      </div>
      {/* Second Section -Middle Secion  */}
      <div>
        <input type="text" />
        <button>Search</button>
      </div>
      {/* Third Section -- Right Section */}
      <div>
        <img
          alt="user-icon"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </>
  );
};

export default Head;
