"use client";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import bgOne from "../../public/images/heroImgs/bg-1.jpg";
import bgTwo from "../../public/images/heroImgs/bg-2.jpg";
import bgThree from "../../public/images/heroImgs/bg-3.jpg";
import bgFour from "../../public/images/heroImgs/bg-4.jpg";
import Link from "next/link";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weight: "400",
});

const Slider = () => {
  const [indexSlide, setIndexSlide] = useState(0);

  const nextSlide = () => {
    setIndexSlide((prev) => {
      if (indexSlide === 3) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  };
  const prevSlide = () => {
    setIndexSlide((prev) => {
      if (indexSlide === 0) {
        return (prev = 3);
      } else {
        return prev - 1;
      }
    });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndexSlide((prev) => (prev === 3 ? (prev = 0) : prev + 1));
    }, 7000);

    return () => {
      clearInterval(intervalId);
    };
  }, [indexSlide]);

  return (
    <div className="h-full w-full flex flex-col gap-10 relative">
      <div
        className={`w-full h-full flex items-center relative overflow-hidden `}
      >
        <div
          className={`w-full h-full absolute transition-all duration-500`}
          style={{ transform: `translateX(${0 - indexSlide * 100}%)` }}
        >
          <Image
            src={bgOne}
            alt="slide 1"
            fill
            quality={85}
            loading="eager"
            priority
            className="object-cover object-center"
            placeholder="blur"
          />
          <div
            className={`absolute h-auto w-[40%] max-[640px]:w-[45%] top-1/3 left-[5%] translate-y-1/2 p-2 text-2xl max-[640px]:text-[.9em] tracking-widest ${lora.className}`}
          >
            <div className="text-[1.2em] leading-tight">
              Immerse
              <span className="text-[#00879E] bg-main-text rounded-md mx-1 p-1">
                yourself
              </span>
              in timeless beauty
              <span className="text-main-secondary font-bold"> and </span>
              soulful adventures
              <br />
              on
              <span className="text-main-secondary text-[1.2em] font-bold">
                {" "}
                the Island of the Gods
              </span>
            </div>
          </div>
        </div>
        <div
          className={`w-full h-full absolute transition-all duration-500`}
          style={{ transform: `translateX(${100 - indexSlide * 100}%)` }}
        >
          <Image
            src={bgTwo}
            alt="slide 1"
            fill
            quality={85}
            priority
            loading="eager"
            className="object-cover object-center opacity-75"
            placeholder="blur"
          />
          <div className="absolute h-auto w-1/2 max-[640px]:w-[60%] top-1/3 left-[5%] translate-y-1/2 p-2 text-2xl max-[640px]:text-[1em] tracking-widest ">
            <span className="text-[white] font-bold  rounded-md mx-1 text-[2em]">
              <span className="italic">E</span>
              xperience
            </span>
            <br />
            <span className="font-bold text-yellow-500">the </span>
            <span className="text-white font-bold rounded-md mx-1 text-[1.3em]">
              mesmerizing rhythm of
            </span>
            <br />
            <span className="font-bold text-yellow-500">the</span>
            <span className="text-white  rounded-md mx-1 font-bold text-[1.4em]">
              Kecak dance
            </span>
          </div>
        </div>
        <div
          className={`w-full h-full absolute transition-all duration-500`}
          style={{ transform: `translateX(${200 - indexSlide * 100}%)` }}
        >
          <Image
            src={bgThree}
            alt="slide 1"
            fill
            quality={85}
            priority
            loading="eager"
            className="object-cover object-center"
            placeholder="blur"
          />
          <div
            className={`absolute h-auto w-1/2 top-1/3 right-[4%] translate-y-1/2 p-2 text-2xl max-[640px]:text-[1em] tracking-widest flex flex-col items-center gap-2 ${lora.className} font-extrabold`}
          >
            <div className={`text-center uppercase text-[1em] `}>
              Secure your spot today for an unforgettable experience
            </div>
            <Link
              href={"#booking"}
              className="border-4 hover:bg-main-text hover:scale-110 transition-all duration-200 border-black font-semibold px-2 py-1 rounded-md bg-yellow-500 text-black"
            >
              Book now
            </Link>
          </div>
        </div>
        <div
          className={`w-full h-full absolute transition-all duration-500`}
          style={{ transform: `translateX(${300 - indexSlide * 100}%)` }}
        >
          <Image
            src={bgFour}
            alt="slide 1"
            fill
            quality={85}
            priority
            loading="eager"
            className="object-cover object-center"
            placeholder="blur"
          />
        </div>
      </div>
      <div className="h-full flex text-black absolute left-0 hover:text-white bg-transparent hover:bg-black hover:bg-opacity-50 transition-all duration-200">
        <button
          aria-label="Previous Slide"
          onClick={prevSlide}
          className="px-2"
        >
          <CaretLeft size={32} color="#fff" />
        </button>
      </div>
      <div className="h-full flex text-black  hover:text-white bg-transparent absolute right-0 hover:bg-black hover:bg-opacity-50 transition-all duration-200">
        <button aria-label="Next Slide" onClick={nextSlide} className="px-2">
          <CaretRight size={32} color="#fff" />
        </button>
      </div>
      <div className="h-14 bg-[linear-gradient(180deg,_rgba(2,2,5,0.0),_#09122C_55%)] absolute -bottom-4 w-full" />
    </div>
  );
};
export default Slider;
