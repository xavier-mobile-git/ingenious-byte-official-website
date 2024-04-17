import React from "react";

function HeroSection() {
  return (
    <div className="flex mt-80 justify-between text-white">
      {/* Hero section content */}
      <div className="flex flex-col w-1/3">
        <div className="flex text-left">
          <span className="text-6xl inline justify-self-start z-40">
            掌握未来
          </span>
        </div>

        <div className="flex justify-end mt-6">
          <span className="text-6xl inline justify-self-end me-6 z-40">
            今日已至
          </span>
        </div>

        <div className="flex mt-12 text-lg z-40">
          {/* IngeniousByte, 将数据洞察转化为您的明日优势 */}
          IngeniousByte, 利用精准数据，开启智能运营的未来，为您的企业成长加速。
        </div>
        <div className="flex mt-12 justify-start">
        <a className="bg-white text-indigo-600 p-3 my-8 w-32 text-center rounded-lg w-30 hover:bg-indigo-600 hover:text-white cursor-pointer transition-all duration-500 active:scale-110">联系我们</a>  
        </div>
        
      </div>
      
      {/* Hero section image */}
      <div className="z-40 select-none">
        <img src="/flat-hero-section.png" />
      </div>
    </div>
  );
}

export default HeroSection;
