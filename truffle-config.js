const keys = require("./keys.ignore");
const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */
  plugins: ["truffle-plugin-verify"],
  api_keys: {
    etherscan: keys.etherscan,
  },

  networks: {
    development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 8545, // Standard Ethereum port (default: none)
      network_id: "*", // Any network (default: none)
    },
    live: {
      provider() {
        return new HDWalletProvider(
          keys.privateKey,
          `https://mainnet.infura.io/v3/${keys.infuraLive}`
        );
      },
      network_id: 1,
    },
    rinkeby: {
      provider() {
        return new HDWalletProvider(
          keys.privateKey,
          `https://rinkeby.infura.io/v3/${keys.infuraRinkeby}`
        );
      },
      network_id: 4,
    },
  },

  mocha: {
    timeout: 10000000000000000000000000000,
    reporter: "eth-gas-reporter",
    reporterOptions: {
      enabled: true,
      currency: "USD",
      gasPrice: 82,
      coinmarketcap: keys.coinmarketcap,
    },
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.0", // Fetch exact version from solc-bin (default: truffle's version)
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },
};
