import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CircleUser, PersonStanding } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col items-center gap-4 min-w-[360px] w-[360px]">
        <div className="flex items-center justify-between w-full">
          <p className="text-2xl font-bold">Hi, Juan Dela Cruz!</p>

          <CircleUser />
        </div>

        {/* Virtual Card */}
        <div className="p-4 gap-4 w-full flex flex-col bg-gradient-to-r from-[#BED980] to-[#28BCAA] rounded-lg">

          <div className="flex justify-between items-center w-full text-[#FFFFFF]">
            <p>icon</p>
            <p className="font-bold">TalaPort</p>
          </div>

          <div className="flex flex-col gap-4 p-4">
            <div className="flex items-center justify-between text-[#FFFFFF] text-lg">
              <p>2821 </p>
              <p>****</p>
              <p>****</p>
              <p>1002</p>
            </div>

            <div className="flex flex-col gap-1 text-[#FFFFFF]">
              <p className="text-[5px] font-extralight">CARD HOLDER</p>
              <p className="text-lg">Juan Dela Cruz</p>
            </div>
          </div>
          
        </div>
        {/* end */}

        <div className="w-full flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <p className="text-xl font-bold">Recent Activity</p>
            <p className="text-[12px] ">Check Points</p>
          </div>

          <div className="p-4 flex items-center justify-between border border-[#CAD9FF] rounded-lg">
            <div className="flex flex-col">
              <p>Consejo’s Grocery Store</p>
              <p>August 24 · 02:20 PM</p>
            </div>
            <p>+20,000</p>
          </div>

          <div className="p-4 flex items-center justify-between border border-[#CAD9FF] rounded-lg">
            <div className="flex flex-col">
              <p>Rosel’s Grocery Store</p>
              <p>August 24 · 02:20 PM</p>
            </div>
            <p>+20,000</p>
          </div>
        </div>
      </div>
    </div>
  );
}
