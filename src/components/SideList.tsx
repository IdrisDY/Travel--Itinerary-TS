import React from "react";
import {
  MdOutlineTravelExplore,
  MdOutlineApartment,
  MdOutlineFlight,
  MdOutlineSchool,
  MdOutlineNewspaper,
  MdOutlineMedicalServices,
  MdOutlineLuggage,
  MdOutlineLocalShipping,
} from "react-icons/md";
import {
  PiRoadHorizonLight,
  PiBuildingsLight,
  PiAirplaneTilt,
  PiStudentLight,
  PiNewspaperClippingLight,
  PiSuitcaseRollingLight,
  PiFirstAidKitLight,
  PiPackageLight,
  PiArrowUp,
  PiArrowDown,
  PiCaretUpDownLight,
  PiCaretDownLight,
  PiCaretUpLight,
} from "react-icons/pi";

const SideList = () => {
  const items = [
    { label: "Activities", icon: PiRoadHorizonLight },
    { label: "Hotels", icon: PiBuildingsLight },
    { label: "Flights", icon: PiAirplaneTilt },
    { label: "Study", icon: PiStudentLight },
    { label: "Visa", icon: PiNewspaperClippingLight },
    { label: "Immigration", icon: PiSuitcaseRollingLight },
    { label: "Medical", icon: PiFirstAidKitLight },
    { label: "Vacation Packages", icon: PiPackageLight },
  ];

  return (
    <div className=" bg-white rounded-[4px] py-[24px] px-[22px] gap-3">
      <div>
        {items.map((item, index) => (
          <div
            key={index}
            className="flex py-[12px] px-[14px] items-center gap-4 text-iconGrey hover:text-blue-500 transition-colors"
          >
            <item.icon size={24} />
            <span className="text-left font-[500] whitespace-nowrap text-greyText">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      <div className="bg-primary mt-16 p-[18px_22px_18px_14px] items-center gap-6 flex rounded-[4px] ">
        <div className="flex items-center gap-2">
          <button className="bg-mainBlue font-[500] text-white p-[13px_14px] rounded-[4px]">
            Go
          </button>
          <span className="text-sm text-greyText whitespace-nowrap">
            Personal Account
          </span>
        </div>

        <div className="flex flex-col items-center justify-center">
          <button>
            {" "}
            <PiCaretUpLight />{" "}
          </button>
          <button>
            {" "}
            <PiCaretDownLight />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideList;
