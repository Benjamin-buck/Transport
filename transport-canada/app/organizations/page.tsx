import ApplicationCard from "@/components/ApplicationCard";
import InfoMessage from "@/components/InfoMessage";
import LeftMenu from "@/components/LeftMenu";
import OrganizationMenu from "@/components/OrganizationMenu";
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
import { organizations } from "@/data/data";
import {
  Building2,
  LayoutDashboard,
  MapPin,
  PhoneCall,
  ShoppingBag,
} from "lucide-react";
import Link from "next/link";

const page = () => {
  return (
    <div className="mb-10  mx-auto container ">
      <div className="mt-8 flex justify-between items-center">
        <Title>My Organizations</Title>
        {/* <p className="mt-6">Welcome to the Dangerous Goods portal.</p> */}
        <Link href="/organizations/new" className="button-dark">
          New Organization
        </Link>
      </div>
      <div>
        <InfoMessage>
          <p>
            The following is a list of all organizations associated to your
            account.
          </p>
        </InfoMessage>
      </div>
      <div className="mx-auto container mt-12">
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
                <TableCell>{organization.status}</TableCell>
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
