"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/login");
  }, [router]);

  return (
    <div className="w-full flex justify-center">
      {/* <div className="flex flex-col items-center gap-4 min-w-[360px] w-[360px]">

        <p>
          Talaport
        </p >

        <p>
          Welcome Back
        </p>
        <Input className="w-full" />
        <Input className="w-full" />
        <Button className="w-full">Login</Button>

        <p>
          or
        </p>
        <Button className="w-full">Login with Google</Button>
        <Button className="w-full">Login with Wallet</Button>

        <p>
          Dont have an account? <span>Sign Up</span>
        </p>
      </div > */}
    </div>
  );
}
