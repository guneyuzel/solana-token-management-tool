import { createMint } from "@solana/spl-token";
import "dotenv/config";
import {
  getKeypairFromEnvironment,
  getExplorerLink,
} from "@solana-developers/helpers";
import { Connection, clusterApiUrl } from "@solana/web3.js";

(async () => {
  // Establish connection to the devnet cluster
  const connection = new Connection(clusterApiUrl("devnet"));

  // Load the user's keypair from the environment variables
  const user = getKeypairFromEnvironment("SECRET_KEY");

  // Log the public key
  console.log(
    `🔑 Loaded our keypair securely, using an env file! Our public key is: ${user.publicKey.toBase58()}`
  );

  // Create a new mint and wait for the transaction to be confirmed
  const tokenMint = await createMint(connection, user, user.publicKey, null, 2);

  // Generate an explorer link for the newly created mint
  const link = getExplorerLink("address", tokenMint.toString(), "devnet");

  // Log the link to the explorer
  console.log(`✅ Finished! Created token mint: ${link}`);
})();
