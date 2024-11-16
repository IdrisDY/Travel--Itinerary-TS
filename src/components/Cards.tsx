import Card from "../elements/Card";

const Cards = () => {
  const cardsData = [
    {
      title: "Activities",
      description:
        "Build, personalize, and optimize your itineraries with our trip planner.",
      titleClassName: "text-white",
      buttonClassName: "text-white bg-mainBlue",
      cardClassName: "bg-darkBlue",
      descriptionClassName: "text-white",
    },
    {
      title: "Hotels",
      description:
        "Build, personalize, and optimize your itineraries with our trip planner.",
      titleClassName: "text-black",
      buttonClassName: " bg-mainBlue text-white ",
      cardClassName: "bg-grey3",
      descriptionClassName: "text-black",
    },
    {
      title: "Flights",
      description:
        "Build, personalize, and optimize your itineraries with our trip planner.",
      titleClassName: "text-white",
      buttonClassName: "bg-white text-mainBlue",
      descriptionClassName: "text-white",
      cardClassName: "bg-mainBlue",
    },
  ];

  return (
    <div className="flex items-center gap-1">
      {cardsData.map((item, i) => (
        <Card
          key={i}
          title={item.title}
          description={item.description}
          titleClassName={item.titleClassName}
          buttonClassName={item.buttonClassName}
          descriptionClassName={item.descriptionClassName}
          cardClassName={item.cardClassName}
        />
      ))}
    </div>
  );
};

export default Cards;
