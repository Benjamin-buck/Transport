import Title from "@/components/Title";

import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { organizations } from "@/data/data";

const CID = () => {
  return (
    <div className="my-8 mx-auto container">
      <div className="mb-2 flex gap-2 items-center">
        <Link href="/organizations/sample-organization" className="underline">
          My Services
        </Link>
        <ChevronLeft size={15} />
        <Link href="/" className="underline">
          Client Identification Database
        </Link>
      </div>
      <Title>Client Idenfication Database</Title>

      <div className="my-6">
        <h3 className="text-2xl font-semibold ">Select An Organization</h3>
        <p>
          Please select the organization for the CID Registration. Don't have an
          organization?{" "}
          <span className="text-blue-500 underline">Click here</span> to create
          one.
        </p>
        <div className="mt-3">
          <Select>
            <SelectTrigger className="w-[400px]">
              <SelectValue placeholder="Select an organization" />
            </SelectTrigger>
            <SelectContent>
              {organizations.map((org) => (
                <SelectItem key={org.operatingName} value={org.operatingName}>
                  {org.operatingName}
                </SelectItem>
              ))}

              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <Link href="/organizations/sample-organization" className="underline">
          Back
        </Link>
        <Link href="/cid/new-registration">
          <button className="bg-[#1B6C1C] text-white px-6 py-2 rounded-md">
            Start a Registration
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CID;
