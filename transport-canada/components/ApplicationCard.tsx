import { PhoneCall } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Props {
  name: string;
  description: string;
  icon?: React.ReactNode;
  link: string;
}

const ApplicationCard = ({ name, description, icon, link }: Props) => {
  return (
    <div className="col-span-4 rounded-lg shadow-md shadow-gray-300 border-l-4 border-black">
      <div className="border border-gray-200 rounded-md">
        <div className="flex justify-between items-center pr-8">
          <h3 className="text-xl font-bold p-4">{name}</h3>
          {icon}
        </div>
        <p className="p-4 line-clamp-4">{description}</p>
        <div className="flex justify-end p-6">
          <Link href={link} className="hover:cursor-pointer">
            <button className="bg-[#39414C] text-white px-3 py-2 rounded-md hover:cursor-pointer">
              View
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ApplicationCard;
