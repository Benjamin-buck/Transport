import ApplicationCard from "@/components/ApplicationCard";
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
    <div className="mb-10 grid grid-cols-12 mx-auto container ">
      <div className="col-span-3 ">
        <LeftMenu />
      </div>
      <div className="col-span-9 px-6 ">
        <div className="mt-8 flex justify-between items-center">
          <Title>My Organizations</Title>
          {/* <p className="mt-6">Welcome to the Dangerous Goods portal.</p> */}
          <button className="button-dark">New Organization</button>
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
              <TableRow>
                <TableCell className="font-medium text-blue-400 underline">
                  1029302
                </TableCell>
                <TableCell>10293829 Inc.</TableCell>
                <TableCell>Omega Shipping Inc.</TableCell>
                <TableCell>209 Main St, Ottawa ON Canada K7K 2M5</TableCell>
                <TableCell>Under Review</TableCell>
                <TableCell className="underline text-blue-400">
                  <Link href="/organizations/sample-organization">View</Link>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default page;
