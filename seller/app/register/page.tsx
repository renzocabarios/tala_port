"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useCreateAccount from "@/hooks/useCreateAccount";
import {
  IRegisterSchema,
  RegisterSchema,
  RegisterSchemaDefault,
} from "@/lib/schemas/register.schema";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import useSignUp from "@/hooks/useSignUp";

export default function Register() {
  const { mutate, isSuccess } = useCreateAccount();
  const { mutate: signUp, isSuccess: signUpIsSuccess } = useSignUp();

  const router = useRouter();

  useEffect(() => {
    if (isSuccess) {
      router.push("/login");
    }
  }, [isSuccess, router]);

  useEffect(() => {
    if (signUpIsSuccess) {
      router.push("/login");
    }
  }, [signUpIsSuccess, router]);

  const onLoginWithWallet = () => {
    mutate();
  };

  const form = useForm<IRegisterSchema>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: RegisterSchemaDefault,
  });

  function onSignUp(values: IRegisterSchema) {
    signUp({ ...values });
  }

  return (
    <Form {...form}>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="flex flex-col items-center gap-4 min-w-[360px] w-[360px]">
          <p className="text-5xl font-black text-[#22583F]">Talaport</p>

          <p>{"Let's get started!"}</p>

          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input
                    className="w-full"
                    type="text"
                    placeholder="First Name"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input
                    className="w-full"
                    type="text"
                    placeholder="Last Name"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
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
                    placeholder="Email Address"
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
                    placeholder="Email Address"
                    type="password"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            onClick={form.handleSubmit(onSignUp)}
            className="w-full bg-[#C2E96A] text-[#22583F]"
          >
            Sign up
          </Button>

          <p className="text-xs font-thin">
            By signing up, you agree to our{" "}
            <span className="text-[#22583F] font-normal">
              Terms of service{" "}
            </span>{" "}
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
    </Form>
  );
}
