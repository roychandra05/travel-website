import Image from "next/image";

const DetailCard = ({
  isAppear,
  handleClick,
  title,
  img,
  alt,
  position,
  desc,
}) => {
  return (
    <div
      className={`fixed border-white bg-black w-[60%] p-2 h-[40%] md:h-[50%] lg:h-[50%] lg:w-[65%] xl:max-2xl:h-[60%] xl:max-2xl:w-[50%] z-30 border-2 rounded-lg ${
        isAppear
          ? " top-1/2 -translate-y-1/2 opacity-100"
          : "-top-1/2 -translate-y-1/2 opacity-0"
      } right-1/2 translate-x-1/2 z-10 transition-all duration-500`}
    >
      <button
        onClick={handleClick}
        className="absolute right-6 text-black font-extrabold top-3"
      >
        X
      </button>
      <div className="w-full h-full grid grid-cols-1 grid-rows-2 lg:max-2xl:grid-cols-3 lg:max-2xl:grid-rows-1 gap-1 box-border">
        <div className="col-span-2 h-full w-full bg-cover relative">
          <Image
            src={`/images/${img}`}
            alt={alt}
            fill
            priority
            loading="eager"
            className={`object-cover ${position} rounded-lg opacity-90`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="rounded-lg w-full h-full overflow-y-auto bg-main-text p-2 flex flex-col gap-2">
          <h3 className="underline decoration-3 text-[80%] md:text-[85%] underline-offset-4 font-bold text-center text-base text-black">
            {title}
          </h3>
          <p className="text-black text-[60%] md:text-[80%]">{desc}</p>
        </div>
      </div>
    </div>
  );
};
export default DetailCard;
