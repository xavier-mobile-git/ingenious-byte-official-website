import React from "react";
import Divider from "../Divider/Divider";
import { FaRegCopyright } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const listStyle = "mt-2 text-white";

const categoryStyle = "font-bold mb-4 leading-relaxed";

const ulStyle = "mt-3";

function Footer() {
   return (
      // <div id="footer" className="bg-[#032b4d] bg-[url('/dot-bg.png')]">
      <div id="footer" className="bg-[#032b4d] bg-[url('/dot-bg.png')] bg-blend-soft-light">
         <div
         // className="bg-[url('/dot-bg.png')] bg-opacity-5 bg-cover"
         // style={{
         //   backgroundImage:
         //     "linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('/dot-bg.png')",
         // }}
         >
            <div className="container text-white py-16 ">
               <section className="flex justify-between px-8">
                  {/* 提示订阅信息 */}
                  <div className="flex flex-col">
                     <span className="inline-block text-xl my-4">订阅我们的最新消息</span>
                     <span className="inline-block text-base">我们提供内容丰富的每月技术通讯 - 请查看</span>
                  </div>
                  {/* 订阅Email框 */}
                  <div className="flex py-8">
                     <input className="rounded-s-lg px-4 py-2 w-[32rem] text-black outline-none focus:border-0 " type="text" />
                     <button className="bg-indigo-500 px-4 py-4 w-36 rounded-e-lg hover:bg-indigo-400 transition-all duration-200">现在订阅！</button>
                  </div>
               </section>
            </div>
            {/* Divider */}
            <Divider />

            {/* Site Map */}
            <div className="text-white p-10">
               <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div>
                     <h2 className="text-xl font-bold mb-4 leading-relaxed">IngeniousByte</h2>
                     <p className="leading-relaxed">我们致力于提供顶尖的IT解决方案，让创新科技成为推动企业发展的动力。</p>
                  </div>
                  <div>
                     <h3 className={categoryStyle}>我们的服务</h3>
                     <Divider />
                     <ul className={ulStyle}>
                        <li className={listStyle}>市场趋势预测</li>
                        <li className={listStyle}>实时数据分析</li>
                        <li className={listStyle}>个性化推荐系统</li>
                     </ul>
                  </div>
                  <div>
                     <h3 className={categoryStyle}>快速链接</h3>
                     <Divider />
                     <ul className={ulStyle}>
                        <li className={listStyle}>
                           <a href="/#consultation" className="hover:text-indigo-400 hover:underline hover:underline-offset-4">
                              预约咨询
                           </a>
                        </li>
                        <li className={listStyle}>
                           <a href="/JobPosition" className="hover:text-indigo-400 hover:underline hover:underline-offset-4">
                              职业发展
                           </a>
                        </li>
                     </ul>
                  </div>
                  <div>
                     <h3 className={categoryStyle}>联系方式</h3>
                     <Divider />
                     <ul className={ulStyle}>
                        {/* <li>Phone: +1 647-701-1778</li> */}
                        <li>
                           <div>
                              <MdOutlineEmail className="inline-block me-2" size={20} /> Email
                           </div>
                           <div className="mt-2">
                              <a href="mailto:info@ingeniousbyte.com">info@ingeniousbyte.com</a>
                           </div>
                        </li>
                        {/* <li>Address: 526 Melrose Street, Water Mill, 11976 New York</li> */}
                     </ul>
                  </div>
               </div>
            </div>
            <Divider />
            <div className="container text-white py-16">
               <div className="flex justify-between">
                  <span>
                     <FaRegCopyright className="inline-block me-2" />
                     2024 IngeniousByte - All Rights Reserved.
                  </span>
                  <span>Terms & Conditions | Privacy Policy</span>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Footer;
