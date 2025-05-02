import Title from "@/components/Title";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="mx-auto container mt-6">
      <Title>New Organization</Title>

      <div className="flex gap-3 items-center mt-6">
        <Link href="/organizations" className="underline">
          Cancel
        </Link>
        <button className="button-dark">Create</button>
      </div>
    </div>
  );
};

export default page;
