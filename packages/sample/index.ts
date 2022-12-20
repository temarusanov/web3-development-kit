import { getMainnetSdk } from '@dethcrypto/eth-sdk-client'
import { ethers } from 'ethers'

async function main() {
  const mainnetProvider = ethers.getDefaultProvider('mainnet')
  const defaultSigner = ethers.Wallet.createRandom().connect(mainnetProvider)

  const sdk = getMainnetSdk(defaultSigner) 

  return await sdk.tokens.usdc.balanceOf(defaultSigner.address)
}

main()
  .then((balance) => console.log(balance))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })