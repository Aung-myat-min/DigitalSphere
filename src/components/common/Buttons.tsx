interface ButtonProps {
  text: string;
  type: "primary" | "secondary";
  className?: string;
}
export default function Button({ text, type, className }: ButtonProps) {
  const primary = "bg-primary hover:bg-primary text-white";
  const secondary = "border hover:bg-gray-700";

  return (
    <button
      className={`${
        type === "primary" ? primary : secondary
      } py-2 font-medium rounded-full hover:brightness-110 ${className}`}
    >
      {text}
    </button>
  );
}
