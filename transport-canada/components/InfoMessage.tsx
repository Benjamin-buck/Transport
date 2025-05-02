import { Info } from "lucide-react";
import React from "react";

const InfoMessage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex gap-4 my-6 items-center">
      <div className="flex flex-col items-center">
        <div className="bg-[#3799BA] h-[30px] w-[4px] mb-3" />
        <Info size={20} color="#3799BA" />
        <div className="bg-[#3799BA] h-[30px] w-[4px] mt-3" />
      </div>

      <div>{children}</div>
    </div>
  );
};

export default InfoMessage;
