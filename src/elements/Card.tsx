import React, { useState } from "react";

type CardProps = {
  title: string;
  description: string;
  titleClassName: string;
  descriptionClassName: string;
  buttonClassName: string;
  cardClassName: string;
};

const Card: React.FC<CardProps> = ({
  title,
  description,
  titleClassName,
  descriptionClassName,
  buttonClassName,
  cardClassName,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setIsFormVisible(false);
  };

  return (
    <>
      {/* Card */}
      <div
        className={`${cardClassName} border rounded-md  py-4 px-[14px]  w-full max-w-sm`}
      >
        {/* Card Title */}
        <span className={`${titleClassName} font-semibold mb-2`}>{title}</span>

        {/* Card Description */}
        <p className={`${descriptionClassName} text-sm mt-2`}>{description}</p>

        {/* Button to Open Modal */}
        <button
          onClick={toggleModal}
          className={` ${buttonClassName} text-sm mt-9 font-medium py-2 px-4 w-full rounded  transition`}
        >
          Show Details
        </button>
      </div>

    </>
  );
};

export default Card;
