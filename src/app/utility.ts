"use client";

import { Wallet, createWallet } from "thirdweb/wallets";

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
  createWallet("global.safe"),
  createWallet("com.exodus"),
];
