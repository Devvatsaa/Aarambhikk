import React from "react";
import news from "../../public/news2.jpg";
const Home3 = () => {
  return (
    <div className="flex justify-center p-10 items-center">
      <div className="w-[80%] flex gap-10">
        <div className="flex-[1] flex flex-col gap-9 justify-center">
          <div className="text-5xl w-[80%] leading-tight">
            Stay Updated with Latest News of Startups
          </div>
          <div className="">
            Aarambhik brings all the latest stories and updates of
            startups straight to you. As an investment guide, we strive to
            deliver content on the latest happening in the startup world. Stay
            informed - join us today.
          </div>
          <button className="bg-black text-white p-3 rounded-md w-[10rem] hover:bg-gray-500">
            See More
          </button>
        </div>
        <div className="flex-[1]">
          <img src={news} alt="" className="w-[40rem]" />
        </div>
      </div>
    </div>
  );
};

export default Home3;
