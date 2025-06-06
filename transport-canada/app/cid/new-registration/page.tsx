"use client";
import CardField from "@/components/CardField";
import Title from "@/components/Title";
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

import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  CIDRegistrationSites,
  registrationContacts,
} from "@/data/cid-registration";

const NewCIDRegistration = () => {
  const router = useRouter();
  return (
    <div className="container mx-auto mt-8">
      <div className="mb-2 flex gap-2 items-center">
        <Link href="/organizations/sample-organization" className="underline">
          My Organization
        </Link>
        <ChevronLeft size={15} />
        <Link href="/" className="underline">
          CID Registration
        </Link>
      </div>

      <div>
        <div className="mb-6">
          <h3 className="text-2xl">Walmart Inc.</h3>
          <Title>CID Registration</Title>

          {/* CID Registration Information Card */}
          <div className="card space-y-2">
            <h3 className="card-heading">CID Registration Information</h3>
            <CardField label="Registration Number" input="REG-CID-10238018" />
            <CardField label="Expiry Date" input="" />
            <CardField label="Status" input="Draft" />
          </div>

          {/* Contacts */}
          <div className="card space-y-2">
            <h3 className="card-heading">Organization Details</h3>
            <CardField label="Organization Legal Name" input="10293020 Inc." />
            <CardField
              label="Organization Operating Name"
              input="Walmart Inc."
            />
            <CardField label="CRA Business Number" input="102920398" />
            <CardField
              label="Address"
              input="100 Main St, Ottawa ON, Canada K7M 9M2"
            />
            <CardField label="Phone" input="(613) 123-1203" />
            <CardField label="Website" input="https://www.walmart.ca" />
            <div className="flex justify-end">
              <Link href="/" className="underline text-blue-500">
                Edit
              </Link>
            </div>
          </div>

          {/* Organization Details Card */}
          <div className="card space-y-2">
            <h3 className="card-heading">Registration Contacts</h3>
            <div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>First Name</TableHead>
                    <TableHead>Last name</TableHead>
                    <TableHead>Email</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {registrationContacts.map((contact) => (
                    <TableRow key={contact.firstName}>
                      <TableCell>{contact.firstName}</TableCell>
                      <TableCell>{contact.lastName}</TableCell>
                      <TableCell>{contact.email}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="flex justify-end">
              <Link
                href="/cid/new-registration/contacts"
                className="underline text-blue-500"
              >
                Edit
              </Link>
            </div>
          </div>

          {/* Sites Details Card */}
          <div className="card space-y-2">
            <h3 className="card-heading">Sites</h3>
            <div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Site Name</TableHead>
                    <TableHead>Site Address</TableHead>
                    <TableHead>CID Details</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {CIDRegistrationSites.map((site) => (
                    <TableRow key={site.siteName}>
                      <TableCell className="font-medium">
                        {site.siteName}
                      </TableCell>
                      <TableCell>{site.address}</TableCell>
                      <TableCell>
                        <span
                          className={`${
                            site.cidDetails == "Complete"
                              ? "bg-green-200 text-green-600 border-green-600"
                              : "bg-red-200 text-red-600 border-red-600"
                          } border-l-4 px-4 py-0.5`}
                        >
                          {site.cidDetails}
                        </span>
                      </TableCell>
                      <TableCell className="underline">
                        <Link href="/cid/new-registration/hoti-information">
                          Edit
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="flex justify-end">
              <Link
                href="/cid/new-registration/select-sites"
                className="underline text-blue-500"
              >
                Edit
              </Link>
            </div>
          </div>

          {/* Attestation Section */}
          <div className="mt-6 flex gap-2 items-center">
            <Checkbox className="size-[30px]" />
            <p>
              To the best of my knowledge, I attest to the accuracy of the
              information herein regarding my organization, sites, and contacts.
            </p>
          </div>

          <div className="flex gap-2 my-6 items-center">
            <p className="underline" onClick={() => router.back()}>
              Cancel
            </p>
            <button className="button-dark">Complete & Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCIDRegistration;
