import InfoMessage from "@/components/InfoMessage";
import Title from "@/components/Title";
import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const HOTIInformation = () => {
  return (
    <div className="my-12 container mx-auto ">
      <h2 className="text-lg">Dangerous Goods Information</h2>
      <Title>Barrhaven Walmart</Title>
      <InfoMessage>
        Please specify the following information regarding Dangerous Goods in
        use at this location.
      </InfoMessage>

      <div>
        <h2 className="text-2xl font-semibold border-b pb-2">TDG Activity</h2>
        <p className="font-bold pt-6">
          Do you handle, offer for transort, transport, or import dangerous
          goods at this site?
        </p>
        <RadioGroup defaultValue="option-one" className="mt-6">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="option-one" />
            <Label htmlFor="option-one" className="text-lg">
              Yes
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="option-one" />
            <Label htmlFor="option-one" className="text-lg">
              No
            </Label>
          </div>
        </RadioGroup>

        <p className="font-bold pt-6">
          Please select all activities that apply. At least one activity must be
          selected.
        </p>
        <div className="flex gap-2 items-center mt-6">
          <Checkbox className="size-6" />
          <p>Handle</p>
        </div>
        <div className="flex gap-2 items-center mt-6">
          <Checkbox className="size-6" />
          <p>Offer for Transport</p>
        </div>
        <div className="flex gap-2 items-center mt-6">
          <Checkbox className="size-6" />
          <p>Transport</p>
        </div>
        <div className="flex gap-2 items-center mt-6">
          <Checkbox className="size-6" />
          <p>Import</p>
        </div>

        <h2 className="text-2xl font-semibold border-b pb-2 mt-12">
          Modes of Transportation
        </h2>

        <p className="font-bold pt-6">
          Please select all modes of transportation that apply. At least one
          activity must be selected.
        </p>
        <div className="flex gap-2 items-center mt-6">
          <Checkbox className="size-6" />
          <p>Road</p>
        </div>
        <div className="flex gap-2 items-center mt-6">
          <Checkbox className="size-6" />
          <p>Rail</p>
        </div>
        <div className="flex gap-2 items-center mt-6">
          <Checkbox className="size-6" />
          <p>Air</p>
        </div>
        <div className="flex gap-2 items-center mt-6">
          <Checkbox className="size-6" />
          <p>Marine</p>
        </div>

        <div className="flex justify-between items-center border-b pb-2 mt-6">
          <h2 className="text-2xl font-semibold mt-6">Classes</h2>
          <button className="button-dark">Add Class</button>
        </div>

        <p className="font-bold pt-6">
          Please select all classes that are Handled, Offered for Transport,
          Transported, or Imported at this site.
        </p>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Primary Class</TableHead>
              <TableHead>Compatability Group</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">5.2</TableCell>
              <TableCell>-</TableCell>
              <TableCell className="text-right underline text-blue-500">
                Remove
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <div className="flex gap-3 items-center mt-6 ">
          <Link
            href="/cid/new-registration"
            className="underline text-blue-500"
          >
            Cancel
          </Link>
          <Link href="/cid/new-registration" className="button-dark  w-fit">
            Complete
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HOTIInformation;
