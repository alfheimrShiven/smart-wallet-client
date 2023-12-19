import { HDNodeWallet, ethers, Contract, Interface } from "ethers";
import AccountRecoveryContractABIJSON from "./account-recovery-abi.json";
import * as shamir from 'shamir-secret-sharing';

let walletAddress: string;
let walletPrivateKey: string;
let walletPublicKey: string;
// share with AccountRecovery.sol contract
const CONTRACT_ADDRESS: string = "0x2ACDe8bc8567D49CF2Fe54999d4d4A1cd1a9fFEA";
const RPC_URL: string = "http://localhost:8545";

async function getContract() {
    const provider = new ethers.JsonRpcProvider(RPC_URL);
    const signer = await provider.getSigner();
    const AccountRecoveryContractABI = new Interface(AccountRecoveryContractABIJSON.abi);

    return new Contract(CONTRACT_ADDRESS, AccountRecoveryContractABI, signer);
}

function createWallet() {
    let newWallet: HDNodeWallet = ethers.Wallet.createRandom();
    walletAddress = newWallet.address;
    walletPublicKey = newWallet.publicKey;
    walletPrivateKey = newWallet.privateKey;

    console.log(`Wallet created ${walletAddress}, \n with public key: ${walletPublicKey}, \n private key: ${walletPrivateKey}`);
}

async function splitPrivateKeyIntoShards() {
    const privateKey: any = toUint8Array(walletPrivateKey);
    const [share1, share2, share3] = await shamir.split(privateKey, 3, 2);

    const privateKeyShardsArray: Uint8Array[] = [share1, share2, share3];
    const AccountRecoveryContract = await getContract();
    const tx = await AccountRecoveryContract.storePrivateKeyShards(privateKeyShardsArray);
    await tx.wait();
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
