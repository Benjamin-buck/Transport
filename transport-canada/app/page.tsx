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
      <div className="mx-auto container mt-12">
        <h2 className="text-2xl font-semibold mb-6">Recent Activites</h2>
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
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
