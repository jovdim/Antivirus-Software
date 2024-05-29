import React from "react";

export default function Contact() {
  return (
    <div className="pt-10 text-white h-[80vh] w-[100vw] text-[18px] relative  bg-gradient-to-t to-[#0c356aab] from-[#0C356A] px-24 ">
      <div className="div">
        <h1 className="font-bold text-[2.125rem]">Contact Support</h1>
        <p>
          Have a question or need assistance? Get in touch with our support
          team.
        </p>
      </div>
      <div className="flex pt-12 justify-between ">
        <div className="space-y-6">
          <div>
            <p>Email</p>
            <p>Send us an email today!</p>
            <p>securityguard@gmail.com</p>
          </div>
          <div>
            <p>Phone</p>
            <p>Call us for assistance!</p>
            <p>{"+1 (555) 1250-1595"}</p>
          </div>
          <div>
            <p>Office</p>
            <p>245 cupang St, Sydney NSW 2000 AU</p>
            <p>securityguard@gmail.com</p>
          </div>
          <div>
            <p>Get Directions</p>
          </div>
        </div>

        <div>
          <img src="location.png" alt="location image" className="w-[40rem] rounded-lg" />
        </div>
      </div>
    </div>
  );
}
