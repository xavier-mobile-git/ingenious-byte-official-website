"use client";
import Footer from "@/components/Footer/Footer";
import JobApplicationForm from "@/components/JobApplicationForm/JobApplicationForm";
import JobDetails from "@/components/JobDetails/JobDetails";
import MenuWrapper from "@/components/Menu/MenuWrapper";
import React from "react";

function SeniorMlEngineerPage() {
   const jobInfo = {
      jobTitle: "高级Machine Learning工程师",
      description:
         "负责设计、开发和优化先进的机器学习模型，用于增强产品的数据驱动决策和自动化流程。参与跨部门团队合作，将最新的研究成果转化为实际应用，推动公司技术前沿。",
      requirements: [
         "参与高级机器学习模型的开发和训练，重点是不同数据模式下的 RCNN、LSTM 和 Transformers 等前沿算法。利用 Python、TensorFlow 和 PyTorch 为我们的跨学科项目做出重大贡献。",
         "优化和 MLOps 应用： 协助完善我们的代码库并采用 MLOps 实践，以改进从数据准备到部署和监控等各种模式的机器学习生命周期。掌握 MLOps 平台的专业知识，包括 SageMaker、Databricks 和 Weights & Biases。",
         "与跨职能团队合作，将跨学科的机器学习模型集成到我们的应用生态系统中，这些模型跨越文本和视觉等多种模式。在高层领导的指导下，重点提高性能和可扩展性。",
         "在 RCNN、LSTM 和 Transformers 等深度学习算法方面拥有丰富的知识和经验，尤其是在应用于文本和视觉等各种模式方面。",
         "具有在计算机视觉和 NLP 领域使用机器学习模型的丰富经验，能够通过创新的 ML 解决方案解决复杂的跨学科问题。",
         "熟悉 MLOps 平台，如 AWS SageMaker、Databricks 和 Weights & Biases，能够利用这些工具简化各种数据模式的 ML 生命周期。",
         "拥有按照面向对象编程（OOP）原则和编码最佳实践编写简洁、高效代码的经验，并具备浏览复杂代码库和为复杂代码库做出贡献的能力。",
      ],
      opportunities: ["与行业顶尖专家合作", "参与国际会议、研讨会。", "定期内部技术分享和技术培训。", "良好的晋升机会"],
      salaryBenefits: "高于行业标准的薪资，带薪休假，扩展医疗保健，人寿保险等。",
   };

   return (
      <>
         <JobDetails {...jobInfo} />
         <span className="mt-8 text-xl font-bold">提交简历</span>
         <JobApplicationForm />
      </>
   );
}

export default SeniorMlEngineerPage;
