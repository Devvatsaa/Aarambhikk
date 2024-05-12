import React from "react";
import team from "../../public/team4.png";
const Home4 = () => {
  return (
    <div className="flex justify-center p-10 items-center bg-slate-400">
      <div className="w-[80%] flex gap-60">
        <div className="flex-[1] flex flex-col gap-9 justify-center">
          <div className="text-5xl w-[80%] leading-tight">
          Trusted Among Investors
          </div>
          <div className="text-xl">
          BESTVANTAGE INVESTMENTS offers the comprehensive capabilities and deep industry knowledge necessary to help to make the most suitable decision for your investments needs. Want to experience the expertise of BESTVANTAGE INVESTMENTS for yourself? Give us a call today and lets discuss what we can do for you
          </div>
        </div>
        <div className="flex-[1]">
          <img src={team} alt="" className="h-[30rem] object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Home4;
