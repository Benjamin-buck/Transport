import Title from "@/components/Title";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { organizations, pendingOrganizations } from "@/data/data";
import Link from "next/link";

const page = () => {
  return (
    <div className="mb-10  mx-auto container ">
      <div className="mx-auto container card">
        <div className="flex justify-between items-center">
          <Title>My Organizations</Title>
          {/* <p className="mt-6">Welcome to the Dangerous Goods portal.</p> */}
          <Link href="/organizations/new" className="button-dark">
            New Organization
          </Link>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[150px]">ID</TableHead>
              <TableHead>Legal Name</TableHead>
              <TableHead>Operating Name</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {organizations.map((organization) => (
              <TableRow key={organization.legalName}>
                <TableCell className="font-medium text-blue-400 underline">
                  {organization.id}
                </TableCell>
                <TableCell>{organization.legalName}</TableCell>
                <TableCell>{organization.operatingName}</TableCell>
                <TableCell>{organization.address}</TableCell>
                <TableCell>
                  <span className="bg-green-200 text-green-600 border-l-4 border-green-600 px-4 py-0.5">
                    {organization.status}
                  </span>
                </TableCell>
                <TableCell className="underline text-blue-400">
                  <Link href="/organizations/sample-organization">View</Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="mx-auto container mt-12 card">
        <div className="flex justify-between items-center">
          <Title>Pending Organizations</Title>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[150px]">ID</TableHead>
              <TableHead>Legal Name</TableHead>
              <TableHead>Operating Name</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pendingOrganizations.map((organization) => (
              <TableRow key={organization.legalName}>
                <TableCell className="font-medium text-blue-400 underline">
                  {organization.id}
                </TableCell>
                <TableCell>{organization.legalName}</TableCell>
                <TableCell>{organization.operatingName}</TableCell>
                <TableCell>{organization.address}</TableCell>
                <TableCell>
                  <span className="bg-orange-200 text-orange-600 border-l-4 border-orange-600 px-4 py-0.5">
                    {organization.status}
                  </span>
                </TableCell>
                <TableCell className="underline text-blue-400">
                  <Link href="/organizations/sample-organization">View</Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default page;
