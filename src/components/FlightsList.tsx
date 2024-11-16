import FlightCard from "../elements/FlightCard";

const FlightsList = () => {
  return (
    <div className=" px-2 lg:px-6 flex flex-col pb-[52px] gap-6">
      {Array.from({ length: 2 }).map((item) => {
        return <FlightCard />;
      })}
    </div>
  );
};

export default FlightsList;
