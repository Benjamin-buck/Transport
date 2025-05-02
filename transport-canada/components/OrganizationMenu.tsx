"use client";
import {
  CircleUser,
  HomeIcon,
  LayoutDashboard,
  MapPin,
  ShoppingBag,
} from "lucide-react";
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
          href="/organizations/sample-organization"
          className={`w-full py-2 px-6 flex gap-2 items-center ${
            path === "/organizations/sample-organization" &&
            "bg-[#39414C] text-white rounded-md"
          } `}
        >
          <LayoutDashboard /> My Organization
        </Link>
        <Link
          href="/organizations/sample-organization/sites"
          className={`w-full py-2 px-6 flex gap-2 items-center ${
            path === "/organizations/sample-organization/sites" &&
            "bg-[#39414C] text-white rounded-md"
          } `}
        >
          <MapPin />
          Sites
        </Link>
        <Link
          href="/organizations/sample-organization/contacts"
          className={`w-full py-2 px-6 flex gap-2 items-center ${
            path === "/organizations/sample-organization/contacts" &&
            "bg-[#39414C] text-white rounded-md"
          } `}
        >
          <CircleUser />
          Contacts
        </Link>
        {/* <Link
          href="/organizations/sample-organization/services"
          className={`w-full py-2 px-6 flex gap-2 items-center ${
            path === "/organizations/sample-organization/services" &&
            "bg-[#39414C] text-white rounded-md"
          } `}
        >
          <ShoppingBag />
          Registered Services
        </Link> */}

        {/* <div className="border-t mt-8">
          <Link
            href="/"
            className={`w-full py-2 px-6 flex gap-2 items-center mt-2`}
          >
            <HomeIcon />
            Home
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default LeftMenu;
