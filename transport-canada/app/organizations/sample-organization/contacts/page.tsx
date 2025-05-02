import LeftMenu from "@/components/LeftMenu";
import OrganizationMenu from "@/components/OrganizationMenu";
import Title from "@/components/Title";
import { ChevronLeft, User2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
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
              <h3 className="text-lg">Walmart Incorporated.</h3>
              <Title>Contacts</Title>
            </div>
            <button className="button-dark">New Contact</button>
          </div>
          <div className="mt-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>First Name</TableHead>
                  <TableHead>Last NameName</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Portal User</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Benjamin</TableCell>
                  <TableCell>Buck</TableCell>
                  <TableCell>benjamin.buck@tc.gc.ca</TableCell>
                  <TableCell>(613) 266-0360</TableCell>
                  <TableCell>
                    <User2 />
                  </TableCell>
                  <TableCell className="text-right underline">Edit</TableCell>
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
