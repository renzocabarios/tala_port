import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CircleUser, PersonStanding } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col items-center gap-4 min-w-[360px] w-[360px]">
        <div className="flex items-center justify-between w-full">
          <p>Hi, John Doe</p>

          <CircleUser />
        </div>

        <div className="p-4 gap-4 w-full flex flex-col">
          <div className="flex justify-between items-center w-full">
            <p>icon</p>
            <p>TalaPort</p>
          </div>

          <div className="flex flex-col gap-4 p-4">
            <div className="flex items-center justify-between">
              <p>2821 </p>
              <p>****</p>
              <p>****</p>
              <p>1002</p>
            </div>

            <div className="flex flex-col gap-1">
              <p>Card holder</p>
              <p>Juan Dela Cruz</p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <p>Recent Activity</p>
            <p>Check Points</p>
          </div>

          <div className="p-4 flex items-center justify-between">
            <div className="flex flex-col">
              <p>Consejo’s Grocery Store</p>
              <p>August 24 · 02:20 PM</p>
            </div>
            <p>+20,000</p>
          </div>

          <div className="p-4 flex items-center justify-between">
            <div className="flex flex-col">
              <p>Consejo’s Grocery Store</p>
              <p>August 24 · 02:20 PM</p>
            </div>
            <p>+20,000</p>
          </div>
        </div>
      </div>
    </div>
  );
}
