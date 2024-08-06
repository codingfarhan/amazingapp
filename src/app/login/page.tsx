"use client";
import { client } from "@/client";
import { ConnectButton } from "thirdweb/react";

export default function Login() {
  return (
    <div>
      <ConnectButton client={client} />
    </div>
  );
}
