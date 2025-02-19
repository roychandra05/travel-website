"use client";
import Image from "next/image";
import { useState } from "react";
import DetailCard from "./DetailCard";
import DisableBodyScroll from "../DisableBodyScroll";

const Card = ({ img, alt, title, position, desc }) => {
  const [isAppear, setIsAppear] = useState(false);
  const [loading, setLoading] = useState("true");

  const handleClick = () => {
    setIsAppear((prev) => {
      if (isAppear) {
        return (prev = false);
      } else {
        return (prev = true);
      }
    });
  };

  return (
    <>
      <DisableBodyScroll isOpen={isAppear} />
      <div
        className={`fixed opacity-45 ${
          isAppear ? "z-30 bg-black" : "-z-50"
        }  inset-0 transition-all duration-100`}
        onClick={handleClick}
      ></div>
      <button
        className="border rounded-lg overflow-hidden flex flex-col items-center relative h-80 w-full"
        onClick={handleClick}
      >
        <div className="bg-white h-full w-full bg-cover relative">
          {loading && (
            <div className="w-full h-full bg-zinc-700 animate-pulse" />
          )}
          <Image
            src={`/images/cardImgs/${img}`}
            alt={""}
            fill
            priority
            loading="eager"
            className={`object-cover ${position}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onLoad={() => setLoading((prev) => (prev = false))}
          />
        </div>
        <div
          className={`absolute bottom-0 bg-opacity-60 left-0 right-0 bg-black font-semibold z-10`}
        >
          <h3 className={`text-main-text font-light z-10`}>{title}</h3>
        </div>
        <div className="absolute inset-0 bg-black opacity-20 -z-0"></div>
      </button>
      <DetailCard
        isAppear={isAppear}
        handleClick={handleClick}
        title={title}
        img={"cardImgs/" + img}
        alt={alt}
        position={position}
        desc={desc}
      />
    </>
  );
};
export default Card;
