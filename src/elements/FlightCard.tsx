import flightIcon from "../assets/flighticon.svg";
import {
  PiAirplaneLanding,
  PiSuitcaseRollingLight,
  PiAirplaneTakeoffLight,
  PiFilmSlateLight,
  PiForkKnifeLight,
  PiUsbLight,
  PiXLight,
} from "react-icons/pi";
const FlightCard = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-white rounded-[4px]">
      <div className="   ">
        <div className="flex flex-col  py-6 pl-6 pr-12 ">
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-0 justify-between">
            {/* icon section */}
            <div className="flex gap-2 items-center">
              <img src={flightIcon} alt="flight Icon" />

              <div className="flex flex-col gap-1">
                <span className="text-altBlackHeaderText whitespace-nowrap text-[18px] font-semibold mb-1">
                  American Airlines
                </span>
                <div className="flex gap-1 items-center ">
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
            <div className=" flex flex-col lg:flex-row gap-4  items-center ">
              <div className="flex gap-1  justify-center flex-col">
                <span className="text-altBlackHeaderText text-[18px] font-semibold mb-1">
                  08:35
                </span>
                <span className="text-greyText whitespace-nowrap font-[500] text-[12px]">
                  {" "}
                  Sun,20 Aug
                </span>{" "}
              </div>
              <div className="flex flex-col gap-3">
                {/* duration content */}
                <div className="flex items-center justify-between">
                  <PiAirplaneTakeoffLight />
                  <span className="text-sm"> Duration:1h 45mins</span>
                  <PiAirplaneLanding />
                </div>
                {/* the line comp */}
                <div className=" bg-grey3 min-w-[200px] flex justify-center rounded-[4px] w-1/2  h-2 relative">
                  {" "}
                  <div className="w-[50%] m-auto h-full rounded-[4px] inset-x-[50%] bg-mainBlue">
                    {" "}
                  </div>{" "}
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-semibold">LOS</span>
                  <span> Direct</span>
                  <span className="font-semibold">SIN</span>
                </div>
              </div>
              <div className="flex gap-1 justify-center flex-col">
                <span className="text-altBlackHeaderText text-[18px] font-semibold mb-1">
                  09:55
                </span>
                <span className="text-greyText font-[500] whitespace-nowrap text-[12px]">
                  {" "}
                  Sun,20 Aug
                </span>{" "}
              </div>
            </div>

            <div className="flex justify-center lg:justify-start">
              <span></span>{" "}
              <span className="font-semibold  whitespace-nowrap text-[20px] ">
                {" "}
                123, 450.00
              </span>
            </div>
          </div>
        </div>
        <div className="h-[1px] w-full bg-cardDetailsBorder"> </div>
        {/* Facilities */}
        <div className="py-6 flex flex-wrap pl-6 pr-12">
          <div className="flex text-sm text-greyText gap-2">
            {/* Facilities Label */}
            <p className="font-semibold">Facilities:</p>
            {/* Facilities List */}
            <div className="flex font-semibold text-sm flex-wrap  gap-2">
              <span className="flex text-flightCardIconColor font-semibold items-center gap-2">
                <PiSuitcaseRollingLight />
                <span className="text-greyText">
                  Baggage: 20kg, Cabin Baggage: 8kg
                </span>
              </span>
              <span className="flex text-flightCardIconColor items-center gap-2">
                <PiFilmSlateLight />
                <span className="text-greyText">In-flight Entertainment</span>
              </span>
              <span className="flex text-flightCardIconColor items-center gap-2">
                <PiForkKnifeLight />
                <span className="text-greyText">In-flight Meal</span>
              </span>
              <span className="flex text-flightCardIconColor items-center gap-2">
                <PiUsbLight />
                <span className="text-greyText">USB Port</span>
              </span>
            </div>
          </div>
        </div>
        <div className="h-[1px] w-full bg-cardDetailsBorder"> </div>
        {/* Flight and price details button */}
        <div className="flex justify-between pl-6 pr-12 py-6 text-sm font-[500]  ">
          <div className="flex gap-3">
            <button className="text-mainBlue"> Flight details</button>
            <button className="text-mainBlue">Price details</button>
          </div>

          <button className="text-mainBlue">Edit details</button>
        </div>
      </div>
      <div className="bg-[#FBEAE9] min-w-[30px] justify-center  lg:min-h-full  items-center flex min-h-[50px]  ">
        <PiXLight color="#9E0A05" />
      </div>
    </div>
  );
};

export default FlightCard;
