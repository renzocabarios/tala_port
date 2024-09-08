"use client";

import React, { useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { BitgetWalletAdapter } from "@solana/wallet-adapter-wallets";

import { clusterApiUrl } from "@solana/web3.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

require("@solana/wallet-adapter-react-ui/styles.css");

const queryClient = new QueryClient();

interface IProvidersProps {
  children: React.ReactNode;
}
export default function Providers({ children }: IProvidersProps) {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={[new BitgetWalletAdapter()]} autoConnect>
        <WalletModalProvider>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
