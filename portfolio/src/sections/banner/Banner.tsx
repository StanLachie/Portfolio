import React from "react";

const Banner = () => {
  return (
    <div className="max-w-screen h-96 py-80">
      <div className="flex flex-col justify-center items-center h-full">
        <div className="relative right-56">
          <span className="text-3xl text-violet-600 font-bold">
            Hey, my name is:
          </span>
          <div className="mb-2 text-5xl font-bold">
            <span className="text-neutral-900">Lachlan </span>
            <span className="text-neutral-900 italic">// </span>
            <span className="text-violet-600">{"<"}</span>
            <span className="text-neutral-800">StanLachie </span>
            <span className="text-violet-600">{"/>"}</span>
          </div>
          <div className="flex max-w-3xl h-16  items-center text-xl font-bold">
            <div className="w-3 h-full ml-1 mr-2 bg-violet-600"></div>
            <span className="text-neutral-700">
              I'm a software developer with over 4 years of personal experience
              building web applications with React & other web based frameworks.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
