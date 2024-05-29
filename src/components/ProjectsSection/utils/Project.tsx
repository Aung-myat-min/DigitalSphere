"use client";
import Link from "next/link";
import LongRightArrow from "@/../public/icons/arrow-long-right.svg";
import Image, { StaticImageData } from "next/image";

interface ProjectProps {
  title: string;
  image: StaticImageData;
  link: string;
}

export default function Project({ title, image, link }: ProjectProps) {
  return (
    <div className=" max-w-[20rem] overflow-hidden  tablet:max-w-[22rem] laptop:max-w-[24rem] desktop:max-w-[25rem]">
      <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          className="object-cover w-full h-full"
          quality={100}
        />
      </div>
      <div className="flex flex-row items-center justify-between px-3 mt-2">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold">{title}</h2>
        <Link
          href={link}
          className="flex flex-row text-link items-center gap-1 hover:text-text group"
        >
          Details{" "}
          <Image
            src={LongRightArrow}
            alt="click here"
            className="invert-[46%] sepia-[9%] saturate-[1198%] hue-rotate-[2deg] brightness-[96%] contrast-[85%] w-4 h-4 group-hover:w-5 group-hover:h-5 transition-all duration-300 ease-in-out"
          />
        </Link>
      </div>
    </div>
  );
}
