import MainImage from "@/../public/photos/main.png";
import Image from "next/image";
import Button from "../common/Buttons";

export default function MainSection() {
  return (
    <section className="mb-24 grid grid-cols-1 gap-3 items-center justify-items-center px-4 tablet:grid-cols-2 laptop:grid-cols-2 desktop:grid-cols-2 ">
      <div className="main w-full desktop:pl-[5.3rem] laptop:pl-[5rem] tablet:pl-[4.5rem]">
        <h1 className="text-6xl leading-normal font-bold">
          Transforming
          <br /> Digitally,
          <br /> Together
        </h1>
        <div className="flex flex-row gap-4 items-center m-2">
          <Button type="primary" text="Explore" className="w-32" />
          <Button type="secondary" text="Showcase" className="w-32" />
        </div>
      </div>
      <Image src={MainImage} alt="Main Image" height={850} width={850} />
    </section>
  );
}
