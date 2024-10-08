"use client";

import { useMutation } from "@tanstack/react-query";
import { API_INSTANCE } from "@/lib/http";
import { useWallet } from "@solana/wallet-adapter-react";

interface ISignUpArgs {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
}

export default function useSignUp() {
  const { publicKey } = useWallet();

  const mutation = useMutation({
    mutationFn: async (args: ISignUpArgs) => {
      if (publicKey) {
        return await API_INSTANCE.post("api/v1/users", {
          ...args,
        });
      }

      throw Error();
    },
  });

  return { ...mutation };
}
