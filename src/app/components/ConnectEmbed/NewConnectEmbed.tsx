import {
  metamaskWallet,
  onConnectionSuccessful,
  supportedWallets,
} from "@/app/utility";
import { client } from "@/client";
import { arbitrum, avalanche, ethereum, polygon } from "thirdweb/chains";
import { ConnectEmbed } from "thirdweb/react";
import CustomWelcomeScreenEmbed from "./components/CustomWelcomeScreen";

export default function NewConnectEmbed() {
  return (
    <ConnectEmbed
      client={client}
      modalSize="wide"
      appMetadata={{
        name: "DeFi App",
        url: "https://defiapp.com",
        description: "The greates DeFi app on Earth!",
        logoUrl:
          "https://www.google.com/imgres?q=ethereum%20logo&imgurl=https%3A%2F%2Fcdn.icon-icons.com%2Ficons2%2F2429%2FPNG%2F512%2Fethereum_logo_icon_147293.png&imgrefurl=https%3A%2F%2Ficon-icons.com%2Ficon%2Fethereum-logo%2F147293&docid=MzaYs5xcyl38hM&tbnid=4a43cuQaUNVjEM&vet=12ahUKEwje4qPM6N-HAxWwSGwGHRsIDokQM3oECFgQAA..i&w=512&h=512&hcb=2&ved=2ahUKEwje4qPM6N-HAxWwSGwGHRsIDokQM3oECFgQAA",
      }}
      autoConnect={false}
      chain={arbitrum}
      chains={[ethereum, polygon, avalanche]}
      //   style={{
      //     backgroundColor: "red",
      //   }}
      //   locale="de_DE"
      onConnect={onConnectionSuccessful}
      privacyPolicyUrl="https://privacy.com"
      termsOfServiceUrl="https://service.com"
      recommendedWallets={[metamaskWallet]}
      showAllWallets={false}
      showThirdwebBranding={false}
      theme={"light"}
      wallets={supportedWallets}
      welcomeScreen={CustomWelcomeScreenEmbed}
    />
  );
}
