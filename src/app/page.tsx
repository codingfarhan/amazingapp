"use client";
import { client } from "@/client";
import { useEffect } from "react";
import { ConnectButton } from "thirdweb/react";
import {
  useActiveAccount,
  useActiveWalletConnectionStatus,
} from "thirdweb/react";
import { getSocialProfiles } from "thirdweb/social";

export default function Home() {
  const account = useActiveAccount();
  const status = useActiveWalletConnectionStatus();

  async function getProfiles() {
    const profiles = await getSocialProfiles({
      client,
      address: account?.address as string,
    });
    console.log(profiles);
  }

  useEffect(() => {
    if (status == "connected") {
      getProfiles();
    }
  }, [status]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ConnectButton client={client} />
    </main>
  );
}
