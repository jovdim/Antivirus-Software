"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./logo";

const content = [
  {
    title: "Features",
    url: "#features",
  },
  {
    title: "Pricing",
    url: "#pricing",
  },
  {
    title: "Support",
    url: "#support",
  },
  {
    title: "Testimonials",
    url: "#testimonials",
  },
  {
    title: "More",
    url: "#faq",
  },
];

export default function Navbar() {


  return (
    <nav className=" z-50 text-white flex justify-between items-center h-[5rem] text-[1.1rem] py-12 border-b-[0.5px] border-white">
      <div className="flex items-center">
        <div className="flex justify-center items-center">
          <Logo />
          <div className="flex flex-col ml-2 ">
            <h2 className="font-bold text-[26px] leading-6 ">Security</h2>
            <h2 className="font-bold text-[26px] leading-6 ">Guard</h2>
          </div>
        </div>
      </div>
      <div className="space-x-8">
        {content.map((item, index) => (
          <Link key={item.title} href={item.url}>
            <span
              className="underline-animation pb-6 hover:text-[#b0c7e2] "
            >
              {item.title}
            </span>
          </Link>
        ))}
      </div>
      <div className="space-x-4">
        <button className=" w-[7.5rem] bg-[#2d6eb9] hover:bg-[#191D88] transition-all  p-3  rounded-lg text-white  border-[0.5px] border-white">
          Demo
        </button>
        <button className="w-[7.5rem] bg-[#2d6eb9] hover:bg-[#191D88] transition-all p-3 rounded-lg text-white  border-[0.5px] border-white text-center">
          Log in
        </button>
      </div>
    </nav>
  );
}
