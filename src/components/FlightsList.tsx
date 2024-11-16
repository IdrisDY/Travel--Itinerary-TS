import FlightCard from "../elements/FlightCard";
import { useState } from "react";
import { PiAirplaneInFlightLight } from "react-icons/pi";
import TravelModal from "./travelModal";

const FlightsList = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <div className="px-2 lg:px-6 flex flex-col pb-[52px] gap-6">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between px-6 pt-4 mb-6 items-center">
        <button className="flex gap-[4px] font-semibold text-altBlackHeaderText items-center">
          <PiAirplaneInFlightLight /> Flights
        </button>

        <button
          onClick={() => setOpenModal(true)}
          className="font-semibold bg-white w-full lg:w-auto text-sm py-3 px-6 text-mainBlue rounded-[4px]"
        >
          Add Flight
        </button>
      </div>

      {/* Render Flight Cards here, assuming the query is successful */}
      {Array.from({ length: 2 }).map(() => {
        return <FlightCard />;
      })}

      <TravelModal
        toggleModal={() => setOpenModal((prev) => !prev)}
        isModalOpen={openModal}
      />
    </div>
  );
};

export default FlightsList;
