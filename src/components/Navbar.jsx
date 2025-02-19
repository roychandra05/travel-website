import Link from "next/link";
import ComboBox from "./navbar/ComboBox";
import { Lora, Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "500",
});

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center max-[640px]:w-full h-[10vh] md:max-2xl:w-3/4 sm:max-2xl:w-3/4 lg:h-[10vh] md:h-[7vh] left-1/2 -translate-x-1/2 fixed z-50 top-0 bg-opacity-60 border-b-2 border-x-main-secondary border-x-2 bg-black rounded-b-2xl">
      <div className="flex justify-between items-center p-2 h-full w-full">
        <div
          className={`${montserrat.className} max-[640px]:w-[37%] md:text-[1.4em] lg:text-[1.6em] md:w-1/3 sm:w-1/3 w-1/5 max-[640px]:text-[1em] text-base lg:text-lg sm:max-lg:text-lg box-border text-center font-extrabold`}
        >
          <span className={` text-[#00879E]  underline font-extrabold text-[1.1em]`}>B</span>smiley Tour
        </div>
        <div className="flex w-3/4 justify-end items-center gap-2">
          <div
            className={`w-1/3 text-base rounded-lg lg:text-[1.2em] max-[640px]:text-[.9em] sm:max-lg:text-lg box-border`}
          >
            <ComboBox />
          </div>
          <Link
            href={"#booking"}
            className={`py-1 border w-1/3 md:w-1/4 lg:w-1/5 lg:text-[1.2em] text-base rounded-lg max-[640px]:text-[.9em] sm:max-lg:text-lg box-border text-center hover:bg-white hover:text-black transition-all duration-200`}
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
