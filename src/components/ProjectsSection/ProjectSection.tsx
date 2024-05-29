"use client";
import Project from "./utils/Project";
import NexusPlayImage from "@/../public/photos/porject.png";
import GUSTOCSRImage from "@/../public/photos/gusto-csr.png";
import Link from "next/link";

export default function ProjectSection() {
  return (
    <section className="mx-auto grid grid-cols-2 justify-items-center tablet:grid-flow-cols-2 laptop:grid-cols-3 desktop:grid-cols-3 gap-4">
      <div className=" max-w-[20rem] overflow-hidden  tablet:max-w-[22rem] laptop:max-w-[24rem] desktop:max-w-[25rem]">
        <div className="w-full aspect-[4/3] rounded-2xl bg-[#fcbb15] overflow-hidden flex flex-col justify-center px-[2.3rem]">
          <h1 className="text-4xl text-[#fff] font-bold">
            Showcase of <br /> Our Projects
          </h1>
          <pre className="text-[#fff] mt-2 text-wrap">
            Discover our portfolio of innovative digital projects showcasing our
            expertise in web development, mobile apps, and software solutions."
          </pre>
        </div>
      </div>
      <Project image={NexusPlayImage} title="Nexus Play" link="#" />
      <Project image={GUSTOCSRImage} title="GUSTO CSR Program" link="#" />
      <Project image={NexusPlayImage} title="Nexus Play" link="#" />
      <Project image={GUSTOCSRImage} title="GUSTO CSR Program" link="#" />
      <Project image={NexusPlayImage} title="Nexus Play" link="#" />
    </section>
  );
}
