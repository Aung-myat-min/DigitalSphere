"use client";
import MainSection from "./MainSection/MainSection";
import ProjectSection from "./ProjectsSection/ProjectSection";
import ServiceSection from "./ServicesSection/ServiceSection";

export default function SectionContainer() {
  return (
    <div>
      <MainSection />
      <ProjectSection />
      <ServiceSection />
    </div>
  );
}
