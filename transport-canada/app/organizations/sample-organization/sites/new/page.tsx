"use client";
import Field from "@/components/Field";
import InfoMessage from "@/components/InfoMessage";
import Title from "@/components/Title";

import Link from "next/link";

import React, { useState } from "react";

const NewSitePage = () => {
  return (
    <div className="mx-auto container mt-6">
      <Title>Add Site</Title>
      <InfoMessage>
        Complete and submit this form for all sites operating within your
        organization
      </InfoMessage>

      <div className="mt-12">
        <h2 className="text-3xl font-bold text-gray-700 border-b pb-2">
          Details
        </h2>

        <div className="w-[50%] mb-6">
          <Field
            required
            label="Site Name"
            placeholder="Enter a name for the site"
          />
        </div>
        <h2 className="text-3xl font-bold text-gray-700 border-b pb-2">
          Address
        </h2>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-4">
            <Field required label="Street 1" />
          </div>
          <div className="col-span-4">
            <Field label="Street 2" />
          </div>
          <div className="col-span-4">
            <Field label="Street 3" />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-6">
            <Field required label="City" />
          </div>
          <div className="col-span-6">
            <Field required label="Province / Territory" />
          </div>
          <div className="col-span-6">
            <Field required label="Country" />
          </div>
          <div className="col-span-6">
            <Field required label="Postal Code" />
          </div>
          <div className="col-span-6">
            <Field label="Phone" />
          </div>
          <div className="col-span-6">
            <Field label="Fax" />
          </div>
        </div>
      </div>
      <div className="flex gap-2 items-center my-6   ">
        <Link
          className="underline"
          href="/organizations/sample-organization/sites"
        >
          Cancel
        </Link>
        <button className="button-dark">Create Site</button>
      </div>
    </div>
  );
};

export default NewSitePage;
