import React from "react";
import {
  PiBedLight,
  PiCalendarBlank,
  PiMapPinLight,
  PiStarFill,
  PiStarLight,
  PiSwimmingPoolLight,
  PiWineLight,
  PiXLight,
} from "react-icons/pi";
import Hotel from "../assets/hotel.png";
const HotelCard = () => {
  return (
    <div className="flex justify-between flex-col lg:flex-row  bg-white rounded-[4px]">
      <div className="  flex flex-col  gap-4 lg:gap-0 lg:flex-row py-6">
        {/* Hotel IMage */}
        <div className="pl-6  pr-6 lg:pr-0 lg:w-auto w-full">
          <img
            src={Hotel}
            className="md:min-w-[200px] w-full lg:w-auto h-full"
            alt="hotel image"
          />
        </div>
        <div className="flex flex-col ">
          {/* Upper texts */}
          <div className=" flex flex-col lg:flex-row gap-4 lg:gap-0  pb-4 justify-between pl-4 pr-10">
            <div className="">
              <h3 className="font-semibold ">Riviera Resorts Lekki </h3>
              <p className=" w-full text-sm font-[500]">
                18, Kenneth Agbakuru Street, Off Access Bank Admiralty Way,
                Lekki Phase1
              </p>
              <div className="flex text-[12px] gap-[6px]">
                <div className="flex gap-1 lg:whitespace-nowrap items-center">
                  {" "}
                  <PiMapPinLight /> Show in map{" "}
                </div>
                <div className="flex gap-1 items-center">
                  {" "}
                  <PiStarFill color="#F4B93E" /> 4.8(436){" "}
                </div>
                <div className="flex gap-1  lg:whitespace-nowrap items-center">
                  {" "}
                  <PiBedLight /> King Size room
                </div>
              </div>
            </div>

            <div className="flex w-full lg:items-end flex-col gap-1">
              <span className="font-semibold text-[20px]">123,456.00</span>
              <span className="font-[500] text-sm ">
                Total Price: NGN 560,000
              </span>
              <span className="font-[500] text-sm ">
                1 room x 10 nights incl. taxes
              </span>
            </div>
          </div>
          <div className="h-[1px] w-full bg-cardDetailsBorder"> </div>
          {/* Facilities */}
          <div className="flex flex-col lg:flex-row text-greyText pl-4  py-[14px] pr-10 text-sm font-[500] justify-between">
            <div className="flex  items-center gap-1">
              <span>Facilities:</span>
              <div className="flex items-center">
                <PiSwimmingPoolLight />
                Pool
              </div>
              <div className="flex items-center gap-1">
                <PiWineLight />
                Bar
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center">
              <div className="flex items-center text-[12px] lg:whitespace-nowrap gap-1">
                <PiCalendarBlank />
                Check in :20-09-2024
              </div>
              <div className="flex lg:whitespace-nowrap text-[12px] items-center gap-1">
                <PiCalendarBlank />
                Check out :29-09-2024
              </div>
            </div>
          </div>
          <div className="h-[1px] w-full bg-cardDetailsBorder"> </div>

          {/* Hotel details buttons */}
          <div className="flex justify-between pl-4 pr-12 py-[10px] text-sm font-[500]  ">
            <div className="flex gap-3">
              <button className="text-mainBlue"> Hotel details</button>
              <button className="text-mainBlue">Price details</button>
            </div>

            <button className="text-mainBlue">Edit details</button>
          </div>
        </div>
      </div>

      <div className="bg-[#FBEAE9] min-w-[30px] justify-center items-center flex min-h-full  ">
        <PiXLight color="#9E0A05" />
      </div>
    </div>
  );
};

export default HotelCard;
