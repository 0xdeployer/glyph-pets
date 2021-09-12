// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract Test721 is ERC721Enumerable {
  constructor() ERC721("", "") {}

  function mint(uint256 tokenId, address to) public {
    _mint(to, tokenId);
  }
}
