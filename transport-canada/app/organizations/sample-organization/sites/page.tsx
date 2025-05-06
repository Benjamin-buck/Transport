import LeftMenu from "@/components/LeftMenu";
import OrganizationMenu from "@/components/OrganizationMenu";
import Title from "@/components/Title";
import { ChevronLeft } from "lucide-react";
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
import { sites } from "@/data/data";

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
            Sites
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
              <Title>Sites</Title>
            </div>
            <Link
              href="/organizations/sample-organization/sites/new"
              className="button-dark"
            >
              New Site
            </Link>
          </div>
          <div className="mt-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Site ID</TableHead>
                  <TableHead>Site Name</TableHead>
                  <TableHead>Address</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sites.map((site) => (
                  <TableRow key={site.siteId}>
                    <TableCell className="font-medium">{site.siteId}</TableCell>
                    <TableCell>{site.siteName}</TableCell>
                    <TableCell>{site.address}</TableCell>
                    <TableCell className="text-right text-blue-500 underline">
                      Edit
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleOrganization;
