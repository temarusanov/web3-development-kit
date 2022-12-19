import { get } from 'env-var'
import { HardhatUserConfig } from "hardhat/types"
import "@nomiclabs/hardhat-waffle"
import "@nomiclabs/hardhat-ethers"
import "hardhat-deploy"
import "hardhat-abi-exporter"
import "@nomiclabs/hardhat-etherscan"
import "@openzeppelin/hardhat-upgrades"
import "solidity-coverage"
import "hardhat-gas-reporter"
import "./tasks"

const config: HardhatUserConfig = {
    defaultNetwork: "hardhat",
    solidity: {
        compilers: [
            {
                version: "0.8.12",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
        ],
    },
    paths: {
        tests: "./tests",
        artifacts: "./build/artifacts",
        cache: "./build/cache",
        deployments: "./build/deployments",
    },
    gasReporter: {
        currency: "USD",
        coinmarketcap: get('COINMARKETCAP_API_KEY').asString(),
        token: get('TOKEN').asString(),
        gasPriceApi: get('GAS_PRICE_API').asString(),
        enabled: get('REPORT_GAS').asBool(),
        maxMethodDiff: 10,
    },
    networks: {
        hardhat: {},
        localhost: {
            url: "http://127.0.0.1:8545",
        },
        ethereum: {
            url: get('NODE_URL').required().asUrlString(),
            accounts: {
                mnemonic: get('MNEMONIC').required().asString(),
            },
            chainId: 1,
        },
        goerli: {
            url: get('NODE_URL').required().asUrlString(),
            accounts: {
                mnemonic: get('MNEMONIC').required().asString(),
            },
        },
        avalanche: {
            url: get('NODE_URL').default("https://api.avax.network/ext/bc/C/rpc").required().asUrlString(),
            accounts: {
                mnemonic: get('MNEMONIC').required().asString(),
            },
        },
        fuji: {
            url: get('NODE_URL').default("https://api.avax-test.network/ext/bc/C/rpc").required().asUrlString(),
            accounts: {
                mnemonic: get('MNEMONIC').required().asString(),
            },
        },
    },
    namedAccounts: {
        deployer: 0,
    },
    etherscan: {
        apiKey: get('ETHERSCAN_API_KEY').default("API_KEY_WEB").asString(),
    },
    abiExporter: {
        path: "./build/abis",
        runOnCompile: true,
        clear: true,
        flat: true,
        only: [],
        spacing: 2,
        pretty: false,
    },
}

export default config
