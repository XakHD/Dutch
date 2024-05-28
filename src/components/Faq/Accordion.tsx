"use client";
import { useState } from "react";
import { Faq } from "@/types/faq";

const plusIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1025_508)">
      <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" fill="currentColor" />
    </g>
    <defs>
      <clipPath id="clip0_1025_508">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const minusIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1025_479)">
      <rect x="5" y="11" width="14" height="2" fill="currentColor" />
    </g>
    <defs>
      <clipPath id="clip0_1025_479">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const Accordion = ({ faqData }: { faqData: Faq[] }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index: any) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <>
      {faqData.map((faq, index) => (
        <div
          key={index}
          className="mb-8 w-full rounded-sm bg-white shadow-three duration-300 last-of-type:mb-0 hover:shadow-one dark:bg-gray-dark dark:shadow-two dark:hover:shadow-gray-dark"
        >
          <div
            className={`flex cursor-pointer items-center justify-between px-6 py-[22px] ${
              index === activeIndex
                ? "text-black dark:text-white"
                : "text-body-color dark:text-body-color-dark"
            }`}
            onClick={() => handleClick(index)}
          >
            <h2 className={`text-base font-medium`}>{faq.ques}</h2>

            <span>{index === activeIndex ? minusIcon : plusIcon}</span>
          </div>
          <div
            className={`grid text-base text-body-color dark:text-body-color-dark`}
            style={{
              gridTemplateRows: `${index === activeIndex ? "1fr" : "0fr"}`,
              transition: "grid-template-rows 300ms",
            }}
          >
            <div className={`overflow-hidden transition-all duration-300`}>
              <div className="p-6 pt-1">{faq.ans}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Accordion;
