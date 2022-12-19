import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"
import { ERC20Mock } from "@contracts-sdk"

declare module "mocha" {
    export interface Context {
        // SIGNERS
        signers: SignerWithAddress[]
        owner: SignerWithAddress
        alice: SignerWithAddress
        bob: SignerWithAddress
        carol: SignerWithAddress
        tema: SignerWithAddress
        misha: SignerWithAddress

        // CONTRACTS
        token1: ERC20Mock
        token2: ERC20Mock
        token3: ERC20Mock
    }
}