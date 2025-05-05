import InfoMessage from "@/components/InfoMessage";
import Title from "@/components/Title";
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
import { Checkbox } from "@/components/ui/checkbox";
import { contacts, sites } from "@/data/data";
import Link from "next/link";

const RegistrationContacts = () => {
  return (
    <div className="mx-auto container my-12">
      <div className="flex justify-between items-center">
        <Title>Select Sites</Title>
        <button className="button-dark">Add Site</button>
      </div>

      <InfoMessage>
        Please select all site locations that Handle, Offer for Transport,
        Transport, or Import dangerous goods.
      </InfoMessage>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              <Checkbox />
            </TableHead>
            <TableHead>Site ID</TableHead>
            <TableHead>Site Name</TableHead>
            <TableHead>Address</TableHead>

            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sites.map((site) => (
            <TableRow key={site.siteName}>
              <TableCell className="font-medium">
                <Checkbox />
              </TableCell>
              <TableCell>{site.siteId}</TableCell>
              <TableCell>{site.siteName}</TableCell>
              <TableCell>{site.address}</TableCell>
              <TableCell className="text-right text-blue-500 underline">
                Edit
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Link href="/cid/new-registration" className="button-dark mt-6 w-fit">
        Confirm Sites
      </Link>
    </div>
  );
};

export default RegistrationContacts;
