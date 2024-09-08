"use client";
import ConnectWallet from "@/components/connect-wallet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useAuthByWallet from "@/hooks/useAuthByWallet";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useToast } from "@/components/hooks/use-toast";
export default function Home() {
  const { mutate, isSuccess, isError } = useAuthByWallet();
  const { toast } = useToast();

  const router = useRouter();

  useEffect(() => {
    if (isError) {
      toast({
        title: "Server Error",
        description: "Please contact our customer support",
      });
    }
  }, [isError, toast]);

  useEffect(() => {
    if (isSuccess) {
      router.push("/home");
    }
  }, [isSuccess, router]);

  const onLoginWithWallet = () => {
    mutate();
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col items-center gap-4 min-w-[360px] w-[360px]">
        <p className="text-5xl font-black text-[#22583F]">TalaPort</p>
        <p className="font-medium">Welcome Back!</p>
        {/* Login Form */}
        <Input
          className="w-full"
          type="email"
          name="emailadd"
          placeholder="Email"
        />
        <Input
          className="w-full"
          type="password"
          name="pass"
          placeholder="Password"
        />
        <Button className="w-full bg-[#C2E96A] text-[#22583F]">Login</Button>
        <p className="text-xs font-extralight"> ── or ── </p>
        <Button className="w-full border border-[#0D0818] bg-[#FCFAFF] text-[#CAC8CC]">
          Login with Google
        </Button>
        <Button
          onClick={onLoginWithWallet}
          className="w-full border border-[#0D0818] bg-[#FCFAFF] text-[#CAC8CC]"
        >
          Login with Wallet
        </Button>
        {/* end of login form */}
        <p className="text-xs font-thin">
          Dont have an account?{" "}
          <span className="text-[#22583F] font-normal">
            <Link href={"/register"}> Sign Up</Link>
          </span>
        </p>
      </div>
    </div>
  );
}
