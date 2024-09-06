import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function SuccessScreen() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#ffffff]">
      <div className="flex flex-col items-center gap-5 w-full max-w-[360px]">

        {/* Header Section */}
        <h1 className="text-5xl font-bold text-[#22583F]">TalaPort</h1>
        <p className="text-3xl font-bold text-[#22583F]">Transaction Success!</p>

        {/* Icon (Check Mark) */}
        <div className="w-40 h-40 bg-[#C2E96A] flex items-center justify-center rounded-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-30 w-30 text-[#22583F]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Transaction Details */}
        <div className="rounded-lg text-left p-5 bg-[#ECEFE4] w-full">
          <p className="text-center text-l text-[#645856]">Check your account to see your points.</p>

          {/* Transaction Info in 2 Columns */}
          <div className="text-base mt-4 grid grid-cols-2 gap-y-2 p-3 bg-[#f2f5e9] rounded-lg shadow text-[#645856] ">
            <span>Transaction ID</span>
            <span className="text-base text-right">TID3872XG9</span>
            <span>Sent to</span>
            <span className="text-base text-right">Jay Consejo</span>
            <span>Points given</span>
            <span className="text-base text-right">+20,000.00</span>
            <span>Date</span>
            <span className="text-base text-right">September 5, 2024</span>
          </div>
        </div>

        {/* Done Button */}
        <Button className="w-full text-[#22583F] bg-[#C2E96A] text-lg py-3 rounded-lg">
          Done
        </Button>
      </div>
    </div>
  );
}
