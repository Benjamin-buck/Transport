import { PowerCircle, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="mx-auto container flex justify-between items-center max-md:px-6">
        <Image
          src="/logo.png"
          width={500}
          height={100}
          className="w-[300px] py-5"
          alt="Transport Canada logo"
        />
        <Link className="underline" href="/">
          English
        </Link>
      </div>
      <div className="bg-[#39414C] w-full text-white">
        <div className="mx-auto container flex justify-between items-center py-3 max-md:px-6">
          <h1 className="text-2xl font-semibold">TDG Online</h1>
          <div className="flex gap-2">
            <button className="button">
              <Settings size={16} />
              <span className="hidden md:block">Account Settings</span>
            </button>
            <button className="button">
              <PowerCircle size={16} />
              <span className="hidden md:block">Sign Out</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
