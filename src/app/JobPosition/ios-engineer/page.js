"use client";
import JobApplicationForm from "@/components/JobApplicationForm/JobApplicationForm";
import JobDetails from "@/components/JobDetails/JobDetails";
import React from "react";

function iOSEngineerPage() {
   const jobInfo = {
      jobTitle: "高级iOS工程师",
      description:
         'iOS 开发经理将负责管理多个开发项目、开发小组以及主要业务线的应用支持功能。该职位将运用专业知识监督全组织系统的开发和实施，指导、激励和培养员工，使其最大限度地发挥个人贡献和团队功能。应用开发高级经理领导一个团队，管理资源需求和分配，监控和提高质量，确保采用 "最佳实践"开发技术。此外，该职位还负责与业务部门合作，开发、测试和实施有助于促进业务改进的应用程序。',
      requirements: [
         "您有领导开发人员团队的经验，是一名经验丰富的专业人士，有能力指导和帮助其他团队成员发展 - 我们会考虑有团队领导或高级经验，并希望在职业发展中实现下一个飞跃的候选人。",
         "您是代码质量的倡导者，拥有使用 SOLID 设计原则进行软件设计的实践经验。",
         "您需要具备很强的沟通能力，因为您需要与其他跨职能团队合作，规划产品和功能的开发与发布。",
         "如果您具备以下条件，那么这将是您的优势 你对 iOS 开发（Objective-C、Shift、XCode、SwiftUI）有很好的了解。",
         "您拥有计算机科学、商务和/或相关专业的学位/文凭。",
         "你是一位大胆而真实的领导者。您热衷于培养和指导员工，使其发挥最大潜能。您曾领导过多样化、高绩效的团队。",
         "你拥护并支持变革。你将不断改进自己的思维和工作方式，以达到最佳状态。",
         "集体成功是你的动力。您知道，合作可以将一个好的想法转化为一个伟大的想法。您深知一个乐于合作、创造共同愿景的包容性团队的力量。",
         "价值观对你很重要。你在工作中展现真实的自我，践行我们的价值观--信任、团队精神和责任感。",
      ],
      opportunities: ["与行业顶尖专家合作", "参与国际会议、研讨会。", "定期内部技术分享和技术培训。", "良好的晋升机会"],
      salaryBenefits:
         "我们努力通过有意义的个性化方式来认可您，包括有竞争力的薪酬、奖励性薪酬、银行福利、健康福利计划、固定福利养老金计划、员工股票购买计划",
   };

   return (
      <>
         <JobDetails {...jobInfo} />
         <span className="mt-8 text-xl font-bold">提交简历</span>
         <JobApplicationForm />
      </>
   );
}

export default iOSEngineerPage;
