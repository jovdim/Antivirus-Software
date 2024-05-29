import { PinContainer } from "./ui/3d-pin";
import { Button } from "./ui/moving-border";

export function Feature() {
  return (
    <div className="text-white w-[100vw]">
      <div className="flex justify-between items-center h-[90vh] bg-gradient-to-t to-[#3876BF] from-[#336093cf] px-24">
        <div className="w-1/2 m-auto space-y-6  text-[18px] border p-12 rounded-lg ">
          <h1 className="font-bold text-[2.4rem] leading-[3rem] ">
            Download Restriction
          </h1>
          <p className="text-[18px] ">
            Automatically blocks all downloads when a virus is detected,
            preventing further threats and ensuring your device remains secure.
            Enjoy peace of mind with proactive protection that stops malicious
            files in their tracks.
          </p>
          <div className="space-x-4 pt-4 flex">
          <Button
                  duration={5000}
                  borderRadius="1rem"
                  className=" text-[18px]   bg-[#ffffff02]  hover:bg-[#1450A3] border hover:border-none  border-white text-white"
                >
                  Learn more
                </Button>
            <button className=" p-3 rounded-md transition-all hover:text-[#337CCF] ">
              {"Sign Up >"}
            </button>
          </div>
        </div>
        <div className="w-1/2 m-auto ">
          <PinContainer
          title="Download Restriction"
          className="size-[25rem]">
            
          <img
            src="/restrict.svg"
            alt="icon"
            className=" size-[25rem]"
          />
          </PinContainer>
        </div>
      </div>
      {/* // Second Feature */}
      <div className="flex justify-between items-center h-[90vh] px-24 bg-gradient-to-t from-[#3876BF] to-[#336093cf]  ">
        <div className="w-1/2 m-auto">
        <PinContainer
          title="Download Restriction"
          className="size-[25rem]">
          <img
            src="/extension.svg"
            alt="icon"
            className=" size-[25rem]"
          />
        </PinContainer>
        
        </div>
        <div className="w-1/2 m-auto space-y-6  text-[18px] border p-12 rounded-lg">
          <h1 className="font-bold text-[2.4rem] leading-[3.4rem] ">
            Universal Browser Extension
          </h1>
          <p className="text-[18px] ">
            Our antivirus software seamlessly integrates as an extension in any
            browser, providing real-time protection and security while you
            browse. Enjoy comprehensive coverage and peace of mind across all
            your online activities.
          </p>
          <div className="space-x-4 pt-4 flex">
            <div className="w-[28rem]  rounded-lg space-y-2 ">
              <div>
                <h3 className="font-bold text-[2rem]">50%</h3>
              </div>
              <p className="text-[16px] opacity-[0.8]">
                Detect and remove viruses, malware, and other threats
              </p>
            </div>
            <div className="w-[20rem]  rounded-lg space-y-2 ">
              <div>
                <h3 className="font-bold text-[2rem]">50%</h3>
              </div>
              <p className="text-[16px] opacity-[0.8]">
                User-friendly interface suitable for all levels of technical
                expertise
              </p>
            </div>
          </div>
          <div className="space-x-4 pt-4 flex">
          <Button
                  duration={5000}
                  borderRadius="1rem"
                  className=" text-[18px]   bg-[#ffffff02]  hover:bg-[#1450A3] border hover:border-none  border-white text-white"
                >
                  Learn more
                </Button>
            <button className=" p-3 rounded-md transition-all hover:text-[#337CCF] ">
              {"Sign Up >"}
            </button>
          </div>
        </div>
      </div>
      {/* third feature */}
      <div className="flex justify-between items-center h-[90vh] px-24 bg-gradient-to-t to-[#3876BF] from-[#336093cf]">
        <div className="w-1/2 m-auto space-y-6  text-[18px] border p-12 rounded-lg">
          <h1 className="font-bold text-[2.4rem] leading-[3rem] ">
            Automatic Website Blocking
          </h1>
          <p className="text-[18px] ">
            Automatically blocks access to websites that are potentially
            harmful, illegal, or not secure. Our software ensures safe browsing
            by preventing you from visiting dangerous sites, keeping your
            personal information and device protected.
          </p>
          <ul>
            <li>Real-time scanning </li>
            <li>Quarantine Management</li>
            <li>Automatic Updates</li>
          </ul>
          <div className="space-x-4 pt-4 flex">
          <Button
                  duration={5000}
                  borderRadius="1rem"
                  className=" text-[18px]   bg-[#ffffff02]  hover:bg-[#1450A3] border hover:border-none  border-white text-white"
                >
                  Learn more
                </Button>
            <button className=" p-3 rounded-md transition-all hover:text-[#337CCF] ">
              {"Sign Up >"}
            </button>
          </div>
        </div>
        <div className="w-1/2 m-auto">
        <PinContainer
          title="Download Restriction"
          className="size-[25rem]">
          <img
            src="/unsecure.svg"
            alt="icon"
            className=" size-[25rem]"
          />
          </PinContainer>
        </div>
      </div>
      {/* fourth feature */}
      <div className="flex justify-between items-center h-[90vh] px-24 bg-gradient-to-t from-[#3876BF] to-[#336093cf]">
        <div className="w-1/2 m-auto">
           <PinContainer
          title="Download Restriction"
          className="size-[25rem]">
          <img
            src="/scanning.svg"
            alt="icon"
            className=" size-[25rem]"
          />
          </PinContainer>
        </div>
        <div className="w-1/2 m-auto space-y-6  text-[18px] border p-12 rounded-lg">
          <h1 className="font-bold text-[2.4rem] leading-[3.4rem] ">
            Application and Message Scanning{" "}
          </h1>
          <p className="text-[18px] ">
            Scans your messaging apps and emails for phishing links and other
            threats. Our software provides real-time protection by detecting and
            blocking malicious content in your communications, ensuring a safer
            digital experience.
          </p>
          <div className="space-x-4 pt-4 flex">
            <div className="w-[20rem]  rounded-lg space-y-2 ">
              <div>
                <h3 className="font-bold text-[1.4rem]">Benefits</h3>
              </div>
              <p className="text-[16px] opacity-[0.8]">
                Stay protected with automatic updates and enjoy enhanced
                security and performance.
              </p>
            </div>
            <div className="w-[20rem]  rounded-lg space-y-2 ">
              <div>
                <h3 className="font-bold text-[1.4rem]">Features</h3>
              </div>
              <p className="text-[16px] opacity-[0.8]">
                Automatic updates ensure your software is always up-to-date and
                protected against the latest threats.
              </p>
            </div>
          </div>
          <div className="space-x-4 pt-4 flex">
          <Button
                  duration={5000}
                  borderRadius="1rem"
                  className=" text-[18px]   bg-[#ffffff02]  hover:bg-[#1450A3] border hover:border-none  border-white text-white"
                >
                  Learn more
                </Button>
            <button className=" p-3 rounded-md transition-all hover:text-[#337CCF] ">
              {"Sign Up >"}
            </button>
          </div>
        </div>
      </div>
      {/* fitfth feature */}
      <div className="flex justify-between items-center h-[90vh] px-24 bg-gradient-to-t to-[#3876BF] from-[#336093cf]">
       
        <div className="w-1/2 m-auto space-y-6  text-[18px] border p-12 rounded-lg">
          <h1 className="font-bold text-[2.4rem] leading-[3.4rem] ">
          Custom Alert Ringtones
          </h1>
          <p className="text-[18px] ">
          Set up custom alert ringtones for virus detections and threats. Personalize your security notifications with customizable sounds, ensuring you're immediately aware of any potential risks to your device.
          </p>
          <div className="space-x-4 pt-4 flex">
            <div className="w-[20rem]  rounded-lg space-y-2 ">
              <div>
                <h3 className="font-bold text-[1.4rem]">Benefits</h3>
              </div>
              <p className="text-[16px] opacity-[0.8]">
                Stay protected with automatic updates and enjoy enhanced
                security and performance.
              </p>
            </div>
            <div className="w-[20rem]  rounded-lg space-y-2 ">
              <div>
                <h3 className="font-bold text-[1.4rem]">Features</h3>
              </div>
              <p className="text-[16px] opacity-[0.8]">
                Automatic updates ensure your software is always up-to-date and
                protected against the latest threats.
              </p>
            </div>
          </div>
          <div className="space-x-4 pt-4 flex">
          <Button
                  duration={5000}
                  borderRadius="1rem"
                  className=" text-[18px]   bg-[#ffffff02]  hover:bg-[#1450A3] border hover:border-none  border-white text-white"
                >
                  Learn more
                </Button>
            <button className=" p-3 rounded-md transition-all hover:text-[#337CCF] ">
              {"Sign Up >"}
            </button>
          </div>
        </div>
        <div className="w-1/2 m-auto">
        <PinContainer
          title="Download Restriction"
          className="size-[25rem]">
          <img
            src="/ringtone.svg"
            alt="icon"
            className=" size-[25rem]"
          />
          </PinContainer>
        </div>
      </div>  
      <div className="h-[40rem] w-[100vw] flex justify-between  text-white   bg-gradient-to-t to-[#3876BF] from-[#5b90cd]   px-24 pt-16 ">
        <div className=" space-y-6  text-[18px]">
          <h1 className="font-bold text-[2.4rem] leading-[3.4rem]  text-center">
          Enhance Your Online Security with Our Additional Services
          </h1>
          <p className="text-[18px] text-center">
          In addition to our powerful antivirus software, we offer a range of additional services to further safeguard your digital life. Explore our VPN, password manager, and parental controls to ensure comprehensive protection for you and your family.
          </p>
          <div className="space-x-4 py-12 px-6 rounded-2xl flex   bg-[#91c8e498]  justify-center items-center">
            <div className="w-[25rem] border border-blue-600 shadow-lg bg-[#E6FFFD] text-black p-3 rounded-lg space-y-2 pb-4 ">
              <div>
                <img src="/real-time.svg" alt="icon" className="size-12 " />
              </div>
              <h3 className="font-bold text-[1.2rem]">Secure Your Connection with VPN</h3>
              <p className="text-[16px] opacity-[0.8]">
              Browse the web anonymously and protect your privacy.
              </p>
            </div>
            <div className="w-[25rem] border border-blue-600 shadow-lg bg-[#E6FFFD] text-black p-3 rounded-lg space-y-2 pb-4 ">
              <div>
                <img src="/udpate.svg" alt="icon" className="size-14 " />
              </div>
              <h3 className="font-bold text-[1.2rem]">Manage Your Passwords with Ease</h3>
              <p className="text-[16px] opacity-[0.8]">
              Store and generate strong passwords for all your accounts.
              </p>
            </div>
            <div className="w-[25rem] border border-blue-600 shadow-lg bg-[#E6FFFD] text-black p-3 rounded-lg space-y-2 pb-4">
              <div>
                <img src="/firewall.svg" alt="icon" className="size-12" />
              </div>
              <h3 className="font-bold text-[1.2rem]">Protect Your Children Online</h3>
              <p className="text-[16px] opacity-[0.8]">
              Ensure a safe and secure online experience for your kids.
              </p>
            </div>
          
          </div>
          <div className="space-x-4 pt-4 flex justify-center items-center">
          <Button
                  duration={5000}
                  borderRadius="1rem"
                  className=" text-[18px]   bg-[#ffffff02]  hover:bg-[#1450A3] border hover:border-none  border-white text-white"
                >
                  Learn more
                </Button>
            <button className=" p-4 rounded-xl w-[10rem] transition-all bg-[#2d6eb9]  hover:bg-[#1450A3] border border-white">
           Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
