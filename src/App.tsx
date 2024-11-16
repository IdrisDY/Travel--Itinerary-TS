import NavHeader from "./components/header";
import SideList from "./components/SideList";
import banner from "./assets/banner.png";
import {
  PiAirplaneInFlightLight,
  PiArrowRight,
  PiCalendarBlank,
  PiDotsThreeBold,
  PiUserPlus,
} from "react-icons/pi";
import Cards from "./components/Cards";
import FlightsList from "./components/FlightsList";
import HotelsList from "./components/HotelsList";
import ActivityList from "./components/ActivityList";
function App() {

  return (
    <>
      <NavHeader />
      <div className=" mt-[84px] py-[39px] gap-16 md:pl-[40px] md:pr-[38px] flex flex-col  lg:grid grid-cols-[.5fr_6fr] min-h-screen bg-primary">
        <SideList />
        <main className="bg-white lg:p-8 px-2  rounded-[4px] ">
          {/* Banner Section */}
          <div>
            <img
              className="rounded-[4px] h-[150px] lg:h-[180px]"
              src={banner}
              alt="banner"
            />
          </div>

          {/* Calendar Text */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 mt-5 justify-between lg:items-center">
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

          <div className="mt-1">
            <h1 className="text-[24px] font-semibold leading-[32px] ">
              Bahamas Family Trip
            </h1>
            <p className="text-subgrey mt-1 flex flex-col lg:flex-row font-[500]">
              {" "}
              New York,  United States of America{" "}
              <span className=" block mx-2  h-[20px] w-[2px] bg-dividerBg"></span>
              <span>Solo Trip</span>
            </p>
          </div>

          {/* Cards */}
          <Cards />

          <section className="mt-[90px]">
            <div className="mb-7">
              <h2 className="text-altBlackHeaderText text-[20px] leading-[28px] font-semibold">
                Trip Itineraries
              </h2>
              <p className="font-[500] mt-[2px] text-sm text-greyText">
                Your trip itineraries are placed here
              </p>
            </div>

            <div className="bg-primary">
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between px-6 pt-4  mb-6 items-center">
                <button className="flex gap-[4px] font-semibold text-altBlackHeaderText items-center">
                  {" "}
                  <PiAirplaneInFlightLight /> Flights{" "}
                </button>

                <button className="font-semibold bg-white w-full lg:w-auto text-sm py-3 px-6 text-mainBlue rounded-[4px] ">
                  {" "}
                  Add Flight{" "}
                </button>
              </div>

              <FlightsList />
            </div>
            <HotelsList />
            <ActivityList />
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
