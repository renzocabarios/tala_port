import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col items-center gap-4 min-w-[360px] w-[360px]">
        <p>John Doe</p>

        <p>john.doe@gmail.com</p>

        <div className="flex items-cener gap-2">
          <p>UID: 625-824-0743 </p>
          <Copy />
        </div>

        <div className="flex flex-col gap-1 w-full">
          <p>Total</p>
          <Input className="w-full" placeholder="Enter amount" />
        </div>

        <Button className="w-full">Confirm</Button>
        <Button className="w-full">Cancel</Button>

      </div>
    </div>
  );
}
