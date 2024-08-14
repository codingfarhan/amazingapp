// import NewConnectButton from "./components/ConnectButton/NewConnectButton";
import NewConnectEmbed from "./components/ConnectEmbed/NewConnectEmbed";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <NewConnectButton /> */}
      <NewConnectEmbed />
    </main>
  );
}
