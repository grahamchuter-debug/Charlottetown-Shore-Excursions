export type NavItem = { label: string; href: string };

export const PORT_GUIDE_PATH = "/charlottetown-cruise-port-guide";

export const mainNav: NavItem[] = [
  { label: "Excursions", href: "/excursions" },
  { label: "Port Guide", href: PORT_GUIDE_PATH },
  { label: "Cruise Planner", href: "/cruise-planner" },
  { label: "FAQ", href: "/faq" },
  { label: "Enquire", href: "/enquire" },
];

export const guideLinks: NavItem[] = [
  { label: "Charlottetown Cruise Port Guide", href: PORT_GUIDE_PATH },
  {
    label: "Best Charlottetown Shore Excursions",
    href: "/best-charlottetown-shore-excursions",
  },
  {
    label: "Things To Do From A Cruise Ship",
    href: "/things-to-do-in-charlottetown-from-a-cruise-ship",
  },
  {
    label: "One Day In Charlottetown",
    href: "/one-day-in-charlottetown-from-a-cruise-ship",
  },
  { label: "Prince Edward Island Guide", href: "/prince-edward-island-guide" },
  { label: "Best Time To Visit", href: "/best-time-to-visit-charlottetown" },
  {
    label: "Walking From The Port",
    href: "/walking-charlottetown-from-cruise-port",
  },
  {
    label: "Cruise Ship Schedule",
    href: "/charlottetown-cruise-ship-schedule",
  },
  { label: "Cruise Planner", href: "/cruise-planner" },
  { label: "FAQ", href: "/faq" },
];

export const destinationGuideLinks: NavItem[] = [
  { label: "Anne of Green Gables Guide", href: "/anne-of-green-gables-guide" },
  { label: "Prince Edward Island Guide", href: "/prince-edward-island-guide" },
  { label: "Cavendish From Charlottetown", href: "/cavendish-from-charlottetown" },
  { label: "PEI Lighthouses", href: "/prince-edward-island-lighthouses" },
  { label: "Confederation History", href: "/confederation-history-guide" },
];

export const excursionLinks: NavItem[] = [
  { label: "Anne of Green Gables Tour", href: "/anne-of-green-gables-tour" },
  { label: "Best of PEI Tour", href: "/best-of-prince-edward-island-tour" },
  { label: "Cavendish North Shore", href: "/cavendish-north-shore-tour" },
  { label: "PEI Lighthouse Tour", href: "/pei-lighthouse-tour" },
  { label: "PEI Scenic Drive", href: "/prince-edward-island-scenic-drive" },
  { label: "Charlottetown Walking Tour", href: "/charlottetown-walking-tour" },
  { label: "Historic Confederation Tour", href: "/historic-confederation-tour" },
  { label: "Lobster Experience", href: "/lobster-experience-tour" },
];
