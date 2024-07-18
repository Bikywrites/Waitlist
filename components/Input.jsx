import React from "react";

const Input = ({ label, name, type, placeholder }) => {
  return (
    <div className="flex flex-col gap-1 ">
      <label className="capitalize">{label}</label>
      <input
        type={type}
        id={label}
        name={name}
        placeholder={placeholder}
        className="border border-slate-400 rounded placeholder:text-sm p-3"
        required
      />
    </div>
  );
};

export default Input;
