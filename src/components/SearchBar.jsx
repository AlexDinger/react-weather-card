import React, { useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";

const SearchBar = ({
  setSearchState,
  setLocationState,
  searchState,
  locationState,
  setWeatherState,
}) => {
  const zipLookup = async (zip) => {
    try {
      const response = await axios.get(
        `https://www.zipcodeapi.com/rest/${process.env.GATSBY_LOCATION_API}/info.json/${zip}/degrees`
      );
      setLocationState(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (Object.keys(locationState) == 0) return;
    const response = axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${locationState.lat}&lon=${locationState.lng}&units=imperial&appid=${process.env.GATSBY_WEATHER_API}`
      )
      .then((res) => setWeatherState(res.data))
      .catch((err) => console.error(err));
  }, [locationState]);

  return (
    <div className={` w-full text-gray-500  `}>
      <div className="relative w-full overflow-hidden border h-14 hover:shadow-google rounded-3xl border-google hover:border-white focus-within:border-white focus-within:shadow-google">
        <span className="absolute left-0 flex items-center justify-center h-full px-5">
          <AiOutlineSearch size={24} />
        </span>
        {searchState ? (
          <span
            className="absolute right-0 flex items-center justify-center h-full px-5 cursor-pointer"
            onClick={() => setSearchState("")}
          >
            <AiOutlineClose size={24} />
          </span>
        ) : (
          ""
        )}
        <input
          type="text"
          value={searchState}
          className="w-full h-full text-gray-700 bg-opacity-50 rounded-full outline-none px-14"
          placeholder="e.g. 07454"
          onChange={(e) => setSearchState(e.target.value)}
        />
        <button
          className="absolute right-0 h-full px-4 py-2 text-black bg-gray-100"
          onClick={() => zipLookup(searchState)}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
