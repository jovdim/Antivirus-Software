"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function Testimonial() {
  return (
    <div id="testimonials" className="bg-gradient-to-t to-[rgb(56,118,191)] from-[#336093cf] w-[100vw] pb-12 -mt-10">
      <div>
        <h1 className="text-white font-bold text-[2.5rem] text-center pt-8">
          Satisfied Customers
        </h1>
        <p className="text-white text-[1.125rem] text-center">
          Read what our customers have to say about us
        </p>
      </div>
      <div className="h-[20rem]  rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden ">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}

const testimonials = [
  {
    name: "John Doe",
    role: "Software Engineer",
    quote:
      "This antivirus software is incredibly reliable. It has kept my devices safe from threats and runs seamlessly in the background. I appreciate the real-time scanning feature which ensures that my system is always protected without any noticeable performance lag.",
    face: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Jane Smith",
    role: "Product Manager",
    quote:
      "I love how easy it is to use this antivirus software. The real-time protection gives me peace of mind, knowing that my data is secure. The user interface is intuitive and the instant updates ensure that I am always protected against the latest threats.",
    face: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Michael Johnson",
    role: "IT Consultant",
    quote:
      "The instant updates feature is fantastic! I always feel up-to-date with the latest security patches and threats. Additionally, the comprehensive privacy protection features have been invaluable in keeping my personal information safe.",
    face: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Emily Davis",
    role: "Graphic Designer",
    quote:
      "Great antivirus solution! It’s lightweight, efficient, and has a very user-friendly interface. The advanced firewall has also provided an extra layer of security that I didn't know I needed until now. Highly recommended!",
    face: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    name: "Chris Lee",
    role: "Network Administrator",
    quote:
      "The advanced firewall has been a game-changer for our network security. Highly recommend this antivirus software. It's given us peace of mind knowing our data is secure from unauthorized access and potential threats.",
    face: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Laura Brown",
    role: "Freelance Writer",
    quote:
      "This antivirus software has been a lifesaver! I no longer worry about malware or viruses affecting my work. The real-time protection and instant updates ensure that my system is always running smoothly and securely.",
    face: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    name: "James Wilson",
    role: "Digital Marketer",
    quote:
      "I’ve tried several antivirus solutions over the years, but this one stands out. The seamless integration and real-time threat detection have made a significant difference in keeping my devices safe. The customer support is also top-notch!",
    face: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    name: "Olivia Martinez",
    role: "HR Specialist",
    quote:
      "As someone who handles sensitive employee information, having robust antivirus software is crucial. This software’s privacy protection features give me confidence that our data is secure, and the advanced firewall adds an extra layer of protection.",
    face: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    name: "Daniel Anderson",
    role: "System Analyst",
    quote:
      "The efficiency and reliability of this antivirus software are unmatched. The real-time scanning and threat detection work flawlessly, and the instant updates ensure that I'm always protected against new and emerging threats.",
    face: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    name: "Sophia Garcia",
    role: "UX Designer",
    quote:
      "I appreciate the comprehensive protection this antivirus software offers. From real-time scanning to instant updates and advanced firewall, every feature is designed to ensure maximum security. It's a must-have for anyone serious about protecting their data.",
    face: "https://randomuser.me/api/portraits/women/10.jpg",
  },
];
