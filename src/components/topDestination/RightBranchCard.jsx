import { DotOutline } from "@phosphor-icons/react";

const RightBranchCard = ({ isHover, top, id }) => {
  return (
    <div
      className={`
        ${top === 15 && "top-[15%]"}
        ${top === 42 && "top-[42%]"}
        ${top === 69 && "top-[69%]"}
         ${
           isHover === id
             ? "shadow-[0px_0px_5px_2px_#872341] border-main-secondary"
             : "border-main-text"
         } transition-all duration-300  border absolute right-0 left-1/2`}
    >
      <DotOutline
        className={`absolute -right-5 -top-4 ${
          isHover === id ? "text-green-600" : "text-main-text"
        } transition-all duration-300`}
        size={32}
        weight="duotone"
      />
    </div>
  );
};
export default RightBranchCard;
