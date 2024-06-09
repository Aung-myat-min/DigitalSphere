"use client";
interface InputProps {
  labelText: string;
  name: string;
  id: string;
  placeholder: string;
  required?: boolean;
  type: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  labelText,
  name,
  id,
  required,
  type,
  value,
  placeholder,
  onChange = () => {},
}: InputProps) {
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor={id} className="text-[16px]">
        {labelText} {required ? "*" : "(Optional)"}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className="bg-inputBg focus:bg-[#fff] focus:border-primary font-medium text-[22px] rounded-2xl py-3 px-4 h-[75px] dark:text-[#000]"
      />
    </div>
  );
}
