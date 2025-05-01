import LeftMenu from "@/components/LeftMenu";
import OrganizationMenu from "@/components/OrganizationMenu";
import Title from "@/components/Title";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const SampleOrganization = () => {
  return (
    <div>
      <div className="mx-auto container mt-2">
        <div className="mb-2 flex gap-2 items-center">
          <Link href="/" className="underline">
            TDG Online
          </Link>
          <ChevronLeft size={15} />
          <Link href="/" className="underline">
            Client Identification Database
          </Link>
        </div>
      </div>
      <div className="mb-10 grid grid-cols-12 mx-auto container">
        <div className="col-span-3 ">
          <OrganizationMenu />
        </div>
        <div className=" col-span-9">
          <div className="mt-8">
            <h3 className="text-lg">Organization Dashboard</h3>
            <Title>Walmart Incorporated.</Title>
          </div>

          <div className="bg-gray-100 px-6 py-8 mt-6 shadow rounded-md">
            <p>
              <span className="font-bold">Legal Name:</span> 102948292 Inc.
            </p>
            <p>
              <span className="font-bold">Operating Name:</span> Walmart
              Incorporated.
            </p>
            <p>
              <span className="font-bold">Address:</span> 1002 Fortitude Lane.
            </p>
            <p>
              <span className="font-bold">Phone:</span> (613) 293 - 2930
            </p>
            <p>
              <span className="font-bold">Website:</span> http://www.walmart.ca/
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleOrganization;
