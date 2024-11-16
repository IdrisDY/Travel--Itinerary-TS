import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavHeader from "./components/header";
import SideList from "./components/SideList";
import banner from "./assets/banner.png";
import {
  PiAirplaneInFlightLight,
  PiArrowRight,
  PiCalendarBlank,
  PiDotsThree,
  PiDotsThreeBold,
  PiUserPlus,
} from "react-icons/pi";
import Cards from "./components/Cards";
import FlightsList from "./components/FlightsList";
import FlightCard from "./elements/FlightCard";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavHeader />
      <div className=" mt-[84px] py-[39px] gap-16 pl-[40px] pr-[38px] grid grid-cols-[1fr_5fr] min-h-screen bg-primary">
        <SideList />
        <main className="bg-white p-8 rounded-[4px] ">
          {/* Banner Section */}
          <div>
            <img
              className="rounded-[4px] h-[200px]"
              src={banner}
              alt="banner"
            />
          </div>

          {/* Calendar Text */}
          <div className="flex justify-between items-center">
            <span className="text-darkBrown flex w-fit gap-2 items-center text-sm font-[500] bg-lightYellow rounded-[4px] py-1 px-2 ">
              <PiCalendarBlank /> 21 March 2024 <PiArrowRight /> 21 April 2024
            </span>

            <div className="flex items-center gap-4">
              <button className=" bg-grey3 min-w-[160px] justify-center items-center flex py-2 px-4 rounded-[4px] text-mainBlue">
                <PiUserPlus />
              </button>
              <button>
                <PiDotsThreeBold />
              </button>
            </div>
          </div>

          <div>
            <h1 className="text-[24px] font-semibold leading-[32px] ">
              Bahamas Family Trip
            </h1>
            <p className="text-subgrey flex font-[500]">
              {" "}
              New York,  United States of America{" "}
              <span className=" block mx-2  h-[20px] w-px bg-dividerBg"></span>
              <span>Solo Trip</span>
            </p>
          </div>

          {/* Cards */}
          <Cards />

          <section>
            <div>
              <h2 className="text-altBlackHeaderText text-[20px] leading-[28px] font-semibold">
                Trip Itineraries
              </h2>
              <p className="font-[500] text-sm text-greyText">
                Your trip itineraries are placed here
              </p>
            </div>

            <div className="bg-primary">
              <div className="flex justify-between items-center">
                <button className="flex gap-[4px] font-semibold text-altBlackHeaderText items-center">
                  {" "}
                  <PiAirplaneInFlightLight /> Flights{" "}
                </button>

                <button className="font-semibold bg-white text-sm py-3 px-6 text-mainBlue rounded-4px ">
                  {" "}
                  Add Flight{" "}
                </button>
              </div>

              <FlightsList />
              <FlightCard />
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
