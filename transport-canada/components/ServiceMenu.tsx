"use client";
import { LayoutDashboard, MapPin } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ServiceMenu = () => {
  const path = usePathname();
  return (
    <div className="">
      <h2 className="text-2xl">NAVIGATION</h2>
      <div className="flex mt-6 gap-2 flex-col pr-8">
        <Link
          href="/cid/dashboard"
          className={`w-full py-2 px-6 flex gap-2 items-center ${
            path === "/cid/dashboard" && "bg-[#39414C] text-white rounded-md"
          } `}
        >
          <LayoutDashboard /> Dashboard
        </Link>
        <Link
          href="/cid/cid-registrations"
          className={`w-full py-2 px-6 flex gap-2 items-center ${
            path === "/cid/cid-registrations" &&
            "bg-[#39414C] text-white rounded-md"
          } `}
        >
          <MapPin />
          CID Registrations
        </Link>
      </div>
    </div>
  );
};

export default ServiceMenu;
