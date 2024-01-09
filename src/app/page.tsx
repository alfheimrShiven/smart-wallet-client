"use client"
import SignUpForm from "@/components/SignUpForm";
import { ThirdwebProvider, embeddedWallet, ConnectWallet, EmbeddedWallet, AreonNetworkTestnet } from "@/providers/ThirdwebProvider";



export default function page() {

  return (
    <ThirdwebProvider
      activeChain={AreonNetworkTestnet}
      clientId={process.env.NEXT_PUBLIC_CLIENT_KEY}
      supportedWallets={[
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
