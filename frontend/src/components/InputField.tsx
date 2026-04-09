import React from "react";

interface InputFieldProps {
  label?: string;
  placeholder?: string;
  type: "text" | "password" | "email" | "date";
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
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
    <div className="flex flex-col gap-2 w-139">
      {label && (
        <label className="text-sm font-medium text-black font-inter">
          {label}
          {required && "*"}
        </label>
      )}
      {label === "Message" ? (
        <textarea
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="bg-white border border-zinc-900 rounded-2xl text-neutral-500 text-lg font-inter px-8 py-4 placeholder:text-neutral-400 focus:outline-none h-47.5 resize-none"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="bg-white border border-zinc-900 rounded-2xl text-neutral-500 text-lg font-inter px-8 py-4 placeholder:text-neutral-400 focus:outline-none"
        />
      )}
    </div>
  );
}
