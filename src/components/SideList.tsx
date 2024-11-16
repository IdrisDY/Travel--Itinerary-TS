import {
  PiRoadHorizonLight,
  PiBuildingsLight,
  PiAirplaneTilt,
  PiStudentLight,
  PiNewspaperClippingLight,
  PiSuitcaseRollingLight,
  PiFirstAidKitLight,
  PiPackageLight,
  PiCaretUpLight,
  PiCaretDownLight,
} from "react-icons/pi";
import { useState } from "react";

const SideList = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <div className="relative">
      {/* Swipeable Drawer/Sidebar */}
      <div
        className={`fixed top-0 left-0 h-fit lg:pb-12 rounded-[4px] bg-white shadow-lg z-40 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform lg:translate-x-0 lg:relative lg:shadow-none lg:flex lg:flex-col lg:w-64`}
      >
        {/* List of Items */}
        <div className="p-4">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex py-3 pl-3 pr-0 items-center gap-2 text-iconGrey hover:text-blue-500 transition-colors"
              >
                <Icon size={24} />
                <span className="text-left text-sm font-medium text-greyText">
                  {item.label}
                </span>
              </div>
            );
          })}

          <div className="bg-gray-100 mt-[64px] p-4 flex items-center justify-between rounded-lg">
            <div className="flex items-center gap-2">
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg font-medium">
                Go
              </button>
              <span className="text-sm text-gray-600">Personal Account</span>
            </div>

            <div className="flex flex-col items-center justify-center">
              <button className="text-gray-500 hover:text-blue-500">
                <PiCaretUpLight size={18} />
              </button>
              <button className="text-gray-500 hover:text-blue-500">
                <PiCaretDownLight size={18} />
              </button>
            </div>
          </div>
        </div>
        {/* Account Section */}
      </div>

      {/* Dark Overlay for Focus */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Handle for Sidebar */}
      <div
        className="fixed top-1/2 -translate-y-1/2 left-2 h-10 w-10 bg-blue-500 text-white rounded-full flex items-center justify-center z-50 lg:hidden cursor-pointer"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? "×" : "☰"}
      </div>
    </div>
  );
};

export default SideList;
