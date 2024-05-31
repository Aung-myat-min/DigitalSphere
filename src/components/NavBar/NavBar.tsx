"use client";
import { useEffect, useState } from "react";
import ThemeSwitcher from "../common/ThemeSwitcher";
import Links from "./utils/Links";
import Logo from "./utils/Logo";
import HamburgerIcon from "@/../public/icons/humbarger.svg";
import Image from "next/image";

export default function NavBar() {
  const [navBg, setNavBg] = useState(false);
  const [showNav, setShowNav] = useState(false);

  function handleScroll() {
    if (window.scrollY > 100) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  }

  function navToggle() {
    setShowNav(!showNav);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-[100vw] h-[100px] flex items-center justify-between px-[3vw] fixed top-0 left-0 z-2 ${
        navBg ? "bg-[#d9d9d9] dark:bg-text" : ""
      }`}
    >
      <div className="logo flex flex-row items-center">
        <Logo />
      </div>
      <div className="flex flex-row gap-6 laptop:hidden">
        <Image
          src={HamburgerIcon}
          alt="Hamburger Icon"
          className="cursor-pointer dark:invert"
          onClick={navToggle}
        />
        <ThemeSwitcher />
      </div>
      <div
        className={`${
          showNav ? "flex" : "hidden"
        } transition-transform duration-300 ease-in-out w-full flex-col gap-8 absolute top-[100px] left-0 px-[3vw] py-4 laptop:relative laptop:top-0 laptop:flex laptop:flex-row laptop:w-[40%] laptop:justify-between laptop:items-center ${
          navBg ? "bg-[#d9d9d9] dark:bg-text" : ""
        }`}
      >
        <Links text="Projects" to="#project" />
        <Links text="Services" to="#service" />
        <Links text="About" to="#service" />
        <Links text="Contact" to="#contact" />
        <div className="hidden laptop:inline-block">
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
}
