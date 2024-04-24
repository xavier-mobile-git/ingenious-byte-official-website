import React from "react";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import MenuWrapper from "@/components/Menu/MenuWrapper";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
   title: "IngeniousByte - 提高业务效率的先进人工智能解决方案",
   description: "IngeniousByte 提供尖端的人工智能分析技术，以推动业务增长。了解我们在预测建模、消费者行为分析和运营效率优化方面的服务。",
   icons: {
      icon: "/favicon.ico", // /public path
   },
};

function JobPositionLayout({ children }) {
   return (
      <html lang="en" className="scroll-smooth">
         <head>
            <link rel="icon" href="/favicon.ico" sizes="any" />
         </head>
         <body className={inter.className}>
            <div className="flex flex-col justify-center">
               {/* <div className="full-page flex flex-col justify-center"> */}
               <MenuWrapper />
               <div className="justify-center h-[24rem] bg-[url('/page-title-bg-3.jpg')] bg-cover -ms-52 ">
                  <div className="container flex flex-col h-max">
                     <div className="mt-44 flex justify-center">
                        <span className="text-white text-3xl text-center">职业发展</span>
                     </div>
                     <div className="flex justify-center mt-6">
                        <span className="text-white text-lg hover:text-indigo-400 transition-all duration-500">
                           <a href="/">首页</a>
                        </span>
                        <span className="mx-2 text-white text-lg">-</span>
                        <span className="text-white text-lg hover:text-indigo-400 transition-all duration-500">
                           <a href="/JobPosition">职业发展</a>
                        </span>
                     </div>
                  </div>
               </div>
               <div className="container flex flex-col h-max p-16 mb-16">
                  <img className="rounded-lg mb-8" src="/recruitment.jpg" />
                  {children}
               </div>
               <Footer />
            </div>
         </body>
      </html>
   );
}

export default JobPositionLayout;
