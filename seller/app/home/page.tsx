import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  // Sample data for transactions
  const transactions = [
    { name: "Jay Consejo", points: "+20,000.00", date: "29 Aug 2024" },
    { name: "Renzo Cabarios", points: "+1,000.00", date: "27 Aug 2024" },
    { name: "Mylis Rosel", points: "+500.00", date: "22 Aug 2024" },
    { name: "Adriana Cayube", points: "+250.00", date: "18 Aug 2024" },
    { name: "Renzo Cabarios", points: "+100.00", date: "15 Aug 2024" },
  ];

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#ffffff]">
      <div className="flex flex-col items-center gap-5 w-full max-w-[360px]">
        {/* Logo and Header */}
        <div className="p-2 w-full flex items-center">
          <Image src="/logo.png" alt="Logo" width={20} height={20} />
          <p className="ml-2 text-s font-bold text-[#22583F]">
            {"Jay&apos;s Sari Sari Store"}
          </p>
        </div>

        {/* Total Points Section */}
        <div className="rounded-lg text-left p-4 mb-3 bg-[#ECEFE4] w-full">
          <p className="text-lg font-bold text-[#645856]">Total Points Given</p>
          <p className="text-6xl font-semibold text-[#645856] mt-1">
            100,000.00
          </p>
        </div>

        {/* Transactions Section */}
        <div className="rounded-lg w-full p-4 bg-[#ECEFE4]">
          <p className="text-3xl font-bold mb-2 text-[#645856]">Transactions</p>
          {transactions.map((transaction, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-0.10 mb-1"
            >
              <div className="flex flex-col">
                <span className="text-xs text-[#645856]">
                  Total points sent to
                </span>
                <span className="text-xl text-[#645856] font-medium">
                  {transaction.name}
                </span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-xs text-[#645856]">
                  {transaction.date}
                </span>
                <span className="text-xl font-bold text-[#645856]">
                  {transaction.points}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex mt-0.5 w-full justify-center items-center p-2">
          <button className="px-4 py-2 rounded-lg bg-white border border-gray-300">
            &lt;
          </button>
          <div className="flex space-x-2 mx-1">
            <button className="px-4 py-2 rounded-lg bg-white border border-gray-300">
              1
            </button>
            <button className="px-4 py-2 rounded-lg bg-[#C2E96A] text-[#22583F]">
              2
            </button>
            <button className="px-4 py-2 rounded-lg bg-white border border-gray-300">
              ...
            </button>
            <button className="px-4 py-2 rounded-lg bg-white border border-gray-300">
              9
            </button>
            <button className="px-4 py-2 rounded-lg bg-white border border-gray-300">
              10
            </button>
          </div>
          <button className="px-4 py-2 rounded-lg bg-white border border-gray-300">
            &gt;
          </button>
        </div>

        {/* Bottom Navigation */}
        <div className="rounded-lg w-full flex justify-around bg-[#ffffff] py-9">
          <button className="text-l text-[#22583F]">Home</button>
          <button className="text-l text-[#22583F]">Scanner</button>
          <button className="text-l text-[#22583F]">Settings</button>
        </div>
      </div>
    </div>
  );
}
