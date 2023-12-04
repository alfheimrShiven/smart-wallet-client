import { Wallet } from "ethers";
let ethersWallet;
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
//# sourceMappingURL=smart-wallet.js.map