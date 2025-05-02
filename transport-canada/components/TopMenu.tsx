import { topMenu } from "@/data/data";
import Link from "next/link";
import React from "react";

const TopMenu = () => {
  return (
    <div className="bg-[#E1E4E7]">
      <div className="mx-auto container flex">
        {topMenu.map(({ href, label }) => (
          <div
            key={label}
            className="px-4 py-2 border-x-1 border-gray-300 w-fit font-semibold text-lg"
          >
            <Link href={href}>{label}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopMenu;
