// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.20;    

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "hardhat/console.sol";

contract ElonNFT is ERC721URIStorage {

    //Counters.Counter private _tokenIds -- replaced with below
    uint private _tokenIds;

    constructor() ERC721("ElonMusk", "ELON") {}

    function mintNFT() public returns (uint256) {
        // _tokenIds.increment() -- replaced with below
        _tokenIds++;
        //uint256 newItemId = _tokenIds.current(); -- replaced with below
        uint newItemId = _tokenIds;
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, "https://tomato-vivacious-gecko-588.mypinata.cloud/ipfs/QmTCqdwu9WDxpKmj9YaEHjR32bbxrj27PptdHG5JHbTxEs?_gl=1*1ym02ow*_ga*MzI5MDcwMTUyLjE3MDQwMTU3ODA.*_ga_5RMPXG14TE*MTcwNDAxNTc4MC4xLjEuMTcwNDAxODU2NS42MC4wLjA.");
        console.log(
            "The NFT ID %s has been minted to %s",
            newItemId,
            msg.sender
        );
        return newItemId;
    }
}