import { type } from "os";
import React, { HTMLInputTypeAttribute } from "react";
interface InputRowProps {
  name: string;
  label: string;
  value: string;
  inputType?: HTMLInputTypeAttribute;
  placeholder?: string;
  setValue: (value: string) => void;
}

export const InputRow = ({
  name,
  label,
  value,
  placeholder,
  setValue,
  inputType,
}: InputRowProps) => {
  return (
    <div className="flex flex-col mb-8">
      <label htmlFor={name} className="font-semibold mb-1 text-white">
        {label}
      </label>
      <input
        name={name}
        type={inputType || "text"}
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        className="p-2 border h-10 border-gray-300 rounded-md"
      />
    </div>
  );
};
