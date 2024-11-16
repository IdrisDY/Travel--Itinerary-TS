import React from "react";
import {
  PiBedLight,
  PiCalendarBlank,
  PiCaretCircleDownLight,
  PiCaretCircleUpDownLight,
  PiCaretCircleUpLight,
  PiClockLight,
  PiMapPinLight,
  PiStarFill,
  PiStarLight,
  PiSwimmingPoolLight,
  PiWineLight,
  PiXLight,
} from "react-icons/pi";
import activitybg from "../assets/activitybg.png";
const ActivityCard = () => {
  return (
    <div className="flex justify-between flex-col lg:flex-row bg-white rounded-[4px]">
      <div className="  flex gap-4 lg:gap-0  flex-col lg:flex-row py-6">
        {/* Hotel IMage */}
        <div className="pl-6 w-full lg:w-auto pr-6 lg:pr-0">
          <img
            src={activitybg}
            className="md:min-w-[200px]  w-full lg:w-auto h-full"
            alt="hotel image"
          />
        </div>
        <div className="flex flex-col ">
          {/* Upper texts */}
          <div className=" flex flex-col lg:flex-row gap-4 lg:gap-0 pb-4 justify-between pl-4 pr-10">
            <div className="">
              <h3 className="font-semibold ">The Museum of Modern Art</h3>
              <p className=" w-full text-sm font-[500]">
                Works from Van Gogh to Warhol & beyond plus a sculpture garden,
                2 cafes & The modern restaurant{" "}
              </p>
              <div className="flex text-[12px] gap-[6px]">
                <div className="flex gap-1 whitespace-nowrap items-center">
                  {" "}
                  <PiMapPinLight /> Directions{" "}
                </div>
                <div className="flex gap-1 items-center">
                  {" "}
                  <PiStarFill color="#F4B93E" /> 4.8(436){" "}
                </div>
                <div className="flex gap-1  whitespace-nowrap items-center">
                  {" "}
                  <PiClockLight /> 1 hour
                </div>
              </div>
            </div>

            <div className="flex w-full lg:items-end flex-col gap-1">
              <span className="font-semibold text-[20px]">123,456.00</span>
              <span className="font-[500] text-sm ">
                Total Price: NGN 560,000
              </span>
              <span className="font-[500]  lg:text-right text-sm ">
                1 room x 10 nights incl. taxes
              </span>
            </div>
          </div>
          <div className="h-[1px] w-full bg-cardDetailsBorder"> </div>
          {/* Facilities */}
          <div className="flex flex-col  gap-4 lg:gap-0 lg:flex-row text-greyText pl-4  py-[14px] pr-10 text-[12px] font-[500] justify-between">
            <div className="flex flex-col lg:flex-row  lg:items-center gap-1">
              <span>Whats included: Admission into the state building</span>
              <button className="text-mainBlue text-start">Show more</button>
            </div>

            <div className="flex  gap-1 items-center">
              <div className="flex items-center w-full  lg:justify-start lg:w-auto justify-center bg-lighterBlue rounded-[4px] p-2 text-white text-[12px] whitespace-nowrap gap-1">
                Day 1 -2
              </div>
              <div className="flex whitespace-nowrap flex-col  text-[12px] items-center gap-1">
                <button>
                  {" "}
                  <PiCaretCircleUpLight />{" "}
                </button>
                <button>
                  {" "}
                  <PiCaretCircleDownLight />{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="h-[1px] w-full bg-cardDetailsBorder"> </div>

          {/* Hotel details buttons */}
          <div className="flex flex-col lg:flex-row justify-between pl-4 pr-12 py-[10px] text-sm font-[500]  ">
            <div className="flex gap-3">
              <button className="text-mainBlue"> Activity details</button>
              <button className=" text-start lg:text-center text-mainBlue">
                Price details
              </button>
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

export default ActivityCard;
