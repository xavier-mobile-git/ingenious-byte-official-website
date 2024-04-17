import React from "react";
import ProgressBar from "../ProgressBar/ProgressBar";

function AboutOurCompany() {
  return (
    <>
      <div id="about-us" className="h-40"></div>
      <div className="flex mb-32">
        <div className="flex flex-col w-1/2 p-4">
          <span className="uppercase text-orange-400 font-bold">
            About Our Company
          </span>
          <span className="mt-8 text-2xl font-bold">
            IngeniousByte是一家专注于利用先进人工智能技术优化企业运营效率的领先科技公司。
          </span>
          <span className="mt-8 leading-relaxed indent-8">
            我们的主营业务包括实时数据分析与预测平台开发，旨在为各行各业提供精确的市场趋势预测、消费者行为分析、业务风险评估以及个性化推荐系统。通过我们的解决方案，企业可以洞察市场动态，优化决策过程，提升客户体验，从而在竞争激烈的市场中保持领先地位。
          </span>
          <div className="mt-8">
            <ProgressBar title={"市场趋势预测"} progress={96} />
          </div>
          <div className="mt-6">
            <ProgressBar title={"实时数据分析准确率"} progress={83} />
          </div>
          <div className="mt-6">
            <ProgressBar title={"个性化推荐系统"} progress={90} />
          </div>
        </div>
        <div className="w-1/2 p-4">
          <img className="rounded-md" src="/about-our-company.png" />
        </div>
      </div>
    </>
  );
}

export default AboutOurCompany;
