import { ethers, HDNodeWallet, Wallet } from "ethers";

function createWallet() {
    let newWallet: HDNodeWallet = ethers.Wallet.createRandom();
    let walletAddress: string = newWallet.address;
    let walletPublicKey: string = newWallet.publicKey;
    let walletPrivateKey: string = newWallet.privateKey;
    let mnemonic: ethers.Mnemonic | null = newWallet.mnemonic;

    console.log(`Wallet created ${walletAddress}, \n with public key: ${walletPublicKey}, \n private key: ${walletPrivateKey}`);
}

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('createWalletBtn');
    if (button) {
        button.addEventListener('click', createWallet);
    }
});

