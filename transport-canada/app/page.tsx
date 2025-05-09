import ApplicationCard from "@/components/ApplicationCard";

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
import { PhoneCall } from "lucide-react";

export default function Home() {
  return (
    <div className="mb-10 mx-auto container ">
      <div className="mt-8 ">
        <Title>Hello, John Doe</Title>
        <p className="mt-6">Welcome to the Dangerous Goods portal.</p>
        <p className="mt-6">
          This portal provides streamlined access to essential services for
          managing your dangerous goods operations. Click “Start a New
          Submission” to begin a new request, or jump directly to your existing
          registrations by selecting a service below
        </p>
      </div>
      <div className="mx-auto container mt-12 grid gap-12 grid-cols-12">
        <div className="col-span-6 card">
          <h2 className="text-2xl font-semibold mb-6">Recent Activites</h2>
          <Table>
            <TableCaption>You have no recent activites</TableCaption>
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
              {/* <TableRow>
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
            <TableRow>
              <TableCell className="font-medium text-blue-400 underline">
                IR-2024-002302930
              </TableCell>
              <TableCell>CANUTEC Registration Service (CRS)</TableCell>
              <TableCell>Walmart Incorporated.</TableCell>
              <TableCell>02/03/2024</TableCell>
              <TableCell>Approved</TableCell>
              <TableCell className="underline text-blue-400">View</TableCell>
            </TableRow> */}
            </TableBody>
          </Table>
        </div>
        <div className="col-span-6 card">
          <h2 className="text-2xl font-semibold mb-6">My Organizations</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">Legal Name</TableHead>
                <TableHead>Operating Name</TableHead>
                <TableHead>Address</TableHead>

                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>1029302 Inc.</TableCell>
                <TableCell>Walmart Incorporated</TableCell>
                <TableCell>100 Main St, Ottawa ON Canada, K8J 7M2</TableCell>
                <TableCell className="underline text-blue-400">View</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
      <div className="mt-[100px]">
        <h2 className="text-2xl font-semibold mb-2 border-b ">TDG Services</h2>
        {/* Grid */}
        <div className="grid grid-cols-12  gap-6 mt-6">
          <ApplicationCard
            name="Client Identification Database Test"
            icon={<PhoneCall />}
            description="If your organization imports, offers for transport, handles, or transports dangerous goods in Canada, you must register with Transport Canada’s Client Identification Database (CID)."
            link="/cid/dashboard"
          />
          {/* <ApplicationCard
            name="Incidents Database"
            icon={<PhoneCall />}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            link="/cid"
          /> */}
          <ApplicationCard
            name="CANUTEC Registration Service"
            icon={<PhoneCall />}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            link="/cid"
          />
        </div>
      </div>
    </div>
  );
}
