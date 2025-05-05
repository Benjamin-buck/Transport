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
import { contacts } from "@/data/data";
import Link from "next/link";

const RegistrationContacts = () => {
  return (
    <div className="mx-auto container my-12">
      <div className="flex justify-between items-center">
        <Title>Select Contacts</Title>
        <button className="button-dark">Add Contact</button>
      </div>

      <InfoMessage>
        Please select a minimum of two contacts for your Client Identification
        Database registration.
      </InfoMessage>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">
              <Checkbox />
            </TableHead>
            <TableHead>First Name</TableHead>
            <TableHead>Last Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone Number</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contacts.map((contact) => (
            <TableRow key={contact.firstName}>
              <TableCell className="font-medium">
                <Checkbox />
              </TableCell>
              <TableCell>{contact.firstName}</TableCell>
              <TableCell>{contact.lastName}</TableCell>
              <TableCell>{contact.email}</TableCell>
              <TableCell>{contact.phone}</TableCell>
              <TableCell className="text-right text-blue-500 underline">
                Edit
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Link href="/cid/new-registration" className="button-dark mt-6 w-fit">
        Confirm Contacts
      </Link>
    </div>
  );
};

export default RegistrationContacts;
