"use client";
import { Building2, LayoutDashboard, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const LeftMenu = () => {
  const path = usePathname();
  return (
    <div className="mt-12 6">
      <h2 className="text-2xl">NAVIGATION</h2>
      <div className="flex mt-6 gap-2 flex-col pr-8">
        <Link
          href="/"
          className={`w-full py-2 px-6 flex gap-2 items-center ${
            path === "/" && "bg-[#39414C] text-white rounded-md"
          } `}
        >
          <LayoutDashboard /> Dashboard
        </Link>
        <Link
          href="/organizations"
          className={`w-full py-2 px-6 flex gap-2 items-center ${
            path === "/organizations" && "bg-[#39414C] text-white rounded-md"
          } `}
        >
          <Building2 />
          Organizations
        </Link>
        <Link
          href="/services"
          className={`w-full py-2 px-6 flex gap-2 items-center ${
            path === "/services" && "bg-[#39414C] text-white rounded-md"
          } `}
        >
          <ShoppingBag />
          Services
        </Link>
      </div>
    </div>
  );
};

export default LeftMenu;
