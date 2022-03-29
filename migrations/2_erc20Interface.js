const ERC20Interface = artifacts.require("ERC20Interface");

module.exports = function (deployer) {
  deployer.deploy(ERC20Interface);
};