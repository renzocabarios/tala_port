"use client";
import { useMutation } from "@tanstack/react-query";
import { API_INSTANCE } from "@/lib/http";
import { useWallet } from "@solana/wallet-adapter-react";

interface IAuthenticateArgs {
  email: string;
  password: string;
}

export default function useAuthenticate() {
  const { publicKey } = useWallet();

  const mutation = useMutation({
    mutationFn: async (args: IAuthenticateArgs) => {
      if (publicKey) {
        return await API_INSTANCE.post("api/v1/auth", {
          ...args,
        });
      }
      throw Error();
    },
  });

  return { ...mutation };
}
