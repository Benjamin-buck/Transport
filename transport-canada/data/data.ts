export const topMenu = [
  { href: "/", label: "Home" },
  { href: "/organizations", label: "My Organizations" },
  // { href: "/services", label: "Services" },
  { href: "/support-requests", label: "Support Requests" },
];

export const applicationServices = [
  {
    title: "Client Identification Database",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.",
    href: "/cid",
  },
  {
    title: "Incidents Database",
    description:
      "Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere.",
    href: "/idb",
  },
  {
    title: "CANUTEC Registration System",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.",
    href: "/crs",
  },
];

export const organizations = [
  {
    id: "2930250",
    legalName: "1029401 Inc.",
    operatingName: "Walmart",
    address: "102 Main St, Ottawa ON, Canada K8K 3M2",
    status: "Registered",
  },
  {
    id: "2930220",
    legalName: "2038495 Ontario Ltd.",
    operatingName: "FreshMart",
    address: "45 Queen St, Toronto ON, Canada M5H 2N2",
    status: "Registered",
  },
  {
    id: "29302550",
    legalName: "8753209 Canada Inc.",
    operatingName: "MapleTech Solutions",
    address: "980 King Edward Ave, Ottawa ON, Canada K1N 6N5",
    status: "Registered",
  },
  // {
  //   id: "29302503",
  //   legalName: "1102384 Alberta Ltd.",
  //   operatingName: "Prairie Outfitters",
  //   address: "121 Riverfront Ave SW, Calgary AB, Canada T2P 4K9",
  //   status: "Registered",
  // },
  // {
  //   id: "2200250",
  //   legalName: "9984321 Quebec Inc.",
  //   operatingName: "Bon Appétit Bistro",
  //   address: "77 Rue Saint-Paul, Montréal QC, Canada H2Y 1Z5",
  //   status: "Registered",
  // },
  // {
  //   id: "29302893",
  //   legalName: "7654098 B.C. Ltd.",
  //   operatingName: "Pacific Greenhouses",
  //   address: "3000 Oak St, Vancouver BC, Canada V6H 2L5",
  //   status: "Registered",
  // },
];

export const pendingOrganizations = [
  {
    id: "29302529",
    legalName: "293402849 Canada Inc.",
    operatingName: "Dangerous Shippers Inc",
    address: "42 Wallaby Way, Thunder Bay Ontario, Canada",
    status: "Under Review",
  },
];

export const sampleOrgRegistrations = [
  {
    id: 1,
    service: "Client Identification Database (CID)",
    company: "Walmart Inc.",
    registrationDate: "-",
    expiryDate: "-",
    status: "Not Registered",
  },
  {
    id: 2,
    service: "CANUTEC Registration Service (CRS)",
    company: "Walmart Inc.",
    registrationDate: "10/20/2024",
    expiryDate: "10/20/2025",
    status: "Registered",
  },
];

export const sites = [
  {
    siteId: "001920",
    siteName: "Barrhaven Walmart",
    address: "102 Strandherd Rd, Ottawa ON, Canada K7L 9P2",
  },
  {
    siteId: "001921",
    siteName: "Kanata Walmart",
    address: "500 Earl Grey Dr, Kanata, ON K2T 1B9",
  },
];

export const contacts = [
  {
    firstName: "Benjamin",
    lastName: "Buck",
    email: "benjamin.buck@tc.gc.ca",
    phone: "(613) 266-0369",
    portalUser: true,
  },
  {
    firstName: "Erik",
    lastName: "Dennis",
    email: "erik.dennis@tc.gc.ca",
    phone: "(613) 123-0369",
    portalUser: false,
  },
  {
    firstName: "Kevin",
    lastName: "McParland",
    email: "kevin.mcparland@tc.gc.ca",
    phone: "(613) 321-0369",
    portalUser: true,
  },
];
