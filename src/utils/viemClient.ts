import { createPublicClient, createWalletClient, custom, http } from "viem";
import { polygonMumbai } from "viem/chains";

export const publicClient = createPublicClient({
  chain: polygonMumbai,
  transport: http(),
});

export const getViemWalletClient = async (wallets: any) => {
  // Switch your wallet to your target chain before getting the viem WalletClient
  await wallets[0]?.switchChain(polygonMumbai.id);
  // Get an EIP1193 provider from the user's wallet
  const ethereumProvider = await wallets[0]?.getEthereumProvider();
  // Create a Viem wallet client from the EIP1193 provider
  const walletClient = await createWalletClient({
    account: `0x${wallets[0].address.substring(2)}`,
    chain: polygonMumbai,
    transport: custom(ethereumProvider),
  });

  // console.log(walletClient);
  return walletClient;
};
