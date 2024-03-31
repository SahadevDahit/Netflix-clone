import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <div className="bg-black w-full sm:h-[30rem] text-white px-5 grid grid-cols-1 sm:grid-cols-2">
        <div className="flex justify-center items-center w-full">
          <div className="w-[70%]">
            <h1 className="text-5xl font-bold py-1 sm:py-3 sm:pl-2">
              Enjoy on your TV
            </h1>
            <h2 className="text-2xl">
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </h2>
          </div>
        </div>
        <div className="relative w-full h-full grid grid-cols-1 sm:grid-cols-2 justify-center items-center">
          <figure className="sm:absolute z-2 w-[70%]">
            <Image className="" src="/tv.png" width={450} height={400} alt="" />
          </figure>
          <video
            className="absolute z-1 w-[22rem] h-[10rem] sm:w-[27rem] sm:h-[12.2rem] left-[1%] pb-3 "
            src="video-tv-0819.m4v"
            autoPlay
            playsInline
            muted
            loop
          />
        </div>
      </div>
      <div
        className="w-full h-[8px]"
        style={{ background: "rgb(35,35,35)" }}
      ></div>
    </>
  );
};

export default Page;
