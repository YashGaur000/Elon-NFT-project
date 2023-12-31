// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "hardhat/console.sol";

contract ElonNFT is ERC721URIStorage{

    uint private _tokenIds;

    constructor() ERC721("ElonMusk","ELON"){}

    function mintNFT() public returns (uint256){
        _tokenIds++;
        uint newItemId = _tokenIds;

        _mint(msg.sender,newItemId);
        _setTokenURI(newItemId,"FIrst elon ORIGINAL NFT");
        console.log("The NFT minted %s for address %s",
        newItemId,msg.sender
        );
        return newItemId;
    }       
}