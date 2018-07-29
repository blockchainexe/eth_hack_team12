module.exports = {
  networks: {
    rinkeby: {
      host: "localhost", // Connect to geth on the specified
      port: 8545,
      from: "0xc7a9d60dcc69b9e954fc1009d6b8b5277f6cbf2f", // default address to use for any transaction Truffle makes during migrations
      network_id: 4,
      gas: 4712388 // Gas limit used for deploys
    }
  }
};
