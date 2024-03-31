import React from "react";
import Image from "next/image";

const FifthSection = () => {
  return (
    <>
      <div className="w-full min-h-[25rem] bg-black text-white grid grid-cols-1 sm:grid-cols-2 gap-5 justify-center items-center">
        <div className="flex justify-center sm:justify-end">
          <Image width="400" height="400" src="/kids.png" alt="kids " />
        </div>
        <div className="w-[100%] sm:w-[80%] h-full flex justify-start items-center">
          <div className="px-5 sm:px-0">
            <h1 className="text-5xl font-bold pt-2 ">
              Create profiles for kids
            </h1>
            <h2 className="text-2xl py-3">
              Send kids on adventures with their favorite characters in a space
              made just for them—free with your membership.
            </h2>
          </div>
        </div>
      </div>
      <div
        className="w-full h-[8px]"
        style={{ background: "rgb(35,35,35)" }}
      ></div>
    </>
  );
};

export default FifthSection;
