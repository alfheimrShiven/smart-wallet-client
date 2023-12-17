import { ethers, HDNodeWallet, Wallet } from "ethers";
import * as shamir from 'shamir-secret-sharing';

let walletAddress: string;
let walletPrivateKey: string;
let walletPublicKey: string;

function createWallet() {
    let newWallet: HDNodeWallet = ethers.Wallet.createRandom();
    walletAddress = newWallet.address;
    walletPublicKey = newWallet.publicKey;
    walletPrivateKey = newWallet.privateKey;
    let mnemonic: ethers.Mnemonic | null = newWallet.mnemonic;

    console.log(`Wallet created ${walletAddress}, \n with public key: ${walletPublicKey}, \n private key: ${walletPrivateKey}`);
}

async function splitPrivateKeyIntoShards() {
    const [share1, share2, share3] = await shamir.split(toUint8Array(walletPrivateKey), 3, 2);
    console.log("Share 1:", share1);
    console.log("Share 2:", share2);
    console.log("Share 3:", share3);

    const reconstructed = await shamir.combine([share1, share3]);
    console.log("Do the shares reconstruct the privateKey back:", (reconstructed) === (toUint8Array(walletPrivateKey))); // true
}

const toUint8Array = (data: string) => new TextEncoder().encode(data);

document.addEventListener('DOMContentLoaded', () => {
    const createWalletButton = document.getElementById('createWalletBtn');
    if (createWalletButton) {
        createWalletButton.addEventListener('click', createWallet);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const shardButton = document.getElementById('createShards');
    if (shardButton) {
        shardButton.addEventListener('click', splitPrivateKeyIntoShards);
    }
});

