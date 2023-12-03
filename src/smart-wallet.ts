import { Wallet } from "ethers";

export type WalletData = {
    address: string;
    strategy: "mnemonic" | "privateKey" | "encryptedJson";
    data: string;
    isEncrypted: boolean;
};
let ethersWallet: Wallet;

/**
* creates a new random wallet
* @returns the address of the newly created wallet
*/
async function createWallet() {
    if (ethersWallet) {
        throw new Error("wallet is already initialized");
    }

    ethersWallet = new Wallet("SHIVEN");
    console.log("Creating Wallet");
    console.log(ethersWallet.address);
    console.log(ethersWallet.privateKey);
}

// Get the button element
const createWalletButton = document.getElementById('createWalletBtn');

// Attach click event listener to the button
if (createWalletButton)
    createWalletButton.addEventListener('click', createWallet);