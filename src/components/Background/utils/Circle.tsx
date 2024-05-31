import circleStyle from "../CircleStyle.module.css";

export default function Circle({ top, left }: { top: string; left: string }) {
  return (
    <div
      className={`${circleStyle.circle} absolute z-[-1] flex place-items-center`}
      style={{ top: top, left: left }}
    ></div>
  );
}
