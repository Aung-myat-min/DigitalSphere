import Circle from "./utils/Circle";

export default function Background() {
  return (
    <div
      className="absolute w-full h-full top-0 left-0 overflow-x-hidden"
      style={{ zIndex: "-1" }}
    >
      <Circle top={"408.67px"} left={"200px"} />
      <Circle top={"72px"} left={"896px"} />
      <Circle top={"800px"} left={"972px"} />

      <Circle top={"1617.67px"} left={"236px"} />
      <Circle top={"1245px"} left={"1200px"} />
      <Circle top={"1920px"} left={"1283.4px"} />

      <Circle top={"2735.67px"} left={"114px"} />
      <Circle top={"2363px"} left={"746px"} />
      <Circle top={"3037px"} left={"823px"} />

      <Circle top={"3845px"} left={"201px"} />
    </div>
  );
}
