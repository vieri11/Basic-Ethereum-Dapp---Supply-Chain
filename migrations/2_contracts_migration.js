const SupplyChain = artifacts.require("SupplyChain");
const erc20Token = artifacts.require("erc20Token");

module.exports = function (deployer) {
  deployer.deploy(SupplyChain);
  deployer.deploy(erc20Token, 10000, "Total Seminar Token", 18, "TotalSem") ;
};