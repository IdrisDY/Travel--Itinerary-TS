import React, { useState } from "react";

const HotelsInput = () => {
  const [destination, setDestination] = useState<number | string>(0);
  const [searchType, setSearchType] = useState("");
  const [departDate, setDepartDate] = useState("");

  function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setDestination(e.target.value);
  }
  function handleSearch() {
    console.log("button is clicked", destination);
  }

  return (
    <div>
      <label className="block">Destination Type</label>
      <select
        onChange={(e) => handleSelectChange(e)}
        className="border rounded w-full py-2 px-3 mt-1"
      >
        <option>Option 1 </option>
      </select>
      <div className="mt-4">
        <label className="block">To</label>
        <input
          type="text"
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
          className="border rounded w-full py-2 px-3 mt-1"
          placeholder="To airport"
        />
      </div>
      <div className="mt-4">
        <label className="block">Departure Date</label>
        <input
          type="date"
          value={departDate}
          onChange={(e) => setDepartDate(e.target.value)}
          className="border rounded w-full py-2 px-3 mt-1"
        />
      </div>
      <button
        onClick={handleSearch}
        className="bg-mainBlue text-white py-2 px-4 w-full rounded mt-4 hover:bg-blue-600"
      >
        Search {searchType}
      </button>
    </div>
  );
};

export default HotelsInput;
