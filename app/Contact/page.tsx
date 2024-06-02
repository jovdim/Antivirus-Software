import React from "react";

export default function Contact() {
  return (
    <div id="contact" className="pt-10  text-white h-[90vh] w-[100vw] text-[18px] relative  bg-gradient-to-t to-[#0c356aab] from-[#0C356A] px-24 ">
      <div className="">
        <h1 className="font-bold text-[2.125rem]">Contact Support</h1>
        <p>
          Have a question or need assistance? Get in touch with our support
          team.
        </p>
      </div>
      <div className="flex pt-12 justify-between ">
        <div className="space-y-6">
          <div className="bg-[#F0EBE3] text-black p-3 rounded-lg border border-blue-500">
            <div className="flex items-center">
              <img src="email.svg" alt="email image" className="size-8" />
              <p className="pl-2">Email</p>
            </div>
            <p>Send us an email today!</p>
            <p>securityguard@gmail.com</p>
          </div>
          <div className="bg-[#F0EBE3] text-black p-3 rounded-lg border border-blue-500">
            <div className="flex items-center">
              <img src="contact.svg" alt="contact image" className="size-8" />
              <p className="pl-2">Phone</p>
            </div>
            <p>Call us for assistance!</p>
            <p>{"+1 (555) 1250-1595"}</p>
          </div>
          <div className="bg-[#F0EBE3] text-black p-3 rounded-lg border border-blue-500">
            <div className="flex items-center">
              <img src="office.svg" alt="office image" className="size-8" />
              <p className="pl-2">Office</p>
            </div>
            <p>245 cupang St, Sydney NSW 2000 AU</p>
          </div>
          <div>
            <p className="hover:cursor-pointer hover:text-blue-200">Get Directions ↦</p>
          </div>
        </div>

        <div>
          <img
            src="location.png"
            alt="location image"
            className="w-[40rem] rounded-xl "
          />
        </div>
      </div>
    </div>
  );
}
