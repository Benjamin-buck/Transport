import ServiceMenu from "@/components/ServiceMenu";
import Title from "@/components/Title";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

const CIDDashboard = () => {
  return (
    <div className="mx-auto container my-12 grid grid-cols-12">
      <div className="col-span-3">
        <ServiceMenu />
      </div>
      <div className="col-span-9">
        <h2 className="text-xl">Registrations</h2>
        <Title>Client Identification Database (CID)</Title>
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
  );
};

export default CIDDashboard;
