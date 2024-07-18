import React from "react";

const Select = ({ label, name, options }) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="" className="capitalize">
        {label}
      </label>
      <select
        className="border border-slate-400 rounded p-3"
        id={label}
        name={name}
      >
        {options.map((option, index) => {
          return (
            <option
              className="bg-white text-black capitalize"
              value={option}
              key={index}
            >
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
