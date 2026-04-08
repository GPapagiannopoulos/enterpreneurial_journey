import React from "react";

interface InputFieldProps {
  label?: string;
  placeholder?: string;
  type: "text" | "password" | "email" | "date";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export default function InputField({
  label,
  placeholder,
  type,
  value,
  onChange,
  required = false,
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label className="text-sm font-semibold text-gray-700">{label}</label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="bg-neutral-100 border rounded-[40px] text-neutral-500 text-xl font-raleway px-9.5 py-3.5"
      />
    </div>
  );
}
