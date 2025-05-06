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
        <h2 className="text-xl">Dashboard</h2>
        <Title>Client Identification Database (CID)</Title>
        <div className="card">
          <h2 className="text-2xl font-semibold">Hello, John Doe</h2>
          <p>
            Welcome to the Client Identification Database (CID) Application
            dashboard. Easily manage all of your registrations across all of
            your companies in one spot.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-x-6">
          <div className="card col-span-6">
            <h2 className="text-xl font-semibold">Latest Activity</h2>
          </div>
          <div className="card col-span-6">
            <h2 className="text-xl font-semibold">Reminders</h2>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CIDDashboard;
