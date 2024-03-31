import React from "react";
import Image from "next/image";
const ThirdSection = () => {
  return (
    <>
      <div className="bg-black w-full min-h-[30rem] text-white px-5 grid grid-cols-1 sm:grid-cols-2">
        <div className="flex justify-end items-center w-[100%] ">
          <div className="relative">
            <Image
              className=""
              width="550"
              height="150"
              src="/mobile-0819.jpg"
              alt="mobile image"
            />
            <div className="bg-black rounded-lg p-3 flex justify-evenly items-center border border-white w-[55%] absolute z-1 bottom-[9%] left-[22%]">
              <Image
                className=""
                src="/boxshot.png"
                width="50"
                height="50"
                alt="mobile image"
              />
              <div className="pl-3">
                <h1 className="text-white font-bold">Stranger Things</h1>
                <h3 className="text-blue">Downloading...</h3>
              </div>
              <div>
                <Image
                  src="/download-icon.gif"
                  width="50"
                  height="50"
                  alt="Loading image............."
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full sm:w-[80%] py-5">
          <div className="flex flex-col justify-center items-center ">
            <h1 className="text-5xl font-bold">
              Download your shows to watch offline
            </h1>
            <h2 className="text-2xl">
              Save your favorites easily and always have something to watch.
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

export default ThirdSection;
