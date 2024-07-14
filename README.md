# Solana Token Management Tool

This project provides a suite of tools for developers working with the Solana blockchain, specifically focusing on token management tasks such as creating tokens, minting tokens, transferring tokens, and managing token metadata. These tools are designed to be used in a development environment, particularly targeting the Solana Devnet for testing purposes.

## Overview

The project consists of several TypeScript files, each designed to perform specific tasks within the token lifecycle on the Solana blockchain. Below is a brief overview of each file and its purpose:

### 1. `create-token-mint.ts`

This script is responsible for creating a new token mint on the Solana blockchain. A token mint is essentially a factory for producing tokens of a particular type. This script uses the `@solana/spl-token` library to create the mint and outputs a link to the Solana Explorer where the newly created mint can be viewed.

### 2. `create-token-account.ts`

After creating a token mint, the next step is to create a token account that can hold tokens of that mint. This script facilitates the creation of an associated token account for a specified mint and user. It outputs a link to the Solana Explorer for the newly created token account.

### 3. `mint-tokens.ts`

With a token mint and account in place, this script allows for minting (creating) new tokens and depositing them into a token account. The script specifies the amount of tokens to mint and the recipient account, then confirms the transaction with a link to the Solana Explorer.

### 4. `transfer-tokens.ts`

This script is used to transfer tokens from one account to another. It requires the sender's token account, the recipient's token account, and the amount of tokens to transfer. Upon successful transfer, it provides a confirmation with a link to the transaction on the Solana Explorer.

### 5. `create-token-metadata.ts`

This script adds metadata to a token mint, which is essential for tokens that represent assets with additional information, such as NFTs. The metadata includes details like the token's name, symbol, and a URI pointing to an external resource with more information (e.g., an image or webpage). The script confirms the addition of metadata with a link to the Solana Explorer.

## Usage

To use these scripts, you will need to have Node.js installed on your machine, as well as the necessary Solana command-line tools. Each script is designed to be run independently, depending on the specific task you wish to perform.

Before running the scripts, ensure you have set up the necessary environment variables, including your Solana keypair, as these scripts rely on them for authentication and transaction signing.

## Contributing

This is a free, open-source project intended for developers working on the Solana blockchain. Contributions, bug reports, and feature requests are welcome. Please feel free to fork the repository and submit pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.