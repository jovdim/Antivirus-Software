"use client";
// Home/page.js
import Navbar from "@/components/Navbar";
import HeroIcon from "@/components/icon/HeroIcon";
import { FlipWords } from "@/components/ui/flip-words";
import { Button } from "@/components/ui/moving-border";
import { SparklesCore } from "@/components/ui/sparkles";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { useRef, useEffect, useState } from "react";

export default function Home() {
  const homeRef = useRef<HTMLDivElement>(null);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (homeRef.current) {
        const homeBottom = homeRef.current.getBoundingClientRect().bottom;
        if (homeBottom <= 0) {
          setIsButtonVisible(true);
        } else {
          setIsButtonVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div
        ref={homeRef}
        className="h-[100vh] w-[100vw] text-[18px] relative bg-gradient-to-t to-[#0c356aab] from-[#0C356A] px-24"
      >
        <div className="w-full absolute inset-0 h-full">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        <div className="flex flex-col z-20">
          <Navbar />
        </div>
        <div className="flex justify-between items-center text-white">
          <div className="w-1/2 m-auto space-y-6 relative">
            <h1 className="font-bold text-[4rem] leading-[4rem] w-[50rem]">
              Elevate Your Digital Defense with Unmatched Device
              <FlipWords
                words={[
                  "Shield",
                  "Guardian",
                  "Fortress",
                  "Sentinel",
                  "Armor",
                  "Protector",
                  "Sentry",
                  "Defender",
                  "Bastion",
                  "Citadel",
                ]}
                duration={4000}
                className="font-bold text-[4rem] text-orange-400 opacity-[1]"
              />
            </h1>
            <p className="text-[18px]">
              Empower your journey with our antivirus, your trusted partner in
              digital security. Let's keep your path safe and prosperous.
            </p>
            <div className="space-x-4 pt-10">
              <Button
                borderRadius="1rem"
                className="text-[18px] bg-[#2d6eb9]  border border-hover:bg-[#1450A3] text-black dark:text-white border-neutral-200 "
              >
                Download
              </Button>
              <Button
                duration={5000}
                borderRadius="1rem"
                className="text-[18px] bg-[#ffffff02] hover:bg-[#1450A3] border hover:border-none border-white text-white"
              >
                Learn more
              </Button>
            </div>
          </div>
          <div className="z-50 ml-24">
            <HeroIcon />
          </div>
        </div>
      </div>
      <div className="h-[30rem] w-[100vw] flex justify-between text-white bg-gradient-to-t to-[#3876BF] from-[#5b90cd] px-24 pt-16">
        <div className="space-y-6 text-[18px]">
          <h1 className="font-bold text-[2.4rem] leading-[3.4rem]">
            Secure Your Device with Powerful Antivirus Software at SecurityGuard
          </h1>
          <p className="text-[18px] text-center">
            Our antivirus software provides real-time protection and delivers
            instant security updates, ensuring your device is always secure.
          </p>
          <div className="space-x-4 pt-4 flex">
            <div className="w-[20rem] border border-blue-600 shadow-lg bg-[#ECF9FF] text-black p-3 rounded-lg space-y-2 pb-4">
              <div>
                <img src="/real-time.svg" alt="icon" className="size-12" />
              </div>
              <h3 className="font-bold text-[1.2rem]">Real-Time</h3>
              <p className="text-[16px] opacity-[0.8]">
                Stay protected with our antivirus software's real-time scanning
                and threat detection capabilities.
              </p>
            </div>
            <div className="w-[20rem] border border-blue-600 shadow-lg bg-[#ECF9FF] text-black p-3 rounded-lg space-y-2 pb-4">
              <div>
                <img src="/udpate.svg" alt="icon" className="size-14" />
              </div>
              <h3 className="font-bold text-[1.2rem]">Instant Updates</h3>
              <p className="text-[16px] opacity-[0.8]">
                Receive instant security updates to keep your device protected
                against the latest threats.
              </p>
            </div>
            <div className="w-[20rem] border border-blue-600 shadow-lg bg-[#ECF9FF] text-black p-3 rounded-lg space-y-2 pb-4">
              <div>
                <img src="/firewall.svg" alt="icon" className="size-12" />
              </div>
              <h3 className="font-bold text-[1.2rem]">Advanced Firewall</h3>
              <p className="text-[16px] opacity-[0.8]">
                Protect your network with our firewall that blocks unauthorized
                access and secures your data.
              </p>
            </div>
            <div className="w-[20rem] border border-blue-600 shadow-lg bg-[#ECF9FF] text-black p-3 rounded-lg space-y-2 pb-4">
              <div>
                <img src="/privacy.svg" alt="icon" className="size-12" />
              </div>
              <h3 className="font-bold text-[1.2rem]">Privacy Protection</h3>
              <p className="text-[16px] opacity-[0.8]">
                Ensure your personal information stays private with our
                comprehensive privacy protection features.
              </p>
            </div>
          </div>
        </div>
      </div>
      {isButtonVisible && <ScrollToTopButton />}
    </div>
  );
}
