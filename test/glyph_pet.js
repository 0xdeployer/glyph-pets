const GlyphPets = artifacts.require("GlyphPets");
const Test721 = artifacts.require("Test721");
const { time } = require("@openzeppelin/test-helpers");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("GlyphPets", function (accounts) {
  it("should assert true", async function () {
    const test = await Test721.new();
    const pets = await GlyphPets.new(test.address);
    const tokenId = "8828941239232";
    await test.mint(tokenId, accounts[0]);
    await pets.adopt(tokenId);
    const svg = await pets.tokenURI.call(tokenId);
    console.log(svg);
  });
});
