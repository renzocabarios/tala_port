import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CircleUser, Copy, PersonStanding } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col items-center gap-4 min-w-[360px] w-[360px] bg-[#F5F5F5] rounded-t-xl">
        
        <div className="w-full h-[49px] flex items-center justify-center bg-[#C2E96A] rounded-t-xl">
        <p className="font-thin">My <span className="font-normal text-[#22583F]">QR Code</span></p>
        </div>

        <div className="h-[192px] w-[192px] p-4 bg-gray-400 flex items-center justify-center">
          <p>Insert QR Code</p>
        </div>

        <div className="w-[241px] border border-[#D9D9D9] flex items-center justify-center gap-2">
          <p className="font-extralight text-[#22583F]">UID: 625-824-0743 </p>
          <Copy />
        </div>

        <div className="w-full h-[38px] bg-[#D9D9D9] flex items-center justify-center rounded-b-xl">
        <p className="font-light text-xs">Your points will reflect automatically.</p>
        </div>
        {/* <p className="text-center">
          Show this in any of the participating store in the Philippines.
        </p> */}
      </div>
    </div>
  );
}
