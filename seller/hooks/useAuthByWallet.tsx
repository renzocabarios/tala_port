"use client";
import React from "react";
import { useMutation } from "@tanstack/react-query";
import { decodeUTF8, encodeBase64 } from "tweetnacl-util";
import { API_INSTANCE } from "@/lib/http";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";

const message = "The quick brown fox jumps over the lazy dog";
const messageBytes = decodeUTF8(message);

export default function useAuthByWallet() {
  const { signMessage, publicKey, connected } = useWallet();
  const walletModal = useWalletModal();

  const mutation = useMutation({
    mutationFn: async () => {
      if (!connected) {
        walletModal.setVisible(true);
      }

      if (signMessage && publicKey) {
        const signature = await signMessage(messageBytes);

        const response = await API_INSTANCE.post("api/v1/auth/wallet", {
          signature: encodeBase64(signature),
          walletAddress: publicKey,
        });

        if (response.data.status === "fail") {
          throw Error();
        }

        return response;
      }
      throw Error();
    },
  });

  return { ...mutation };
}
