import React, { useState } from "react";

const JobApplicationForm = () => {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      resume: null,
   });

   const handleChange = (e) => {
      const { name, value, files } = e.target;
      setFormData({
         ...formData,
         [name]: files ? files[0] : value,
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      // 表单提交逻辑
      console.log("Form Data Submitted", formData);
   };

   return (
      <form onSubmit={handleSubmit} className="pt-6 bg-white rounded-lg">
         <div className="mb-4">
            <label className="block text-sm font-medium mt-4" htmlFor="name">
               姓名:
            </label>
            <input
               type="text"
               id="name"
               name="name"
               value={formData.name}
               onChange={handleChange}
               autoComplete="off"
               className="w-full border border-gray-300 p-2 rounded"
            />
         </div>

         <div className="mb-4">
            <label className="block text-sm font-medium mt-6" htmlFor="email">
               邮箱:
            </label>
            <input
               type="email"
               id="email"
               name="email"
               value={formData.email}
               onChange={handleChange}
               autoComplete="off"
               className="w-full border border-gray-300 p-2 rounded"
            />
         </div>

         <div className="mb-4">
            <label className="block text-sm font-medium mt-6" htmlFor="resume">
               简历:
            </label>
            <input type="file" id="resume" name="resume" onChange={handleChange} className="w-full border border-gray-300 p-2 rounded" />
         </div>

         <button type="submit" className="bg-blue-500 mt-6 text-white p-2 me-8 rounded hover:bg-blue-600">
            提交申请
         </button>
         <a href="/JobPosition" className="mt-6 bg-white text-blue-500 border border-blue-500 p-2 rounded hover:bg-blue-50">
            &lt; 返回职位列表
         </a>
      </form>
   );
};

export default JobApplicationForm;
