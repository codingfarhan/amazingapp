import { client } from "@/client";
import { ConnectButton } from "thirdweb/react";
import { supportedWallets } from "./utility";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ConnectButton
        client={client}
        autoConnect={true}
        wallets={supportedWallets}
      />
    </main>
  );
}
