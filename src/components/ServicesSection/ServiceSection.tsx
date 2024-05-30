import Image from "next/image";
import Accordion from "./utils/Accordion";
import ServicesImg from "@/../public/photos/services.png";
import Button from "../common/Buttons";

export default function ServiceSection() {
  return (
    <section className="p-6 laptop:p-12 desktop:p-14">
      <h1 className="text-2xl font-bold inline-block relative pb-[5px] before:content-[''] before:absolute before:w-4/6 before:h-[5px] before:bg-primary before:left-0 before:bottom-0">
        Services
      </h1>
      <div className="mt-8 mb-[2rem] flex flex-cols tablet:flex-row laptop:mb-[6rem] justify-between items-center gap-8">
        <h1 className="text-3xl  tablet:text-4xl laptop:text-[64px] laptop:leading-[5rem] font-bold">
          What <span className="text-primary">Services</span> <br /> We’re
          Offering
        </h1>
        <p className="max-w-[660px] leading-relaxed text-[16px]">
          At DigitalSphere, we provide a diverse range of digital services to
          elevate your online presence and drive business growth. From logo
          design to web development and mobile app design, we offer tailored
          solutions to meet your unique needs and goals. Let us help you unlock
          the full potential of your digital journey.
        </p>
      </div>

      {/* Accordion Starts */}
      <Accordion summary="UI/UX Design">
        <div className="flex flex-col gap-8 items-center justify-around mx-auto laptop:w-[80%] laptop:flex-row ">
          <Image
            src={ServicesImg}
            alt="UI/UX Design"
            width={474}
            height={355}
            className="rounded-2xl"
          />
          <div className="flex flex-col gap-4  justify-center">
            <p>
              Unlock the potential of your online presence with our expert
              website development service. We specialize in crafting tailored,
              user-friendly websites that captivate your audience and drive
              results. From sleek designs to seamless functionality, trust us to
              elevate your digital presence and propel your business forward.
            </p>
            <Button text="Contact" type="primary" className="w-28" />
          </div>
        </div>
      </Accordion>
      <Accordion summary="Graphic Design">
        <div className="flex flex-col gap-8 items-center justify-around mx-auto laptop:w-[80%] laptop:flex-row ">
          <Image
            src={ServicesImg}
            alt="Graphic Design"
            width={474}
            height={355}
            className="rounded-2xl"
          />
          <div className="flex flex-col gap-4  justify-center">
            <p>
              Unlock the potential of your online presence with our expert
              website development service. We specialize in crafting tailored,
              user-friendly websites that captivate your audience and drive
              results. From sleek designs to seamless functionality, trust us to
              elevate your digital presence and propel your business forward.
            </p>
            <Button text="Contact" type="primary" className="w-28" />
          </div>
        </div>
      </Accordion>
      <Accordion summary="Website Development">
        <div className="flex flex-col gap-8 items-center justify-around mx-auto laptop:w-[80%] laptop:flex-row ">
          <Image
            src={ServicesImg}
            alt="Website Development"
            width={474}
            height={355}
            className="rounded-2xl"
          />
          <div className="flex flex-col gap-4  justify-center">
            <p>
              Unlock the potential of your online presence with our expert
              website development service. We specialize in crafting tailored,
              user-friendly websites that captivate your audience and drive
              results. From sleek designs to seamless functionality, trust us to
              elevate your digital presence and propel your business forward.
            </p>
            <Button text="Contact" type="primary" className="w-28" />
          </div>
        </div>
      </Accordion>
      <Accordion summary="Software Development">
        <div className="flex flex-col gap-8 items-center justify-around mx-auto laptop:w-[80%] laptop:flex-row ">
          <Image
            src={ServicesImg}
            alt="Software Development"
            width={474}
            height={355}
            className="rounded-2xl"
          />
          <div className="flex flex-col gap-4  justify-center">
            <p>
              Unlock the potential of your online presence with our expert
              website development service. We specialize in crafting tailored,
              user-friendly websites that captivate your audience and drive
              results. From sleek designs to seamless functionality, trust us to
              elevate your digital presence and propel your business forward.
            </p>
            <Button text="Contact" type="primary" className="w-28" />
          </div>
        </div>
      </Accordion>
    </section>
  );
}
