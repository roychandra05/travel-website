"use client";
import { useState } from "react";
import HiddenButton from "./HiddenButton";
import { CaretUp } from "@phosphor-icons/react";

const ComboBox = () => {
  const [isClick, setIsClick] = useState(false);

  return (
    <div className="h-full w-full">
      <div className="flex flex-col justify-center items-center relative group/destination">
        <button
          onClick={() => setIsClick(!isClick)}
          className={`${
            isClick ? "bg-white text-black" : ""
          } hover:bg-white hover:text-black transition-all duration-200 border px-2 rounded-lg py-1 text-center flex gap-2 items-center justify-center bg-transparent`}
        >
          <h3>Menu</h3>
          <div
            className={`${
              isClick ? "rotate-180" : "rotate-0"
            } transition-all duration-200 `}
          >
            <CaretUp size={18} />
          </div>
        </button>
        <HiddenButton
          isClick={isClick}
          link={"#topDestination"}
          nav={"Top Destination"}
          top={"top-[90px] max-[640px]:top-[64px] md:top-[72px] sm:top-[72px] lg:top-[55px]"}
          setIsClick={setIsClick}
        />
        <HiddenButton
          isClick={isClick}
          link={"#bali-heritage"}
          nav={"Bali Heritage"}
          top={"top-14 max-[640px]:top-[94px] md:top-[107px] sm:top-[107px] lg:top-[85px]"}
          setIsClick={setIsClick}
        />
      </div>
    </div>
  );
};
export default ComboBox;
