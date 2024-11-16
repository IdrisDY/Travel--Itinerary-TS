import ActivityCard from "../elements/ActivityCard";
import { PiRoadHorizonLight } from "react-icons/pi";

const ActivityList = () => {
  return (
    <div className="bg-mainBlue px-6 py-6 mt-4">
      <div className="flex justify-between px-6 pt-4  mb-6 items-center">
        <button className="flex gap-[4px] font-semibold text-white">
          {" "}
          <PiRoadHorizonLight color="white" /> Hotels{" "}
        </button>

        <button className="font-semibold bg-white text-sm py-3 px-6 text-mainBlue rounded-4px ">
          {" "}
          Add Activities{" "}
        </button>
      </div>

      <div className="flex flex-col gap-6">
        {Array.from({ length: 3 }).map((item) => {
          return <ActivityCard />;
        })}
      </div>
    </div>
  );
};

export default ActivityList;
