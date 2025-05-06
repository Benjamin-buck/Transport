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
import ApplicationCard from "@/components/ApplicationCard";
import { applicationServices, sampleOrgRegistrations } from "@/data/data";

const SampleOrganization = () => {
  return (
    <div>
      <div className="mx-auto container mt-2">
        <div className="mb-2 flex gap-2 items-center">
          <Link href="/organizations" className="underline">
            Organizations
          </Link>
          <ChevronLeft size={15} />
          <Link href="/" className="underline">
            Organization Dashboard
          </Link>
        </div>
      </div>
      <div className="mb-10 grid grid-cols-12 mx-auto container">
        <div className="col-span-3 ">
          <OrganizationMenu />
        </div>
        <div className=" col-span-9">
          <div className="mt-8">
            <Title>Organization Dashboard</Title>
          </div>

          <div className="card space-y-2">
            <h3 className="card-heading">Walmart Incorporated.</h3>
            <p>
              <span className="font-bold">Legal Name:</span> 102948292 Inc.
            </p>
            <p>
              <span className="font-bold">Operating Name:</span> Walmart
              Incorporated.
            </p>
            <p>
              <span className="font-bold">Address:</span> 1002 Fortitude Lane.
            </p>
            <p>
              <span className="font-bold">Phone:</span> (613) 293 - 2930
            </p>
            <p>
              <span className="font-bold">Website:</span> http://www.walmart.ca/
            </p>
            <div className="flex justify-end underline">
              <Link href="/">Edit</Link>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">
              Organization Registrations
            </h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Service</TableHead>
                  <TableHead>Registration Date</TableHead>
                  <TableHead>Expiry Date</TableHead>
                  <TableHead>Registration Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sampleOrgRegistrations.map((registration) => (
                  <TableRow key={registration.id}>
                    <TableCell>{registration.service}</TableCell>

                    <TableCell>{registration.registrationDate}</TableCell>
                    <TableCell>{registration.expiryDate}</TableCell>
                    <TableCell>
                      <span
                        className={`${
                          registration.status == "Registered" &&
                          "bg-green-200 text-green-600 border-green-600"
                        } ${
                          registration.status == "Under Review" &&
                          "bg-orange-200 text-orange-600 border-orange-600"
                        } px-4 py-1  border-l-4 `}
                      >
                        {registration.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right text-blue-500 underline">
                      <Link href="/cid">View / Modify</Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="mt-12">
            <h2 className="text-2xl font-semibold">Register a New Service</h2>
            <div className="grid grid-cols-12 gap-3 mt-6">
              {applicationServices.map((service) => (
                <ApplicationCard
                  key={service.title}
                  name={service.title}
                  description={service.description}
                  link={service.href}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleOrganization;
