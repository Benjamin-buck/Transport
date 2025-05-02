import ApplicationCard from "@/components/ApplicationCard";
import LeftMenu from "@/components/LeftMenu";
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
    <div className="mb-10 mx-auto container">
      <div className="">
        <div className="mt-8 ">
          <Title>Services</Title>
        </div>

        <div className="container mx-auto mt-12">
          <h2 className="text-2xl font-semibold">All TDG Services</h2>

          {/* Grid */}
          <div className="grid grid-cols-12 mt-6 gap-6">
            <ApplicationCard
              name="Client Identification Database Test"
              icon={<PhoneCall />}
              description="If your organization imports, offers for transport, handles, or transports dangerous goods in Canada, you must register with Transport Canada’s Client Identification Database (CID)."
              link="/cid/new-registration-generic"
            />
            <ApplicationCard
              name="Incidents Database"
              icon={<PhoneCall />}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
              link="/cid"
            />
            <ApplicationCard
              name="CANUTEC Registration Service"
              icon={<PhoneCall />}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
              link="/cid"
            />
          </div>
        </div>

        <div className="mx-auto container mt-12">
          <h2 className="text-2xl font-semibold mb-6">
            My Registered Services
          </h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">Name</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>Organization</TableHead>
                <TableHead>Date Submitted</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium text-blue-400 underline">
                  IR-2024-002302930
                </TableCell>
                <TableCell>Client Registration Database (CID)</TableCell>
                <TableCell>Walmart Incorporated.</TableCell>
                <TableCell>02/03/2024</TableCell>
                <TableCell>Under Review</TableCell>
                <TableCell className="underline text-blue-400">View</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-blue-400 underline">
                  IR-2024-002302930
                </TableCell>
                <TableCell>CANUTEC Registration Service (CRS)</TableCell>
                <TableCell>Walmart Incorporated.</TableCell>
                <TableCell>02/03/2024</TableCell>
                <TableCell>Approved</TableCell>
                <TableCell className="underline text-blue-400">View</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default page;
