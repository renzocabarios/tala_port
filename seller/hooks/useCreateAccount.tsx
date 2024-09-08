"use client";

import React from "react";
import { useMutation } from "@tanstack/react-query";
import nacl from "tweetnacl";
import { decodeUTF8, encodeBase64 } from "tweetnacl-util";
import { API_INSTANCE } from "@/lib/http";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";

const message = "The quick brown fox jumps over the lazy dog";
const messageBytes = decodeUTF8(message);

export default function useCreateAccount() {
  const { signMessage, publicKey, connected } = useWallet();
  const walletModal = useWalletModal();

  const mutation = useMutation({
    mutationFn: async () => {
      if (!connected) {
        walletModal.setVisible(true);
      }

      if (signMessage && publicKey) {
        const signature = await signMessage(messageBytes);

        return await API_INSTANCE.post("api/v1/users", {
          signature: encodeBase64(signature),
          walletAddress: publicKey,
        });
      }

      throw Error();
    },
  });

  return { ...mutation };
}
