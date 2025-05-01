import Title from "@/components/Title";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const CID = () => {
  return (
    <div className="my-8 mx-auto container">
      <div className="mb-2 flex gap-2 items-center">
        <Link href="/" className="underline">
          TDG Online
        </Link>
        <ChevronLeft size={15} />
        <Link href="/" className="underline">
          Client Identification Database
        </Link>
      </div>
      <Title>Client Idenfication Database Dashboard</Title>
      <div className="mt-10">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">My Organizations</h2>
          <button className="button-dark">New Organization</button>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Legal Name</TableHead>
              <TableHead>Operating Name</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium underline">0192094</TableCell>
              <TableCell>102849194 Inc.</TableCell>
              <TableCell>Walmart Incorporated.</TableCell>
              <TableCell>100 Main St, Ottawa Ontario, Canada K28 2K4</TableCell>

              <TableCell className="underline">View</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="mt-20">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">My Services</h2>
          <button className="button-dark">New Registration</button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Registration ID</TableHead>
              <TableHead>Operating Name</TableHead>
              <TableHead>Service</TableHead>
              <TableHead>Expiration Date</TableHead>
              <TableHead>Registration Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium underline">0192094</TableCell>
              <TableCell>Walmart Incorporated.</TableCell>
              <TableCell>Client Identification Database</TableCell>
              <TableCell>10/20/2025</TableCell>
              <TableCell>
                <span className="bg-green-200 px-3 border-l-4 py-1 text-green-600 rounded-sm border-green-600">
                  Registered
                </span>
              </TableCell>
              <TableCell className="underline">View</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium underline">0192094</TableCell>
              <TableCell>Walmart Incorporated.</TableCell>
              <TableCell>CANUTEC Registration System</TableCell>
              <TableCell>10/20/2025</TableCell>
              <TableCell>
                <span className="bg-green-200 px-3 border-l-4 py-1 text-green-600 rounded-sm border-green-600">
                  Registered
                </span>
              </TableCell>
              <TableCell className="underline">View</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CID;
