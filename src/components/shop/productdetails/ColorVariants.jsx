import React, { useState } from "react";

const ColorVariants = ({ title, values, setPrice }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleChangeVariant = (item) => {
    setSelectedOption(item.value);
    setPrice(item.price);
  };
  const color = "#0000";
  return (
    <div className="flex flex-row gap-2 flex-wrap">
      <h1 className="font-semibold text-meduim ">{title} :</h1>
      {values?.map((item) => (
        <div
          className={`rounded-full p-1 flex justify-center items-center ${
            selectedOption === item.value && "border border-neutral "
          }`}
        >
          <label
            style={{ backgroundColor: item.value }}
            className={`border btn-sm  rounded-full w-8 h-8 text-center inline-flex justify-center items-center hover:cursor-pointer`}
            onClick={() => handleChangeVariant(item)}
          >
            <input
              type="radio"
              value={item?.value}
              checked={selectedOption === item.value}
              className="hidden"
            />
          </label>
        </div>
      ))}
    </div>
  );
};

export default ColorVariants;
