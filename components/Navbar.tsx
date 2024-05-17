"use client";

import Link from "next/link";
import { useState } from "react";

const content = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Features",
    url: "/features",
  },
  {
    title: "Pricing",
    url: "/pricing",
  },
  {
    title: "Support",
    url: "/support",
  },
  {
    title: "More",
    url: "/more",
  },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState(null);

  const handleClick = (index: any) => {
    setActiveLink(index);
  };

  return (
    <nav className="flex justify-between items-center h-[4.5rem] text-[1.1rem] px-24 border-b-[0.5px] border-black">
      <div className="flex items-center">
        <div>
          <img src="/logoSec.png" alt="Logo Icon" className="h-24 w-26 -ml-6" />
        </div>
        <div className="space-x-8">
          {content.map((item, index) => (
            <Link key={item.title} href={item.url}>
              <span
                className={`underline-animation pb-6 hover:text-[#337CCF]  ${
                  activeLink === index ? "active text-[#337CCF]" : ""
                }`}
                onClick={() => handleClick(index)}
              >
                {item.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
      <div className="space-x-4">
        <button className="w-[7.5rem] bg-[#3559E0] hover:bg-[#191D88] transition-all p-2 rounded-lg text-white  border shadow-2xl">
          Download
        </button>
        <button className="w-[7.5rem] bg-[#3559E0] hover:bg-[#191D88] transition-all p-2 rounded-lg text-white  border shadow-2xl text-center">
          Demo
        </button>
      </div>
    </nav>
  );
}
