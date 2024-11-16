import React from "react";
import flightIcon from "../assets/flighticon.svg";
import { PiAirplaneLanding, PiAirplaneTakeoffLight } from "react-icons/pi";
const FlightCard = () => {
  return (
    <div className="bg-white">
      <div className="flex flex-col last:border-none">
        <div className="flex">
          {/* icon section */}
          <div className="flex items-center">
            <img src={flightIcon} alt="flight Icon" />

            <div>
              <span className="text-altBlackHeaderText text-[20px] font-semibold mb-1">
                American Airlines
              </span>
              <div className="flex gap-3 items-center ">
                {" "}
                <span className="text-greyText"> AA-829</span> .
                <span className="text-[12px] bg-lighterBlue rounded-[4px] py-1 px-2 text-white">
                  First Class
                </span>{" "}
              </div>
            </div>
            <div></div>
          </div>
          {/* midd */}
          <div className="relative flex  items-center mx-4">
            <div className="flex gap-1 flex-col">
              <span className="text-altBlackHeaderText text-[20px] font-semibold mb-1">
                08:35
              </span>
              <span className="text-greyText font-[500] text-sm">
                {" "}
                Sun,20 Aug
              </span>{" "}
              .
            </div>
            <div>
              {/* duration content */}
              <div className="flex items-center justify-between">
                <PiAirplaneTakeoffLight />
                <span> Duration:1h 45mins</span>
                <PiAirplaneLanding />
              </div>
              {/* the line comp */}
              <div className=" bg-grey3  flex justify-center rounded-[4px] w-1/2  h-2 relative">
                {" "}
                <div className="w-[50%] m-auto h-full rounded-[4px] inset-x-[50%] bg-mainBlue">
                  {" "}
                </div>{" "}
              </div>

              <div className="flex items-center justify-between">
                LOS
                <span> Direct</span>
                SIN
              </div>
            </div>
          </div>
        </div>

        <div></div>
        <div></div>
      </div>
      <div></div>
    </div>
  );
};

export default FlightCard;
