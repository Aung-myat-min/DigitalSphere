import MainImage from "@/../public/photos/main.png";
import Image from "next/image";
import Button from "../common/Buttons";

export default function MainSection() {
  return (
    <section>
      <div className="main">
        <h1>
          Transforming
          <br /> Digitally,
          <br /> Together
        </h1>
        <div>
          <Button type="primary" text="Explore" className="w-[7rem]" />
          <Button type="secondary" text="Showcase" className="w-[7rem]" />
        </div>
      </div>
      <Image src={MainImage} alt="Main Image" />
    </section>
  );
}
