const GlyphPets = artifacts.require("GlyphPets");

module.exports = async function (deployer, network, accounts) {
  if (process.env.NODE_ENV === "test") return;

  const gasPrice = web3.utils.toWei("80", "gwei");
  const params = {
    from: accounts[0],
    gasPrice,
  };

  await deployer.deploy(
    GlyphPets,
    web3.utils.toChecksumAddress("0x8b7f316b8b771d7cb82192ef189ce5e3c29af532"),
    {
      ...params,
    }
  );
};
