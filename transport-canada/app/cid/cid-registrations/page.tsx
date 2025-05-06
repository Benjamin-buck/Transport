import ServiceMenu from "@/components/ServiceMenu";
import Title from "@/components/Title";
import React from "react";

const CIDDashboard = () => {
  return (
    <div className="mx-auto container my-12 grid grid-cols-12">
      <div className="col-span-3">
        <ServiceMenu />
      </div>
      <div className="col-span-9">
        <h2 className="text-xl">Registrations</h2>
        <Title>Client Identification Database (CID)</Title>
      </div>
    </div>
  );
};

export default CIDDashboard;
