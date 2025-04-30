import React from "react";

interface Props {
  children: React.ReactNode;
}
const Title = ({ children }: Props) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold">{children}</h2>
      <div className="w-[60px] h-[4px] mt-2 bg-[#AC0000]" />
    </div>
  );
};

export default Title;
