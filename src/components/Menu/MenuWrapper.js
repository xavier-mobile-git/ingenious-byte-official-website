"use client";

import React, { useEffect, useState } from "react";
import Menu from "./Menu";

function MenuWrapper() {
  const handleScroll = () => {
    console.log(window.scrollY);
    if (window.scrollY > 200) {
      setIsMenuTransparent(false);
    } else {
      setIsMenuTransparent(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const [isMenuTransparent, setIsMenuTransparent] = useState(true);

  return <Menu isMenuTransparent={isMenuTransparent} />;
}

export default MenuWrapper;
