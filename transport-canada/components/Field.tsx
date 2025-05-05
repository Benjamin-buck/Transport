import React from "react";

interface Props {
  label: string;
  placeholder?: string;
  required?: boolean;
}

const Field = ({ label, placeholder, required }: Props) => {
  return (
    <div className="flex flex-col w-full mt-4">
      <label htmlFor="" className="font-bold">
        {label} {required && <span className="text-red-500">(Required)</span>}
      </label>
      <input
        type="text"
        className="border mt-2 px-4 py-1 rounded-md"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Field;
