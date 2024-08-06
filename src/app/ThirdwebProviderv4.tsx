"use client";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export function ThirdwebProviderV4({
  children,
  clientId,
}: {
  children: React.ReactNode;
  clientId: string;
}) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ThirdwebProvider
        clientId={clientId}
        autoConnect={false}
        autoConnectTimeout={100}
      >
        {children}
      </ThirdwebProvider>
    </QueryClientProvider>
  );
}
