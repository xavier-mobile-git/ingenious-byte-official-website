import React from "react";

const marginStyle = "mt-12";

function JobPositionPage() {
   return (
      <>
         <div className={marginStyle}>
            <span href="/JobPosition/senior-ml-engineer" className="text-2xl font-bold">
               目前开放的职位招聘：
            </span>
         </div>
         <div className={marginStyle}>
            <a href="/JobPosition/senior-ml-engineer" className="text-2xl hover:text-indigo-600 transition-all duration-500">
               高级Machine Learning工程师
            </a>
         </div>
         {/* <div className={marginStyle}>
            <a href="/JobPosition/backend-engineer" className="text-2xl hover:text-indigo-600 transition-all duration-500">
               后端工程师
            </a>
         </div> */}
         <div className={marginStyle}>
            <a href="/JobPosition/ios-engineer" className="text-2xl hover:text-indigo-600 transition-all duration-500">
               高级iOS工程师
            </a>
         </div>
      </>
   );
}

export default JobPositionPage;
