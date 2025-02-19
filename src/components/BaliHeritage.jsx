"use client";
import { useState } from "react";
import LeavesCard from "./topDestination/LeavesCard";
import RightBranchCard from "./topDestination/RightBranchCard";
import LeftBranchCard from "./topDestination/LeftBranchCard";
import baliHeritage from "../data/bali-heritage.json";
import { Roboto, Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "500",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

const BaliHeritage = ({ title }) => {
  const [isHover, setIshover] = useState(null);
  const [cardSelect, setCardSelect] = useState("");

  const handleHover = (id, title) => {
    if (id === isHover) {
      setIshover(null);
      setCardSelect(null);
    } else {
      setIshover(id);
      setCardSelect(title);
    }
  };

  return (
    <div className="w-full h-auto group/light">
      <div className="flex w-full gap-2 items-center justify-center py-2">
        <div className="w-1/2 border border-main-secondary group-hover/light:border-main-text group-hover/light:shadow-[0_7px_15px_4px_#fff] rounded-full transition-all duration-200"></div>
        <h2
          className={`${montserrat.className} w-1/6 text-center 1/2 font-bold rounded-md max-[640px]:w-1/4 max-[640px]:text-xs`}
        >
          {title}
        </h2>
        <div className="w-1/2 border border-main-secondary group-hover/light:border-main-text group-hover/light:shadow-[0_7px_15px_4px_#fff] rounded-full transition-all duration-200"></div>
      </div>
      <div className="grid grid-cols-3 h-auto">
        <div className="gap-20 flex flex-col h-full relative">
          <div className={`absolute top-0 h-auto w-[145%] flex flex-col p-2 `}>
            <h3
              className={`${montserrat.className} text-center w-full underline underline-offset-4 decoration-main-secondary decoration-2 max-[640px]:text-[.6em]`}
            >
              Scenic Beauty and Adventure
            </h3>
            <div
              className={`${roboto.className} text-ellipsis h-full w-full font-extralight text-[1em] max-[640px]:text-[.6em] leading-relaxed text-justify`}
            >
              Bali, the Island of the Gods, offers pristine beaches, lush rice
              terraces, and vibrant marine life—ideal for both relaxation and
              adventure. Explore hidden coves and surf its dynamic waves to
              experience the island's natural allure.
            </div>
          </div>
          {baliHeritage.slice(0, 3).map((val, i) => {
            let top = 21 + i * 27;
            let topSmXl = 16 + i * 27;
            return (
              <LeavesCard
                alt={val.alt}
                key={i}
                id={val.id}
                desc={val.desc}
                isHover={isHover}
                img={val.src}
                title={val.title}
                topValue={{ topSmXl, top }}
                handleHover={handleHover}
              />
            );
          })}
        </div>
        <div className=" flex justify-center relative h-[150vh]">
          <div
            className={`${
              isHover
                ? "shadow-[0px_0px_5px_2px_#872341] border-main-secondary"
                : "border-main-text"
            } transition-all duration-300 border absolute top-0 bottom-0 z-20 `}
          />
          <div
            className={`absolute ${
              cardSelect
                ? "w-1/2 px-2 py-4 h-[2%] shadow-[0_0px_15px_7px_#872341] border-2 border-main-secondary"
                : "w-0 h-0 px-0 py-0 shadow-none border-none"
            } -bottom-10 font-semibold bg-white text-black rounded-md transition-all duration-300 overflow-hidden text-center flex flex-col justify-center items-center`}
          >
            {cardSelect}
          </div>
          {baliHeritage.slice(3, 6).map((val, i) => {
            let top = 15 + i * 27;
            return (
              <RightBranchCard
                key={i}
                id={val.id}
                isHover={isHover}
                title={val.title}
                top={top}
              />
            );
          })}
          {baliHeritage.slice(0, 3).map((val, i) => {
            let top = 27 + i * 27;
            return (
              <LeftBranchCard
                key={i}
                id={val.id}
                isHover={isHover}
                title={val.title}
                top={top}
              />
            );
          })}
        </div>
        <div className="gap-20 flex flex-col relative h-[150vh]">
          {baliHeritage.slice(3, 6).map((val, i) => {
            let top = 9 + i * 27;
            let topSmXl = 4 + i * 27;
            return (
              <LeavesCard
                alt={val.alt}
                key={i}
                id={val.id}
                desc={val.desc}
                isHover={isHover}
                img={val.src}
                title={val.title}
                topValue={{ topSmXl, top }}
                handleHover={handleHover}
              />
            );
          })}
          <div className="absolute bottom-0 right-0 h-auto w-[145%] flex flex-col p-2">
            <h3
              className={`${montserrat.className} text-center w-full underline underline-offset-4 decoration-main-secondary decoration-2 max-[640px]:text-[.6em]`}
            >
              Rich Culture and Tradition
            </h3>
            <div
              className={`${roboto.className} text-ellipsis h-full w-full font-extralight text-[1em] leading-relaxed text-justify max-[640px]:text-[.6em]`}
            >
              Bali's deep cultural heritage is reflected in its ancient temples,
              traditional ceremonies, and colorful arts, providing a unique
              spiritual experience. The island's vibrant festivals and community
              spirit beautifully blend age-old customs with modern influences.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BaliHeritage;
