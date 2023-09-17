// SPDX-License-Identifier: MIT
pragma solidity >=0.8.17;

import "./OFT.sol";

contract CrossChainToken is OmnichainFungibleToken {
    constructor(
        string memory _name,
        string memory _symbol,
        address _endpoint,
        uint256 _initialSupplyOnMainEndpoint
    ) OmnichainFungibleToken(_name, _symbol, _endpoint, _initialSupplyOnMainEndpoint) {}
}
