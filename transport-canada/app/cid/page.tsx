import InfoMessage from "@/components/InfoMessage";
import Title from "@/components/Title";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const CID = () => {
  return (
    <div className="my-8 mx-auto container">
      <div className="mb-2 flex gap-2 items-center">
        <Link href="/organizations/sample-organization" className="underline">
          My Organization
        </Link>
        <ChevronLeft size={15} />
        <Link href="/" className="underline">
          Client Identification Database
        </Link>
      </div>
      <Title>Client Idenfication Database</Title>
      <InfoMessage>
        <p>Your Organization is currently not registered.</p>
        <p>
          To start a new registration, please select the &apos;Start a
          Registration&apos; button .
        </p>
      </InfoMessage>
      <div className="flex gap-3 items-center">
        <Link href="/organizations/sample-organization" className="underline">
          Back
        </Link>
        <Link href="/cid/new-registration">
          <button className="bg-[#1B6C1C] text-white px-6 py-2 rounded-md">
            Start a Registration
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CID;
