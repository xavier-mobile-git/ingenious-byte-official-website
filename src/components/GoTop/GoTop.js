"use client";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

function GoTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 913) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      className={`w-12 h-12 z-50 fixed right-8 bottom-8 flex flex-col justify-center rounded-full animate-bounce text-white bg-indigo-500 shadow-lg  hover:bg-indigo-400 transition-all duration-100 ${
        isVisible
          ? "animate-slideDown top-auto translate-y-full"
          : "-top-24 translate-y-full"
      }`}
      href="#"
    >
      <FaArrowUp className="place-self-center" />
    </a>
  );
}

export default GoTop;
