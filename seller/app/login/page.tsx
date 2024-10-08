"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useAuthByWallet from "@/hooks/useAuthByWallet";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useToast } from "@/components/hooks/use-toast";
import {
  AuthenticateSchema,
  AuthenticateSchemaDefault,
  IAuthenticateSchema,
} from "@/lib/schemas/authenticate.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useAuthenticate from "@/hooks/useAuthenticate";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export default function Login() {
  const { mutate, isSuccess, isError } = useAuthByWallet();
  const {
    mutate: authenticate,
    isSuccess: authenticateIsSuccess,
    isError: authenticateIsError,
  } = useAuthenticate();
  const { toast } = useToast();

  const router = useRouter();

  useEffect(() => {
    if (authenticateIsError) {
      toast({
        title: "Server Error",
        description: "Please contact our customer support",
      });
    }
  }, [authenticateIsError, toast]);

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

  useEffect(() => {
    if (authenticateIsSuccess) {
      router.push("/home");
    }
  }, [authenticateIsSuccess, router]);

  const form = useForm<IAuthenticateSchema>({
    resolver: zodResolver(AuthenticateSchema),
    defaultValues: AuthenticateSchemaDefault,
  });

  const onLoginWithWallet = () => {
    mutate();
  };

  const onAuthenticate = (value: IAuthenticateSchema) => {
    authenticate({ ...value });
  };

  return (
    <Form {...form}>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="flex flex-col items-center gap-4 min-w-[360px] w-[360px]">
          <p className="text-5xl font-black text-[#22583F]">TalaPort</p>
          <p className="font-medium">Welcome Back!</p>
          {/* Login Form */}

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    className="w-full"
                    type="text"
                    placeholder="Email"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    className="w-full"
                    type="password"
                    placeholder="Password"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            onClick={form.handleSubmit(onAuthenticate)}
            className="w-full bg-[#C2E96A] text-[#22583F]"
          >
            Login
          </Button>
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
    </Form>
  );
}
