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

    console.log("Creating Wallet");

    ethersWallet = new Wallet("0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80");
    console.log(ethersWallet.address);
    console.log(ethersWallet.privateKey);
}

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('createWalletBtn');
    if (button) {
        button.addEventListener('click', createWallet);
    }
});

// // Get the button element
// const createWalletButton = document.getElementById('createWalletBtn');

// // Attach click event listener to the button
// if (createWalletButton)
//     createWalletButton.addEventListener('click', createWallet);