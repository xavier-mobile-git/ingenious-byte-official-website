import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function OurServiceCard({ icon, title, content, link }) {
  return (
    <label>
      <div className="group flex flex-col h-full w-full shadow-xl p-10 rounded-lg hover:-translate-y-2 transition-all duration-700">
        <span className="transition-all duration-200 text-[#FF561D]">
          {icon}
        </span>
        <div className="mt-8 mb-4 text-xl font-semibold">{title}</div>
        <div className="leading-relaxed">{content}</div>
        <div className="mt-8 mb-4">
          <a className="text-indigo-600 cursor-pointer" href={link}>
            <FaArrowRightLong className="inline-block me-4" />
            Read More
          </a>
        </div>
      </div>
    </label>
  );
}

export default OurServiceCard;
