"use client";
import React, { useState } from "react";

function ContactUs() {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      phoneNumber: "",
      companyType: "",
      businessPlatform: "",
      businessIntroduction: "",
      companyWebsite: "",
      annualRevenue: "",
      solution: "",
      discoveryMethod: "",
      otherDiscoveryMethod: "",
   });

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here
      console.log(formData);
   };

   return (
      <>
         <>
            <div className="flex justify-between">
               <img className="w-[50%] h-fit" src="/choose-1.png" />
               <div className="w-[50%] flex flex-col text-center">
                  <span className="text-2xl font-bold">预约咨询</span>
                  <span className="mt-4 indent-8 text-left">
                     我们提供付费的咨询服务。请先填写您及公司的基本信息，完成支付后，会为您跳转到预约窗口与我们的服务专员预约咨询时间。
                  </span>
                  <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                     <input
                        type="text"
                        name="name"
                        placeholder="* 请输入姓名"
                        onChange={handleChange}
                        autoComplete="off"
                        required
                        className="mb-4 p-3 w-full border rounded"
                     />

                     <input
                        type="email"
                        name="email"
                        placeholder="* 请输入Email"
                        onChange={handleChange}
                        required
                        className="mb-4 p-3 w-full border rounded"
                     />

                     <input
                        type="text"
                        name="phoneNumber"
                        placeholder="* 请输入联系电话"
                        onChange={handleChange}
                        autoComplete="off"
                        required
                        className="mb-4 p-3 w-full border rounded"
                     />

                     <input
                        type="text"
                        name="comapnyName"
                        placeholder="* 请输入公司名称"
                        onChange={handleChange}
                        autoComplete="off"
                        required
                        className="mb-4 p-3 w-full border rounded"
                     />

                     <div className="mb-4 flex flex-col">
                        <span className="text-left">您的公司是在美国或加拿大注册的吗？</span>
                        <div className="flex items-center">
                           <span className="mt-4">
                              <label>
                                 <input type="radio" name="companyType" value="Canada" onChange={handleChange} className="mr-2" />
                                 加拿大
                              </label>
                           </span>
                           <span className="mt-4">
                              <label>
                                 <input type="radio" name="companyType" value="America" onChange={handleChange} className="ml-4 mr-2" />
                                 美国
                              </label>
                           </span>
                           <span className="mt-4">
                              <label>
                                 <input type="radio" name="companyType" value="America" onChange={handleChange} className="ml-4 mr-2" />
                                 其他国家
                              </label>
                           </span>
                        </div>
                     </div>

                     <textarea
                        name="businessIntroduction"
                        placeholder="请简述公司业务。"
                        onChange={handleChange}
                        required
                        className="mb-4 p-3 w-full border rounded h-24"
                     />

                     <div className="flex items-center justify-between">
                        <button
                           type="submit"
                           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                           支付并咨询
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         </>
      </>
   );
}

export default ContactUs;
