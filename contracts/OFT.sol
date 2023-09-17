// SPDX-License-Identifier: MIT
pragma solidity >=0.8.17;

import "./lzApp/NonblockingLzApp.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract OmnichainFungibleToken is NonblockingLzApp, ERC20 {
    constructor(
        string memory _name,
        string memory _symbol,
        address _endpoint,
        uint256 _initialSupplyOnMainEndpoint
    ) NonblockingLzApp(_endpoint) ERC20(_name, _symbol) {
        _mint(msg.sender, _initialSupplyOnMainEndpoint*10**decimals());
    }

    function _nonblockingLzReceive(uint16, bytes memory, uint64, bytes memory _payload) internal override {
       (address toAddress, uint amount) = abi.decode(_payload, (address,uint));
       _mint(toAddress, amount);
    }

    function bridge(uint16 dstChainId, uint _amount) public payable {
        _burn(msg.sender, _amount);
        bytes memory payload = abi.encode(msg.sender, _amount);
        _lzSend(dstChainId, payload, payable(msg.sender), address(0x0), bytes(""), msg.value);
    }

    function trustAddress(uint16 dstChainId, address _otherContract) public onlyOwner {
        trustedRemoteLookup[dstChainId] = abi.encodePacked(_otherContract, address(this));   
    }
}
