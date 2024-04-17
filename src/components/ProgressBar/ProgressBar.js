import React from "react";

function ProgressBar({ title, progress }) {
  const validProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <div className="font-bold text-base mt-4">{title}</div>
        <div className="font-bold text-base mt-4 me-0">{progress}%</div>
      </div>

      <div className="">
        <div className="mt-2 z-0 bg-indigo-200 w-full h-2 rounded-2xl">
          <div
            className={`mt-2 z-10 bg-indigo-400 h-2 rounded-2xl`}
            style={{
              width: `${validProgress}%`,
            }}
          ></div>
        </div>
      </div>

      <>
        <></>
      </>
    </div>
  );
}

export default ProgressBar;
