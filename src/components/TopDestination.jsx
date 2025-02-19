import Card from "./topDestination/Card";
import topDestination from "../data/topDestination.json";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "500",
});

const TopDestination = ({ title }) => {
  return (
    <div className="w-full h-auto group/light flex flex-col items-center">
      <div className="flex w-full gap-2 items-center justify-center py-2">
        <div className="w-1/2 border border-main-secondary group-hover/light:border-main-text group-hover/light:shadow-[0_7px_15px_4px_#fff] rounded-full transition-all duration-200"></div>
        <h2
          className={`${montserrat.className} w-1/6 text-center 1/2 font-bold rounded-md max-[640px]:w-1/2 max-[640px]:text-xs`}
        >
          {title}
        </h2>
        <div className="w-1/2 border border-main-secondary group-hover/light:border-main-text group-hover/light:shadow-[0_7px_15px_4px_#fff] rounded-full transition-all duration-200"></div>
      </div>
      <div className="grid gird-cols-1 max-[640px]:grid-cols-1 max-[640px]:w-3/4 w-full sm:max-lg:grid-cols-2 lg:max-2xl:grid-cols-4 h-auto gap-5 items-center justify-center">
        {topDestination.map((data, i) => {
          return (
            <Card
              key={i}
              id={i}
              title={data.title}
              alt={data.alt}
              img={data.img}
              position={data.position}
              desc={data.desc}
            />
          );
        })}
      </div>
    </div>
  );
};
export default TopDestination;
