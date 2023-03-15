import { Keypair } from "@solana/web3.js";
import secret from "./guideSecret.json";
import { Base64 } from "js-base64";

const WALLET = Keypair.fromSecretKey(new Uint8Array(secret));

const a = Base64.fromUint8Array(WALLET.secretKey);
console.log(a);
console.log(WALLET.publicKey);
