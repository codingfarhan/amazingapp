"use client";

import { client } from "@/client";
import { createThirdwebClient } from "thirdweb";
import { avalancheFuji, sepolia } from "thirdweb/chains";
import { Wallet, createWallet, inAppWallet } from "thirdweb/wallets";

export function customNetwork() {
  window.alert("Adding a custom chain...");
}
export function onConnectionSuccessful(wallet: Wallet) {
  window.alert(`Congrats! Connected to ${wallet.id} wallet.`);
}

export function onDisconnectWallet() {
  window.alert("Congrats, wallet has been disconnected!");
}

export const metamaskWallet = createWallet("io.metamask");

export const supportedWallets = [
  inAppWallet({
    auth: {
      mode: "popup",
      options: ["google", "passkey"],
      redirectUrl: "http://localhost:3000/welcome",
    },
    hidePrivateKeyExport: true,
    metadata: {
      image: {
        alt: "Brand Image",
        height: 50,
        width: 100,
        src: "https://logowik.com/content/uploads/images/ethereum3649.jpg",
      },
    },
    smartAccount: {
      sponsorGas: true,
      chain: sepolia,
    },
  }),
];
