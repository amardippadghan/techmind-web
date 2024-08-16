import React from "react";
import { heroimg } from "../utils";

const Hero = () => {
  return (
    <section className="w-full  relative nav-height ">
      <div className="    flex     ">
        <div className="flex  flex-col place-content-center gap-20  ">
          <div className="flex  flex-col   gap-3 ">
            <h1 className="text-purple-700 text-xl">
              WELCOME TECHMINDS ONLINE COURSES
            </h1>
            <h1 className="text-slate-400 text-5xl font-semibold">
              Achieving Your Dreams Through Education
            </h1>
            <h1 className="text-slate-900 text-[15px] ">
              We are experienced in educationl platform and skilled strategies
              for the success of our online learning.
            </h1>
          </div>
          <div className="bg-purple-500 rounded-full max-w-[200px] flex place-content-center">
            <button className="p-4 text-xl font-sans ">Find Courses</button>
          </div>
        </div>
        <div className="">
          <img src={heroimg} alt="image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
