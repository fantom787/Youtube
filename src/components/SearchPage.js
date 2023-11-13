import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { YOUTUBE_SEARCH_PAGE_API } from "../utils/constants";
import SearchCard from "./SearchCard";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [searchData, setSearchData] = useState([]);
  const searchQuery = searchParams.get("search_query");
  const url = YOUTUBE_SEARCH_PAGE_API + searchQuery;
  useEffect(() => {
    console.log("useEffectCalled!");
    getData();
  }, [searchQuery]);
  const getData = async () => {
    const data = await fetch(url);
    const json = await data.json();
    setSearchData(json.items);
    console.log(searchData);
  };
  if (!searchData.length) {
    return <>Loading...</>;
  }
  return (
    <div>
      {searchData.map((video) => (
        <Link to={"/watch?v=" + video.id.videoId}>
          {" "}
          <SearchCard key={video.id.videoId} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default SearchPage;
