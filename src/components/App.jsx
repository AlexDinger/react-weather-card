import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import ResultBox from "../components/ResultBox";

const App = () => {
  const [weatherState, setWeatherState] = useState({});
  const [locationState, setLocationState] = useState({});
  const [searchState, setSearchState] = useState("");

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center md:px-96 px-12 space-y-5">
      <SearchBar
        setSearchState={setSearchState}
        searchState={searchState}
        setLocationState={setLocationState}
        locationState={locationState}
        setWeatherState={setWeatherState}
      />

      {Object.keys(weatherState) == 0 ? (
        ""
      ) : (
        <ResultBox weatherState={weatherState} locationState={locationState} />
      )}
    </div>
  );
};

export default App;
