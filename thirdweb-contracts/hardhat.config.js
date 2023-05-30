/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.9',
    defaultNetwork: 'mumbai',
    networks: {
      hardhat: {},
      mumbai: {
        url: 'https://polygon-mumbai.g.alchemy.com/v2/f6k3KCMTuhCll4HVhmiyaZWDGxpkFFbo',
        accounts: ["80ece692ca12026fc0e22c8a30fede47908513e49d86eddb8598f02e51f23f19"]
      }
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
