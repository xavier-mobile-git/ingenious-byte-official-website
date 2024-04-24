import React from "react";

const heading2Style = "font-semibold text-xl mt-6";
const listItemStyle = "list-disc list-inside text-lg leading-[2.5rem] mt-6";

const JobDetails = ({ jobTitle, description, requirements, opportunities, salaryBenefits }) => {
   return (
      <div className="pt-6 bg-white rounded-lg">
         <h2 className="text-3xl font-bold mt-6">{jobTitle}</h2>
         <p className="mt-4 text-xl">{description}</p>

         <div>
            <h3 className={heading2Style}>要求:</h3>
            <ul className={listItemStyle}>
               {requirements.map((req, index) => (
                  <li key={index}>{req}</li>
               ))}
            </ul>
         </div>

         <div>
            <h3 className={heading2Style}>我们提供的机会:</h3>
            <ul className={listItemStyle}>
               {opportunities.map((opp, index) => (
                  <li key={index}>{opp}</li>
               ))}
            </ul>
         </div>

         <div>
            <h3 className={heading2Style}>薪资与福利:</h3>
            <p className="text-lg mt-6">{salaryBenefits}</p>
         </div>
      </div>
   );
};

export default JobDetails;
