"use client";
import { inAppWallet } from "thirdweb/wallets";
import { useConnect, useActiveWalletConnectionStatus } from "thirdweb/react";
import { client } from "@/client";
import { preAuthenticate } from "thirdweb/wallets/in-app";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationCodeSent, setVerificationCodeSent] = useState(false);
  const { connect } = useConnect();
  const status = useActiveWalletConnectionStatus();

  const sendVerificationCode = async () => {
    await preAuthenticate({
      client,
      strategy: "email",
      email, // ex: user@example.com
    });
    setVerificationCodeSent(true);
  };

  const handleLogin = async () => {
    await connect(async () => {
      const wallet = inAppWallet();
      await wallet.connect({
        client,
        strategy: "email",
        email,
        verificationCode,
      });
      return wallet;
    });
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <input
        type="email"
        placeholder="Enter your Email here"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          color: "black",
        }}
      />
      {verificationCodeSent && (
        <input
          type="text"
          placeholder="Enter Verification code"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
          style={{
            color: "black",
          }}
        />
      )}
      {!verificationCodeSent ? (
        <button onClick={sendVerificationCode}>Send Verification Code.</button>
      ) : (
        <button onClick={handleLogin}>Verify</button>
      )}
      Wallet Connection Status: {status}
    </main>
  );
}
