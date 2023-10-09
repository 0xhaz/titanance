// SPDX-License-Identifier: MIT
pragma solidity >=0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract Spot{
    using SafeERC20 for IERC20;

    uint256 public chainId;
    address public owner;
    mapping(string => address) public tokens;
    mapping(address => mapping(string => Order)) public orders;

    event OrderEvent(Order _order);
    event CompleteOrderEvent(Order _order);

    struct Order{
        string id;
        address owner;
        string inToken;
        string outToken;
        uint256 amount;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    constructor(
        uint256 _chainId,
        string[] memory _tokens,
        address[] memory _tokenAddress
    ){
        uint256 _tokensLength = _tokens.length;
        uint256 _tokensAddressLength = _tokenAddress.length;
        require(_tokensLength == _tokensAddressLength, "Not match support token");
        for (uint256 i = 0; i < _tokensLength; i++) {
            tokens[_tokens[i]] = _tokenAddress[i];
        }
        owner = msg.sender;
        chainId = _chainId;
    }


    function order(
        string memory id,
        string memory inToken,
        string memory outToken,
        uint256 amount
    ) external payable{
        //deposite token
        depositToken(inToken, amount);

        // create order
        orders[msg.sender][id] = Order(id, msg.sender, inToken, outToken, amount);

        emit OrderEvent(Order(id, msg.sender, inToken, outToken, amount));
    }

    function cancelOrder(string memory id) public {
        Order memory _order = orders[msg.sender][id];
        require((msg.sender==_order.owner || msg.sender == owner), "Only owner can be cancel orders");
        withdrawToken(_order.inToken, _order.amount, _order.owner);
        delete orders[_order.owner][id];
        emit CompleteOrderEvent(_order);
    }

    function completedOrder(
        string memory id,
        address orderOwner,
        uint256 swapRatio
    ) external onlyOwner{
        Order memory _order = orders[orderOwner][id];
        withdrawToken(_order.outToken, _order.amount*swapRatio/10**9, orderOwner);
        delete orders[orderOwner][id];
        emit CompleteOrderEvent(_order);
    }


    function depositToken(string memory inToken, uint256 amount) public {
        if(!isPrimaryCoin(inToken)){
            ERC20 token = ERC20(tokens[inToken]);
            require(token.transferFrom(msg.sender, address(this), amount), "Token deposit failed");
        }
    }

    function withdrawToken(string memory outToken, uint256 amount, address _to) public onlyOwner{
        if(isPrimaryCoin(outToken)){
            payable(_to).transfer(amount);
        }else{
            IERC20 tokenOut = IERC20(tokens[outToken]);
            tokenOut.safeTransfer(_to, amount);
        }
    }

    function addToken(string memory token, address tokenAddress) public onlyOwner{
        tokens[token] = tokenAddress;
    }

    function removeToken(string memory token) public onlyOwner{
        delete tokens[token];
    }

    function updateChainId(uint256 _chainId) public onlyOwner{
        chainId = _chainId;
    }


    ////////// GETTER ////////
    function getTokenAddress(string memory token) public view returns(address){
        return tokens[token];
    }

    function getTokenBalance(string memory token) public view returns(uint256){
        if(isPrimaryCoin(token)){
            return address(this).balance;
        }else{
            IERC20 _token = IERC20(tokens[token]);
            return _token.balanceOf(address(this));
        }
    }

    function isPrimaryCoin(string memory token ) private view returns(bool) {
        if(chainId == 0){
            return false;
        }
        if(chainId == 97 || chainId==56){
            bytes32 hashA = keccak256(bytes("BNB"));
            bytes32 hashB = keccak256(bytes(token));
            return hashA == hashB;
        }else if(chainId == 80001 || chainId==137){
            bytes32 hashA = keccak256(bytes("MATIC"));
            bytes32 hashB = keccak256(bytes(token));
            return hashA == hashB;
        }else{
            bytes32 hashA = keccak256(bytes("ETH"));
            bytes32 hashB = keccak256(bytes(token));
            return  hashA == hashB;
        }
    }

    function getChainId() public view returns(uint256){
        return chainId;
    }

    function getOrder(string memory _id) public view returns(Order memory){
        return orders[msg.sender][_id];
    }
}