"use client";
import sun from "@/../public/icons/sun.svg";
import moon from "@/../public/icons/moon.svg";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Loading from "./Loading";
import Image from "next/image";

export default function ThemeSwitcher() {
  const [mounted, SetMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    SetMounted(true);
  }, []);

  if (!mounted) return <Loading />;
  if (theme === "dark") {
    return (
      <button
        onClick={() => setTheme("light")}
        className="hover:bg-primary flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 transition duration-300 ease-in-out cursor-pointer"
      >
        <Image src={moon} alt="Moon Icon" className="invert " />
      </button>
    );
  } else {
    return (
      <button
        onClick={() => setTheme("dark")}
        className="hover:bg-primary flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300 ease-in-out cursor-pointer"
      >
        <Image src={sun} alt="Sun Icon" className="" />
      </button>
    );
  }
}
