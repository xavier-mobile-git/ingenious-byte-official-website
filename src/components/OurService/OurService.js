import React from "react";
import OurServiceCard from "./OurServiceCard";
import { TbDeviceAnalytics } from "react-icons/tb";

function OurService() {
  return (
    <div className="flex flex-col justify-center w-full mt-96 pt-32">
      <span className="inline text-orange-400 font-bold text-center">
        WHAT WE PROVIDE
      </span>
      <span className="inline text-3xl font-semi-bold text-center">
        我们的服务
      </span>
      <div className="grid grid-cols-3 gap-4 mt-8">
        <OurServiceCard
          icon={<TbDeviceAnalytics fontSize={50} />}
          title="市场趋势预测"
          content="通过分析历史数据和当前市场动态，预测未来市场发展趋势，帮助企业做出更明智的商业决策。"
          link="#service"
        />

        <OurServiceCard
          icon={<TbDeviceAnalytics size={50} />}
          title="实时数据分析"
          content="通过分析历史数据和当前市场动态，预测未来市场发展趋势，帮助企业做出更明智的商业决策。"
          link="#service"
        />

        <OurServiceCard
          icon={<TbDeviceAnalytics size={50} />}
          title="个性化推荐系统"
          content="通过分析历史数据和当前市场动态，预测未来市场发展趋势，帮助企业做出更明智的商业决策。"
          link="#service"
        />
      </div>
    </div>
  );
}

export default OurService;
