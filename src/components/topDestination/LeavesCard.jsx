import Image from "next/image";
import { useState } from "react";
import DetailCard from "./DetailCard";
import DisableBodyScroll from "../DisableBodyScroll";

const LeavesCard = ({
  isHover,
  topValue,
  title,
  img,
  id,
  alt,
  desc,
  handleHover,
}) => {
  const [loading, setLoading] = useState(true);
  const { topSmXl, top } = topValue;
  const [isAppear, setIsAppear] = useState(false);

  const handleClick = () => {
    if (isAppear) {
      setIsAppear(false);
    } else {
      setIsAppear(true);
    }
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
      <div
        onClick={handleClick}
        onMouseLeave={() => handleHover(id, title)}
        onMouseEnter={() => handleHover(id, title)}
        className={`
          ${topSmXl === 16 && "sm:max-2xl:top-[16%]"}
          ${topSmXl === 43 && "sm:max-2xl:top-[43%]"}
          ${topSmXl === 70 && "sm:max-2xl:top-[70%]"}
          ${topSmXl === 4 && "sm:max-2xl:top-[4%]"}
          ${topSmXl === 31 && "sm:max-2xl:top-[31%]"}
          ${topSmXl === 58 && "sm:max-2xl:top-[58%]"}
          ${top === 21 && "top-[21%]"}
          ${top === 48 && "top-[48%]"}
          ${top === 75 && "top-[75%]"}
          ${top === 9 && "top-[9%]"}
          ${top === 36 && "top-[36%]"}
          ${top === 63 && "top-[63%]"}
          cursor-pointer border w-[90%] h-[12%] sm:max-2xl:h-1/4 absolute rounded-xl overflow-hidden left-[5%]`}
      >
        <div className="h-full w-full relative">
          {loading && (
            <div className="w-full h-full animate-pulse bg-zinc-700" />
          )}
          <Image
            src={`/images/baliHeritage/${img}`}
            alt={title}
            loading="eager"
            fill
            quality={80}
            className="object-cover object-center opacity-85"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onLoad={() => setLoading((prev) => (prev = false))}
          />
          <div
            className={`absolute inset-0 ${
              isHover === id ? "bg-black bg-opacity-40" : "bg-none"
            }  z-0 transition-all duration-300`}
          />
          <div className={`absolute z-20 bottom-0 w-full`}>
            <h3
              className={`${
                isHover === id
                  ? "left-1/2 translate-x-1/2 text-lg max-[640px]:text-[.5em] sm:text-[.6em] md:text-[.8em] lg:text-[1em] xl:text-[1.3em] 2xl:text-[1.3em]"
                  : "translate-x-1 text-xs max-[640px]:text-[.3em] sm:text-[.6em] md:text-[.7m] lg:text-[.8em] xl:text-[.8em] 2xl:text-[1.3em]"
              } transition-all duration-300 w-1/2 text-center`}
            >
              {title}
            </h3>
          </div>
        </div>
      </div>
      <DetailCard
        alt={alt}
        desc={desc}
        img={"baliHeritage/" + img}
        isAppear={isAppear}
        position={"object-center"}
        handleClick={handleClick}
        title={title}
      />
    </>
  );
};
export default LeavesCard;
