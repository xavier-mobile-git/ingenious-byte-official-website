import React from "react";

function Wave() {
  return (
    <div className="absolute left-0 bottom-0 w-full">
      <img
        // className="absolute bottom-0 z-10"
        className="absolute bottom-0 z-10 select-none"
        src="/wave-haikei-1.svg"
      />
      <img
        // className="absolute bottom-0 z-20"
        className="absolute bottom-0 z-20 select-none"
        src="/wave-haikei-2.svg"
      />
      <img
        // className="absolute bottom-0 z-30"
        className="absolute bottom-0 z-30 select-none"
        src="/wave-haikei-3.svg"
      />
      <img
        // className="absolute bottom-0 z-40"
        className="absolute bottom-0 z-40 select-none"
        src="/wave-haikei-4.svg"
      />
    </div>
  );
}

export default Wave;
