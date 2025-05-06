import Title from "@/components/Title";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

const CIDDashboard = () => {
  return (
    <div className="mx-auto container mt-6">
      <div>
        <div className="mb-2 flex gap-2 items-center">
          <Link href="/organizations/sample-organization" className="underline">
            Home
          </Link>
          <ChevronLeft size={15} />
          <Link href="/" className="underline">
            Client Identification Database
          </Link>
        </div>
        <h2 className="text-xl">Dashboard</h2>
        <Title>Client Identification Database (CID)</Title>
        <div className="card">
          <h2 className="text-2xl font-semibold">Hello, John Doe</h2>
          <p>
            Welcome to the Client Identification Database (CID) Application
            dashboard. Easily manage all of your registrations across all of
            your companies in one spot.
          </p>
        </div>
        <div className="mt-6 card ">
          <div className="flex mb-6 items-center justify-between">
            <h2 className="text-2xl font-semibold">My Registrations</h2>
            <button className="button-dark">New CID Registration</button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Service</TableHead>
                <TableHead>Company Registered</TableHead>
                <TableHead>Registration Date</TableHead>
                <TableHead>Expiry Date</TableHead>
                <TableHead>Registration Status</TableHead>
                <TableHead>Last Modified</TableHead>
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
                <TableCell>10/20/2025</TableCell>

                <TableCell className="text-right text-blue-500 underline">
                  View / Modify
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default CIDDashboard;
