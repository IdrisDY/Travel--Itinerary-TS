import HotelCard from "../elements/HotelCard";
import { PiWarehouseLight } from "react-icons/pi";
import { useState } from "react";
import TravelModal from "./travelModal";
const HotelsList = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <div className="bg-[#344054] px-6 py-6 mt-4 rounded-[4px]">
      <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between px-6 pt-4  mb-6 items-center">
        <button className="flex gap-[4px] font-semibold text-white">
          {" "}
          <PiWarehouseLight size={"24px"} color="white" /> Hotels{" "}
        </button>

        <button
          onClick={() => setOpenModal(true)}
          className="font-semibold w-full lg:w-auto bg-white text-sm py-3 px-6 text-mainBlue rounded-[4px] "
        >
          {" "}
          Add Hotels{" "}
        </button>
      </div>

      <div className="flex flex-col gap-6">
        {Array.from({ length: 2 }).map(() => {
          return <HotelCard />;
        })}
      </div>
      <TravelModal
        toggleModal={() => setOpenModal((prev) => !prev)}
        isModalOpen={openModal}
      />
    </div>
  );
};

export default HotelsList;
