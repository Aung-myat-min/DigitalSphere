"use client";

import { ReactNode } from "react";
import styles from "../ServiceStyles.module.css";

interface AccordionProps {
  summary: string;
  children: ReactNode;
}

export default function Accordion({ summary, children }: AccordionProps) {
  return (
    <details
      className={`duration-300 leading-8 border-b-2 border-link ${styles.details}`}
    >
      <summary
        className={`${styles.summary} py-6  text-xl font-bold  laptop:text-[3rem] laptop:leading-[4rem] `}
      >
        {summary}
        <span
          className={`${styles.arrow} mr-[1rem] tablet:mr-[1.4rem] laptop:mr-[1.875rem]`}
        >
          {">"}
        </span>
      </summary>
      <div className="py-5">{children}</div>
    </details>
  );
}
