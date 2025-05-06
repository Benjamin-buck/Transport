import OrganizationMenu from "@/components/OrganizationMenu";
import Title from "@/components/Title";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
          <div className="mt-8 flex justify-between items-center">
            <div>
              <h3 className="text-lg">Registered Services</h3>
              <Title>Walmart Incorporated.</Title>
            </div>
            <button className="button-dark">New Registration</button>
          </div>
          <div className="mt-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Service</TableHead>
                  <TableHead>Company Registered</TableHead>
                  <TableHead>Registration Date</TableHead>
                  <TableHead>Expiry Date</TableHead>
                  <TableHead>Registration Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">001920</TableCell>
                  <TableCell>Walmart Inc.</TableCell>
                  <TableCell>10/20/2024</TableCell>
                  <TableCell>10/20/2025</TableCell>
                  <TableCell>
                    <span className="bg-green-200 px-4 py-1 text-green-600 border-l-4 border-green-600">
                      Registered
                    </span>
                  </TableCell>
                  <TableCell className="text-right text-blue-500 underline">
                    View / Modify
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleOrganization;
