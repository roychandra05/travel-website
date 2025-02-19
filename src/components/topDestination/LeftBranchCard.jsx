import { DotOutline } from "@phosphor-icons/react";

const LeftBranchCard = ({ isHover, id, top }) => {
  return (
    <div
      className={`
        ${top === 27 && "top-[27%]"}
        ${top === 54 && "top-[54%]"}
        ${top === 81 && "top-[81%]"}
        ${
          isHover === id
            ? "shadow-[0px_0px_5px_2px_#872341] border-main-secondary"
            : "border-main-text"
        } transition-all duration-300 border absolute ${top} right-1/2 left-0`}
    >
      <DotOutline
        className={`absolute -left-5 -top-4 ${
          isHover === id ? "text-green-600" : "text-main-text"
        } transition-all duration-300`}
        size={32}
        weight="duotone"
      />
    </div>
  );
};
export default LeftBranchCard;
