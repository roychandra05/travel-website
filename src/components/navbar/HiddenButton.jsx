import Link from "next/link";

const HiddenButton = ({ nav, link, isClick, top, setIsClick }) => {
  return (
    <Link
      onClick={() => setIsClick(!isClick)}
      href={`${link}`}
      className={`${
        isClick ? "opacity-100" : "opacity-0"
      } hover:bg-white hover:text-black transition-all duration-200 bg-opacity-60 bg-black absolute -z-10 border top-0 flex-col px-5 justify-center text-center items-center rounded-xl ${
        isClick && top
      } w-[170%] max-[640px]:w-[210%] md:w-[150%] sm:w-[150%] lg:w-[120%] transition-all duration-200`}
    >
      {nav}
    </Link>
  );
};
export default HiddenButton;
