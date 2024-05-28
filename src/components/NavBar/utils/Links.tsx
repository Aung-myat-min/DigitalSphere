"use client";
import Link from "next/link";

export default function Links({ text, to }: { text: string; to: string }) {
  return (
    <Link
      href={to}
      className=" hover:text-primary transition duration-300 ease-in-out text-[1.25rem]"
    >
      {text}
    </Link>
  );
}
