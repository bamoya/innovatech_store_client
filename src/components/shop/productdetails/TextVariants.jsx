import React, { useState } from "react";

const TextVariants = ({ title, values, setPrice }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleChangeVariant = (item) => {
    setSelectedOption(item.value);
    setPrice(item.price);
  };

  return (
    <div className="flex flex-row gap-2 flex-wrap">
      <h1 className="font-semibold text-meduim ">{title} :</h1>
      {values?.map((item) => (
        <label
          className={`border btn   btn-sm  border-gray-400 rounded-md hover:cursor-pointer  hover:bg-neutral hover:text-white  ${
            selectedOption === item.value
              ? " bg-neutral text-white"
              : "bg-white"
          }`}
          onClick={() => handleChangeVariant(item)}
        >
          <input
            type="radio"
            value={item?.value}
            checked={selectedOption === item.value}
            className="hidden"
          />
          {item?.value}
        </label>
      ))}
    </div>
  );
};

export default TextVariants;
