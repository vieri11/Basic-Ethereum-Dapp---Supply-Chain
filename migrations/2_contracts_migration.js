const SupplyChain = artifacts.require("supplyChain");
const erc20Token = artifacts.require("ERC20");

module.exports = function (deployer) {
  deployer.deploy(SupplyChain);
  deployer.deploy(erc20Token, 10000, "Total Seminar Token", 18, "TotalSem") ;
};