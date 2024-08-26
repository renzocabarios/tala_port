import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col items-center gap-4 min-w-[360px] w-[360px]">
        <p>Talaport</p>

        <p>Welcome to PayPort</p>
        <Input className="w-full" placeholder="First Name" />
        <Input className="w-full" placeholder="Last Name" />
        <Input className="w-full" placeholder="Email" />
        <Input className="w-full" placeholder="Password" type="password" />
        <Input
          className="w-full"
          placeholder="Confirm Password"
          type="password"
        />

        <div className="items-top flex space-x-2">
          <Checkbox id="terms1" />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="terms1"
              className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Accept terms and conditions
            </label>
            <p className="text-xs text-muted-foreground">
              I agree with PayPort’s Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>

        <Button className="w-full">Sign Up</Button>

        <p>
          Already have an account? <span>Sign In</span>
        </p>

        <Button className="w-full">Sign In with Google</Button>
      </div>
    </div>
  );
}
