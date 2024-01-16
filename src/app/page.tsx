"use client"
import SignUpForm from "@/components/SignUpForm";
import { ThirdwebProvider, embeddedWallet, AreonNetworkTestnet, smartWallet } from "@/providers/ThirdwebProvider";



export default function page() {

  const config = {
    chain: AreonNetworkTestnet, // the chain where your smart wallet will be or is deployed
    factoryAddress: `${process.env.NEXT_PUBLIC_ACCOUNT_FACTORY_ADDRESS}`, // your own deployed account factory address
    clientId: `${process.env.NEXT_PUBLIC_CLIENT_ID}`, // Use client id if using on the client side, get it from dashboard settings
    secretKey: "", // Use secret key if using on the server, get it from dashboard settings
    gasless: true, // enable or disable gasless transactions
  };

  return (
    <ThirdwebProvider
      activeChain={AreonNetworkTestnet}
      clientId={process.env.NEXT_PUBLIC_CLIENT_ID}
      supportedWallets={[
        smartWallet(embeddedWallet(), config),
        embeddedWallet({
          auth: {
            options: ["email", "facebook", "apple", "google"],
          }
        })
      ]}
    >
      <div className="h-full w-full  flex justify-center items-center">

        <SignUpForm />
      </div>
    </ThirdwebProvider>
  )
}
