import React from "react";
interface PrimaryButtonProps {
  label: string;
  disabled?: boolean;
  onClick: (e: any) => Promise<void>;
}

export const PrimaryButton = ({
  label,
  onClick,
  disabled,
}: PrimaryButtonProps) => {
  return (
    <button
      disabled={disabled}
      className="disabled:bg-slate-400 disabled:cursor-not-allowed rounded-md px-2 py-2 h-10 bg-red-600 hover:bg-red-500 text-white font-semibold"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
