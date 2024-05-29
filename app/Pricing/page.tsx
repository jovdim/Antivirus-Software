import React from "react";

const pricingPlans = [
  {
    name: "Free Plan",
    price: "$0/mo",
    description: "Ideal for personal use",
    features: [
      "Real-Time Scanning",
      "Automatic Updates",
      "Application and Message Scanning",
      "Basic Website blocking",
      "Basic Support",
      ,
    ],
    buttonText: "Get Started",
  },
  {
    name: "Standard Plan",
    price: "$9.99/mo",
    description: "Perfect for small businesses",
    features: [
      "Real-Time Scanning",
      "Automatic Updates",
      "Application and Message Scanning",
      "Universal Browser Extension",
      "Automatic Website Blocking",
      "Quarantine Management",
      "Enhanced Support",
    ],
    buttonText: "Sign Up",
  },
  {
    name: "Premium Plan",
    price: "$19.99/mo",
    description: "Best for families and professionals",
    features: [
      "Real-Time Scanning",
      "Automatic Updates",
      "Application and Message Scanning",
      "Universal Browser Extension",
      "Automatic Website Blocking",
      "Download Restriction",
      "Custom Alert Ringtones",
      "VPN Service",
      "Password Manager",
      "Parental Controls",
      "24/7 Priority Support",
    ],
    buttonText: "Sign Up",
  },
];
export default function Pricing() {
  return (
    <div className="  h-[110vh] w-[100vw] text-[18px]   bg-gradient-to-t to-[#3876BF] from-[#336093cf]  px-24">
      <div className="text-center text-white pt-8">
        <h1 className="font-bold text-[30px]">Pricing Options</h1>
        <p className="text-base">
          Choose the best plan for your antivirus needs
        </p>
      </div>
      <div className=" flex  gap-8 py-12 ">
        {pricingPlans.map((plan) => (
          <div className="border border-blue-400 w-[28rem] bg-gradient-to-t from-[#89CFF3] to-[#E4F1FF] text-black p-5 rounded-xl flex flex-col shadow-xl ">
            <div className="flex justify-between items-center ">
              <div className="flex flex-col">
                <h1 className="font-bold text-[1.75rem]">{plan.name}</h1>
                <p className="text-[1rem]">{plan.description}</p>
              </div>
              <div className="text-[1.3rem]">{plan.price}</div>
            </div>

            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="flex flex-col py-8 space-y-2">
                  <div className="h-[0.5px] w-full bg-black  "></div>
                  {plan.features.map((feature) => (
                    <div className="flex items-center gap-2 ">
                      <div className="h-2 w-2 bg-black opacity-[0.8] rounded-full"></div>
                      <div>{feature}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="h-[0.5px] opacity-[0.5] w-full bg-black "></div>
              <div className="flex flex-col items-end text-[18px]">
                <button className="flex bg-[#192655] hover:bg-[#192655d2]  w-full h-12 text-white justify-center items-center rounded-lg ">
                  {plan.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
