import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CircleUser, Copy, PersonStanding } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col items-center gap-4 min-w-[360px] w-[360px]">
        <p>My QR Code</p>

        <div className="h-[192px] w-[192px] p-4 bg-gray-400 flex items-center justify-center">
          <p>Insert QR Code</p>
        </div>

        <div className="flex items-cener gap-2">
          <p>UID: 625-824-0743 </p>
          <Copy />
        </div>

        <p className="text-center">Your points will reflect automatically.</p>
        <p className="text-center">
          {" "}
          Show this in any of the participating store in the Philippines.
        </p>
      </div>
    </div>
  );
}
