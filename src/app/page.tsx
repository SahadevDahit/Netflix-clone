import React from "react";
import Image from "next/image";
const Page = () => {
  return (
    <>
      {/* Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif */}
      <div className="overflow-hidden">
        <div className="relative w-full h-[110vh] overflow-hidden">
          <div className="bg-black absolute inset-0 z-0 overflow-hidden">
            <Image
              src="/netflix.jpg"
              alt="background image"
              className="w-full h-full object-cover"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div
            className="w-full h-full absolute z-1 "
            style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
          ></div>
          {/* navbar section */}
          <div className="absolute p-5 z-2 w-full flex justify-between overflow-hidden">
            <div className="sm:pl-[5rem]">
              <h1 className="text-red-600  font-bold font-netflix-sans text-4xl ">
                NETFLIX
              </h1>
            </div>
            <div className="sm:pr-[5rem]">
              <button className="p-1 bg-red-500 rounded text-white hover:bg-red-700">
                Sign In
              </button>
            </div>
          </div>

          {/* home page */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-2 text-white text-center overflow-hidden">
            <h1 className="text-4xl font-bold whitespace-nowrap">
              Unlimited movies, TV shows, and more
            </h1>
            <h3 className="text-2xl py-7">Watch anywhere. Cancel anytime.</h3>
            <p className="text-2xl">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="flex items-center justify-center gap-1 py-5">
              <input
                className="rounded round-5 px-5 h-[3.5rem] sm:w-full border border-white"
                type="text"
                placeholder="Email address"
                style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
              />
              <button className="p-5 flex items-center justify-center text-2xl font-bold bg-red-600 rounded h-[3.5rem] whitespace-nowrap">
                Get Started &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full h-[8px]"
        style={{ background: "rgb(35,35,35)" }}
      ></div>
      {/* Another second section */}
      <div className="bg-black w-full h-[25rem] text-white px-5 grid grid-cols-1 sm:grid-cols-2">
        <div className="flex justify-center items-center w-full">
          <div className="w-[70%]">
            <h1 className="text-5xl font-bold py-3 pl-2">Enjoy on your TV</h1>
            <h2 className="text-2xl ">
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </h2>
          </div>
        </div>
        <div className="relative w-[100%] inline-block sm:flex sm:justify-center sm:items-center sm:w-auto">
          <Image
            className="absolute z-0"
            src="/tv.png"
            width="400"
            height="500"
            alt=""
          />
          <video
            className="absolute z-1   w-[18rem] h-[18rem] bottom-[15%] "
            src="video-tv-0819.m4v"
            autoPlay
            playsInline
            muted
            loop
          />
        </div>
      </div>
    </>
  );
};

export default Page;
