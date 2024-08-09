import { client } from "@/client";
import { ConnectButton } from "thirdweb/react";
import {
  polygon,
  arbitrum,
  bsc,
  ethereum,
  base,
  sepolia,
} from "thirdweb/chains";
import CustomConnectButton from "./components/CustomConnectButton";
import ConnectModalFooter from "@/app/components/ConnectButton/components/ConnectModalFooter";
import {
  customNetwork,
  metamaskWallet,
  // onConnectionSuccessful,
  // onDisconnectWallet,
} from "@/app/utility";

import ChainComponent from "./components/ChainComponent";
import { supportedWallets } from "@/app/utility";
export default function NewConnectButton() {
  return (
    <ConnectButton
      client={client}
      appMetadata={{
        name: "DeFi App",
        url: "https://defiapp.com",
        description: "The greates DeFi app on Earth!",
        logoUrl:
          "https://www.google.com/imgres?q=ethereum%20logo&imgurl=https%3A%2F%2Fcdn.icon-icons.com%2Ficons2%2F2429%2FPNG%2F512%2Fethereum_logo_icon_147293.png&imgrefurl=https%3A%2F%2Ficon-icons.com%2Ficon%2Fethereum-logo%2F147293&docid=MzaYs5xcyl38hM&tbnid=4a43cuQaUNVjEM&vet=12ahUKEwje4qPM6N-HAxWwSGwGHRsIDokQM3oECFgQAA..i&w=512&h=512&hcb=2&ved=2ahUKEwje4qPM6N-HAxWwSGwGHRsIDokQM3oECFgQAA",
      }}
      autoConnect={{ timeout: 10000 }}
      chain={polygon}
      chains={[polygon, arbitrum, bsc]}
      // connectButton={{
      //   label: "Click me to Connect to Wallet!",
      //   className: "my-custom-class",
      //   style: {
      //     backgroundColor: "yellow",
      //   },
      // }}
      connectModal={{
        privacyPolicyUrl: "https://privacy.com",
        showThirdwebBranding: false,
        size: "wide",
        termsOfServiceUrl: "https://lame.com",
        title: "Connect your wallet!",
        titleIcon:
          "https://logowik.com/content/uploads/images/ethereum3649.jpg",
        // welcomeScreen: {
        //   img: {
        //     height: 30,
        //     src: "https://logowik.com/content/uploads/images/ethereum3649.jpg",
        //     width: 30,
        //   },
        //   subtitle: "Welcome to my app",
        //   title: "Welcome!",
        // },
      }}
      // detailsButton={{
      //   render: CustomConnectButton,
      //   displayBalanceToken: {
      //     // show USDC balance when connected to Ethereum mainnet or Polygon
      //     [ethereum.id]: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
      //     [polygon.id]: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
      //   },
      //   style: {
      //     backgroundColor: "blue",
      //   },
      // }}
      detailsModal={{
        footer: ConnectModalFooter,
        hideDisconnect: false,
        showTestnetFaucet: true,
        networkSelector: {
          onCustomClick: customNetwork,
          sections: [
            { label: "Recently used", chains: [arbitrum, polygon] },
            { label: "Popular", chains: [base, ethereum] },
          ],
          renderChain: ChainComponent,
        },
      }}
      // onConnect={onConnectionSuccessful}
      // onDisconnect={onDisconnectWallet}
      showAllWallets={false}
      recommendedWallets={[metamaskWallet]}
      supportedNFTs={{
        // when connected to Ethereum mainnet - show Pudgy Penguins
        1: ["0xBd3531dA5CF5857e7CfAA92426877b022e612cf8"],
      }}
      supportedTokens={{
        // when connected to "Base" mainnet - show balance of DAI stablecoin
        1: [
          {
            address: "0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb", // token contract address
            name: "Dai Stablecoin",
            symbol: "DAI",
            icon: "https://assets.coingecko.com/coins/images/9956/small/Badge_Dai.png?1687143508",
          },
        ],
      }}
      switchButton={{
        label: "You are on the wrong chain buddy!",
        style: {
          backgroundColor: "red",
          color: "white",
          fontSize: "large",
        },
      }}
      theme={"light"}
      walletConnect={{ projectId: "5429c78089da86fe28228440c7d4ef64" }}
      wallets={supportedWallets}
      accountAbstraction={{
        factoryAddress: "0xe01876422d5c68De82FB66F9841C52BeE0d56f97",
        chain: sepolia,
        gasless: true,
      }}
    />
  );
}
