import React from "react";

// const linkTransparentStyle = "py-3 mx-6 font-bold";

function Menu({ isMenuTransparent }) {
  const linkStyle = `py-3 mx-6 font-bold z-50 transition-colors duration-500 ${
    isMenuTransparent ? "text-white" : "black"
  }`;

  console.log("meue: ", isMenuTransparent);
  return (
    <div
      className={`flex p-5 w-full fixed top-0 text-md justify-center z-50 transition-all duration-500 ${
        isMenuTransparent ? "" : "animate-slideDown shadow-lg bg-white"
      }`}
    >
      <a className={linkStyle} href="#">
        公司logo
      </a>

      <a className={linkStyle} href="#">
        主页
      </a>

      <a className={linkStyle} href="#service">
        市场趋势预测
      </a>

      <a className={linkStyle} href="#service">
        实时数据分析
      </a>

      <a className={linkStyle} href="#service">
        个性化推荐系统
      </a>

      <a className={linkStyle} href="#about-us">
        关于我们
      </a>

      <a className={linkStyle} href="#footer">
        联系我们
      </a>

      <a
        className="ms-40 me-6 font-bold text-white bg-indigo-500 rounded-md p-3 hover:bg-indigo-400 transition-colors duration-500"
        href="#"
      >
        获得支持
      </a>
    </div>
  );
}

export default Menu;
