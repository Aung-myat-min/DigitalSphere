"use client";
import LightLogo from "@/../public/icons/digital-sphere.svg";
import DarkLogo from "@/../public/icons/digital-sphere.svg";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  const { theme, setTheme } = useTheme();
  return (
    <Link href="/" className="flex items-center gap-1">
      <Image
        src={theme === "light" ? LightLogo : DarkLogo}
        alt="Digital Sphere Logo"
        width={60}
        height={60}
      />
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-200">
        Digital Sphere
      </h1>
    </Link>
  );
}
