"use client";
import React, { useState } from "react";
import { Button } from "./ui/moving-border";

const Accordion = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index: any) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  const faqAccordion = [
    {
      question: "What is real-time scanning?",
      answer:
        "Real-time scanning is a feature that continuously monitors your device for any malicious activity or threats, ensuring immediate detection and removal of viruses and malware.",
    },
    {
      question: "How do automatic updates work?",
      answer:
        "Automatic updates ensure your antivirus software is always up-to-date with the latest virus definitions and security patches. These updates are downloaded and installed automatically, without requiring user intervention.",
    },
    {
      question: "What is quarantine management?",
      answer:
        "Quarantine management isolates and manages suspicious files detected by the antivirus software. It prevents these files from causing harm until you decide to delete or restore them.",
    },
    {
      question: "Can I use the antivirus on multiple devices?",
      answer:
        "Yes, our antivirus software supports multiple devices. Depending on your plan, you can protect several devices under a single subscription.",
    },
    {
      question: "What is the VPN service included in the Premium Plan?",
      answer:
        "The VPN service allows you to browse the internet anonymously and securely by encrypting your connection, protecting your privacy, and ensuring your online activities remain confidential.",
    },
    {
      question: "How do parental controls work?",
      answer:
        "Parental controls help ensure a safe online experience for your children by allowing you to block inappropriate content, set browsing time limits, and monitor their online activity.",
    },
    {
      question: "What is the difference between the Free and Premium plans?",
      answer:
        "The Free plan offers basic protection including real-time scanning and automatic updates. The Premium plan includes advanced features such as VPN service, password manager, parental controls, and 24/7 priority support.",
    },
    {
      question: "How does application and message scanning work?",
      answer:
        "Application and message scanning protects you by scanning your messaging apps and emails for phishing links and other threats, blocking malicious content in real-time.",
    },
    {
      question: "What is automatic website blocking?",
      answer:
        "Automatic website blocking prevents access to websites that are potentially harmful, illegal, or not secure, ensuring safe browsing and protecting your personal information.",
    },
    {
      question: "How do I set up custom alert ringtones?",
      answer:
        "You can set up custom alert ringtones for virus detections and threats through the settings menu in our antivirus software. Choose from a variety of sounds to personalize your security notifications.",
    },
  ];

  return (
    <div className="h-[130vh] w-[100vw]  bg-gradient-to-t to-[#3d66c7] from-[#336093cf] px-24 text-white">
      <div className="pt-10  flex flex-col  items-center space-y-6  ">
        <div className="">
          <div className="pb-12">
            <h1 className="text-2xl font-bold py-4 md:text-[1.8rem] ">
              Frequently Asked Questions
            </h1>
            <p>
              Find answers to common questions about our antivirus software.
            </p>
          </div>
          <div className="   flex flex-wrap justify-center items-center bg-[#DFF5FF] text-black py-6  gap-8 rounded-lg">
            {faqAccordion.map((item, index) => (
              <div key={index} className="px-2 w-[40rem]">
                <button
                  type="button"
                  className="flex items-center justify-between w-full text-left font-semibold py-4  " // Increased padding and font size
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={expandedIndex === index}
                >
                  <span className="text-[1rem] md:text-[1.08rem] lg:text-[1.1rem] ">
                    {item.question}
                  </span>
                  <svg
                    className={`fill-black shrink-0 ml-8 transition-transform duration-200 ease-out ${
                      expandedIndex === index ? "rotate-[270deg]" : "rotate-0"
                    }`}
                    width="24" // Increased SVG size
                    height="24" // Increased SVG size
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="11" y="0" width="2.5" height="24" rx="1" />
                    {expandedIndex !== index && (
                      <rect x="0" y="11" width="24" height="2.5" rx="1" />
                    )}
                  </svg>
                </button>
                <div className="bg-black h-[1px] "></div>
                <div
                  role="region"
                  aria-labelledby={`faqs-title-${index}`}
                  className={`grid text-base overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedIndex === index
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-3 text-[16px] leading-6 w-full md:leading-7 md:text-[.9rem] lg:text-[.95rem]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className=" pt-7">
        <h1 className="text-2xl font-bold py-4 md:text-[1.3rem] ">
          Still have questions?
        </h1>
        <p className="pb-6">Find answers to common questions about our antivirus software.</p>
 
      <Button
        borderRadius="1rem"
        className=" text-[18px]   bg-[#354ea8] hover:bg-[#1450A3] text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Contact
      </Button>
      </div>
    </div>
  );
};

export default Accordion;
