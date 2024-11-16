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

  const toggleForm = () => setIsFormVisible(!isFormVisible);

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

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
            {/* Close Button */}
            <button
              onClick={toggleModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>

            {/* Modal Content */}
            <h2 className="text-lg font-bold mb-4">Details for {title}</h2>
            <p className="text-gray-600 mb-6">{description}</p>

            {/* Button to Show Form */}
            <button
              onClick={toggleForm}
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            >
              {isFormVisible ? "Hide Form" : "Add New Item"}
            </button>

            {/* Form */}
            {isFormVisible && (
              <form className="mt-4 space-y-4">
                <div>
                  <label htmlFor="item-name" className="block text-gray-700">
                    Item Name
                  </label>
                  <input
                    type="text"
                    id="item-name"
                    className="border rounded w-full py-2 px-3 mt-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Enter item name"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 w-full rounded hover:bg-blue-600"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
