import React from "react";
import CompayCard from "./cards/CompayCard";

const Home1 = () => {
  return (
    <div className="flex justify-center w-[100vw] ">
      <div className="flex w-[70%] mt-10 gap-10">
        <div className="flex-[1] flex flex-col gap-4">
          <div className="text-6xl">
            Explore the Investment Opportunities in Startups
          </div>
          <div className="text-xl">
            We help investors to invest in Verified Startups that are poised to
            be the Unicorns of tomorrow
          </div>
          <button className="bg-gradient-to-br from-cyan-500 to-blue-500 text-white p-3 w-[7rem] rounded-md">Get Started</button>
        </div>
        <div className="flex-[1] flex flex-col shadow-xl p-4">
        <CompayCard/>
        <CompayCard/>
        
        </div>
      </div>
    </div>
  );
};

export default Home1;
