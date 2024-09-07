import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function PaymentConfirmation() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#F6F6F6]">
      <div className="flex flex-col items-center gap-5 w-full max-w-[360px] bg-white rounded-lg p-6 shadow-lg">
        
        {/* Logo and Header */}
        <div className="w-full text-center">
          <h1 className="text-5xl font-bold text-[#22583F]">TalaPort</h1>
          <p className="text-lg text-[#333333] font-semibold">Payment Confirmation</p>
        </div>

        {/* User Profile Section */}
        <div className="flex flex-col items-center">
          <Image
            src="/path/to/user-avatar.png" // Replace with the correct image path
            alt="User Avatar"
            width={64}
            height={64}
            className="rounded-full"
          />
          <p className="text-xl font-semibold text-[#333333] mt-2">Renzo Cabarios</p>
          <p className="text-sm text-gray-500">sampleuser@gmail.com</p>
        </div>

        {/* Instructions */}
        <div className="w-full text-center">
          <p className="text-sm text-gray-600">
            Instructions: Enter the total amount purchased by your customer to give them points!
          </p>
        </div>

        {/* Input Field */}
        <div className="w-full mt-4">
          <Input
            type="number"
            placeholder="Enter amount"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3 w-full mt-4">
          <Button className="bg-[#C2E96A] text-[#22583F] w-full py-2 rounded-lg font-semibold">
            Confirm
          </Button>
          <Button className="bg-[#E0E0E0] text-[#888888] w-full py-2 rounded-lg font-semibold">
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}
