export default function Home() {
  return (
    <div>
      <div className="flex justify-between items-center h-[90vh] text-[18px]">
        <div className="w-1/2 m-auto space-y-6  ">
          <h1 className="font-bold text-[3rem] leading-[4rem]">
            Secure Your Device with Powerful Antivirus Software at SecurityGuard
          </h1>
          <p className="text-[18px] ">
            Protect your device with SecurityGuard, our intuitive antivirus
            software offering real-time scanning, malware detection, and
            automatic updates. Download now to stay safe.
          </p>
          <div className="space-x-4 pt-10">
            <button className="border border-[#1450A3] w-[8rem] p-3  rounded-md bg-[#1450A3] text-white  hover:bg-[#191D88] transition-all">
              Download
            </button>
            <button className="border border-black w-[8rem] p-3 rounded-md transition-all hover:bg-[#1450A3] hover:text-white hover:border-none ">
              Learn more
            </button>
          </div>
        </div>
        <div className="w-1/2 m-auto">
          <img
            src="/con.png"
            alt="con image"
            className="w-[1000px] h-[30rem]"
          />
        </div>
      </div>
      <div className="flex justify-between items-center h-[90vh] ">
        <div className="w-1/2 m-auto">
          <img
            src="/con.png"
            alt="con image"
            className="w-[1500px] h-[30rem]"
          />
        </div>
        <div className="w-1/2 m-auto space-y-6  text-[18px]">
          <h1 className="font-bold text-[2.4rem] leading-[3.4rem] ">
            Secure Your Device with Powerful Antivirus Software at SecurityGuard
          </h1>
          <p className="text-[18px] ">
            Our antivirus software provides real-time protection and delivers
            instant security updates, ensuring your device is always secure.
          </p>
          <div className="space-x-4 pt-4 flex">
            <div className="w-[20rem] border border-[#068FFF] p-3 rounded-lg space-y-2 pb-4 ">
              <div><img src="/real-time.svg" alt="icon" className="size-12 "/></div>
              <h3 className="font-bold text-[1.2rem]">Real-Time</h3>
              <p className="text-[16px] opacity-[0.8]">
                Stay protected with our antivirus software's real-time scanning
                and threat detection capabilities.
              </p>
            </div>
            <div className="w-[20rem] border border-[#068FFF] p-3 rounded-lg space-y-2 pb-4 ">
              <div><img src="/udpate.svg" alt="icon" className="size-14 "/></div>
              <h3 className="font-bold text-[1.2rem]">Instant Updates</h3>
              <p className="text-[16px] opacity-[0.8]">
              Receive instant security updates to keep your device protected against the latest threats.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
