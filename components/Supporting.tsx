import React from "react";
import { Button } from "./ui/moving-border";

export default function Supporting() {
  return (
    <>
      <div className="pt-10 text-white flex flex-col  items-center w-[100vw] space-y-6 h-[40vh] bg-gradient-to-t to-[#3d66c7] from-[#336093cf] px-24 ">
        <h1 className="text-[36px] font-bold">Protect Your Devices Today</h1>
        <p className="text-base">
          Download our free trial or purchase the full version for complete
          protection.
        </p>
        <div className="space-x-4">
          <Button
            borderRadius="1rem"
            className=" text-[18px]   bg-[#3559E0] hover:bg-[#1450A3] text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            Download
          </Button>
          <Button
            borderRadius="1rem"
            className=" text-[18px]   bg-[#3559E0] hover:bg-[#1450A3] text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            Buy now
          </Button>
        </div>
        <div></div>
      </div>
      <div className="pt-10 text-white flex flex-col  items-center w-[100vw] space-y-6 h-[44vh] bg-gradient-to-t to-[#3d66c7] from-[#336093cf] px-24 ">  
        <h1 className="text-[36px] font-bold">
          Stay Informed with Our Newsletter
        </h1>
        <p className="text-base">
          Subscribe to our newsletter for the latest updates, helpful tips, and
          exclusive offers.
        </p>
        <div className="space-x-4">
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Your Email here"
              className="border-2 border-white p-2 rounded-lg w-[18rem] text-black text-base"
            />
            <button
              className=" text-[18px]  p-3 px-6 rounded-lg bg-[#24377c] hover:bg-[#1450A3] text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Join Now
            </button>
          </div>
          <p className="pt-6 text-base">By joining, you agree to our Terms and Conditions.</p>
        </div>
        <div></div>
      </div>
    </>
  );
}
