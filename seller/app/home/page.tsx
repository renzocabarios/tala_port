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

        <div className="w-full flex flex-col gap-1">
          <p>Recent Customer</p>

          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <CircleUser />
              <div className="flex flex-col">
                <p>John Doe</p>
                <p>jonh.doe@gmail.com</p>
              </div>
            </div>

            <p>+20,000</p>
          </div>

          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <CircleUser />
              <div className="flex flex-col">
                <p>John Doe</p>
                <p>jonh.doe@gmail.com</p>
              </div>
            </div>

            <p>+20,000</p>
          </div>

          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <CircleUser />
              <div className="flex flex-col">
                <p>John Doe</p>
                <p>jonh.doe@gmail.com</p>
              </div>
            </div>

            <p>+20,000</p>
          </div>
        </div>
      </div>
    </div>
  );
}
