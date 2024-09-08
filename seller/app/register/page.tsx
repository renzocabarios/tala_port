"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useCreateAccount from "@/hooks/useCreateAccount";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function Register() {
  const { mutate, isSuccess } = useCreateAccount();
  const router = useRouter();

  useEffect(() => {
    if (isSuccess) {
      router.push("/login");
    }
  }, [isSuccess, router]);

  const onLoginWithWallet = () => {
    mutate();
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col items-center gap-4 min-w-[360px] w-[360px]">
        <p className="text-5xl font-black text-[#22583F]">Talaport</p>

        <p>{"Let's get started!"}</p>
        <Input
          className="w-full"
          type="text"
          name="emailadd"
          placeholder="First Name"
        />
        <Input
          className="w-full"
          type="text"
          name="emailadd"
          placeholder="Last Name"
        />
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
        <Input
          className="w-full"
          type="password"
          name="pass"
          placeholder=" Confirm Password"
        />
        <Button className="w-full bg-[#C2E96A] text-[#22583F]">Sign up</Button>

        <p className="text-xs font-thin">
          By signing up, you agree to our{" "}
          <span className="text-[#22583F] font-normal">Terms of service </span>{" "}
          and{" "}
          <span className="text-[#22583F] font-normal">Privacy policy.</span>
        </p>

        <p className="text-xs font-extralight"> ── or ── </p>
        <Button className="w-full border border-[#0D0818] bg-[#FCFAFF] text-[#CAC8CC]">
          Sign up with Google
        </Button>
        <Button
          onClick={onLoginWithWallet}
          className="w-full border border-[#0D0818] bg-[#FCFAFF] text-[#CAC8CC]"
        >
          Sign up with Wallet
        </Button>

        <p className="text-xs font-thin">
          Already have an account?{" "}
          <span className="text-[#22583F] font-normal">Login</span>
        </p>
      </div>
    </div>
  );
}
