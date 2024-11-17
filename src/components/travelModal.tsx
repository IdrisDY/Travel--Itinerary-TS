import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { searchFlight, searchHotels } from "../../services/Flights/index";
import { formatDate } from "../../utils/helper/index";
import HotelsInput from "./hotelsInput";

type SearchType = "flights" | "hotels" | "attractions";

interface TravelModalProps {
  toggleModal: () => void;
  isModalOpen: boolean;
  flightParams?: Record<string, any>;
}

interface FlightSegment {
  departureAirport: {
    name: string;
  };
  arrivalAirport: {
    name: string;
  };
  departureDate: string;
}

interface FlightOffer {
  segments: FlightSegment[];
}

interface FlightResponseData {
  flightOffers: FlightOffer[];
}

const TravelModal: React.FC<TravelModalProps> = ({
  toggleModal,
  isModalOpen,
  flightParams,
}) => {
  const [searchType, setSearchType] = useState<SearchType>("flights");
  const [searchQuery, setSearchQuery] = useState("BOM.AIRPORT");
  const [toQuery, setToQuery] = useState("DEL.AIRPORT");
  const [departDate, setDepartDate] = useState(flightParams?.departDate || "");
  const [data, setData] = useState<FlightResponseData | null>(null);

  const fetchFunction = () => {
    switch (searchType) {
      case "hotels":
        const hotelParams = {
          dest_id: searchQuery,
          search_type: "CITY",
          adults: "1",
          children_age: "0,17",
          room_qty: "1",
          page_number: "1",
          units: "metric",
          temperature_unit: "c",
          languagecode: "en-us",
          currency_code: "AED",
        };
        return searchHotels(hotelParams);
      case "attractions":
        return searchFlight({
          fromId: searchQuery,
          toId: toQuery,
          pageNo: "1",
          adults: "1",
          children: "0,17",
          sort: "BEST",
          cabinClass: "ECONOMY",
          currency_code: "AED",
          departDate: departDate,
        });
      default:
        return searchFlight({
          fromId: searchQuery,
          toId: toQuery,
          pageNo: "1",
          adults: "1",
          children: "0,17",
          sort: "BEST",
          cabinClass: "ECONOMY",
          currency_code: "AED",
          departDate: departDate,
        });
    }
  };

  const {
    data: response,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["search", searchType, flightParams, searchQuery],
    queryFn: fetchFunction,
    enabled: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  useEffect(() => {
    if (response) {
      setData(response.data || null);
    }
  }, [response]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    const newValue = e.target.value;
    if (field === "from") {
      setSearchQuery(newValue);
    } else if (field === "to") {
      setToQuery(newValue);
    } else if (field === "date") {
      setDepartDate(newValue);
    }
  };

  const handleSearch = () => {
    refetch();
  };

  // Type check if data is not null and contains flightOffers
  const flightSegments =
    searchType === "flights" && data && Array.isArray(data.flightOffers)
      ? data.flightOffers.map((item) => item.segments[0])
      : [];

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white overflow-y-auto rounded-lg shadow-lg w-full h-screen max-w-lg p-6 relative">
            <button
              onClick={toggleModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>

            <h2 className="text-lg font-bold mb-4">Search {searchType}</h2>

            {/* Search Type Toggle */}
            <div className="flex space-x-4 mb-4">
              {["flights", "hotels", "attractions"].map((type) => (
                <button
                  key={type}
                  onClick={() => setSearchType(type as SearchType)}
                  className={`py-2 px-4 rounded ${
                    searchType === type
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>

            {/* Input Fields */}
            {searchType === "flights" && (
              <div>
                <label className="block">From</label>
                <input
                  type="text"
                  value={searchType === "flights" ? searchQuery : ""}
                  onChange={(e) => handleInputChange(e, "from")}
                  className="border rounded w-full py-2 px-3 mt-1"
                  placeholder={
                    searchType === "flights"
                      ? "From airport"
                      : "Enter location (e.g., city)"
                  }
                />
                {
                  <div className="mt-4">
                    <label className="block">To</label>
                    <input
                      type="text"
                      value={toQuery}
                      onChange={(e) => handleInputChange(e, "to")}
                      className="border rounded w-full py-2 px-3 mt-1"
                      placeholder="To airport"
                    />
                  </div>
                }
                <div className="mt-4">
                  <label className="block">Departure Date</label>
                  <input
                    type="date"
                    value={departDate}
                    onChange={(e) => handleInputChange(e, "date")}
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
            )}
            {searchType == "hotels" && <HotelsInput />}

            {/* Results Section */}
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error loading {searchType} data.</p>}
            <div className="mt-6">
              {data &&
              Array.isArray(data.flightOffers) &&
              data.flightOffers.length > 0 ? (
                <div>
                  {searchType === "flights" &&
                    flightSegments?.map((item, index) => (
                      <div key={index} className="border-b py-4">
                        <p>From: {item.arrivalAirport.name}</p>
                        <p>To: {item.departureAirport.name}</p>
                        <p>Departure time: {formatDate(item.departureDate)}</p>
                        <button
                          onClick={() =>
                            localStorage.setItem(
                              `flight${index + 1}`,
                              JSON.stringify(item)
                            )
                          }
                          className="mt-2 bg-mainBlue text-white py-2 px-4 rounded hover:bg-blue-600"
                        >
                          Add to Itinerary
                        </button>
                      </div>
                    ))}
                </div>
              ) : (
                <p>No {searchType} results found.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TravelModal;
