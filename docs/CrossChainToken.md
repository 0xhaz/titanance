# CrossChainToken









## Methods

### DEFAULT_PAYLOAD_SIZE_LIMIT

```solidity
function DEFAULT_PAYLOAD_SIZE_LIMIT() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### allowance

```solidity
function allowance(address owner, address spender) external view returns (uint256)
```



*See {IERC20-allowance}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | undefined
| spender | address | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### approve

```solidity
function approve(address spender, uint256 amount) external nonpayable returns (bool)
```



*See {IERC20-approve}. NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| spender | address | undefined
| amount | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined

### balanceOf

```solidity
function balanceOf(address account) external view returns (uint256)
```



*See {IERC20-balanceOf}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| account | address | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### bridge

```solidity
function bridge(uint16 dstChainId, uint256 _amount) external payable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| dstChainId | uint16 | undefined
| _amount | uint256 | undefined

### decimals

```solidity
function decimals() external view returns (uint8)
```



*Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the default value returned by this function, unless it&#39;s overridden. NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint8 | undefined

### decreaseAllowance

```solidity
function decreaseAllowance(address spender, uint256 subtractedValue) external nonpayable returns (bool)
```



*Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| spender | address | undefined
| subtractedValue | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined

### failedMessages

```solidity
function failedMessages(uint16, bytes, uint64) external view returns (bytes32)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint16 | undefined
| _1 | bytes | undefined
| _2 | uint64 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined

### forceResumeReceive

```solidity
function forceResumeReceive(uint16 _srcChainId, bytes _srcAddress) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _srcChainId | uint16 | undefined
| _srcAddress | bytes | undefined

### getConfig

```solidity
function getConfig(uint16 _version, uint16 _chainId, address, uint256 _configType) external view returns (bytes)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _version | uint16 | undefined
| _chainId | uint16 | undefined
| _2 | address | undefined
| _configType | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes | undefined

### getTrustedRemoteAddress

```solidity
function getTrustedRemoteAddress(uint16 _remoteChainId) external view returns (bytes)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _remoteChainId | uint16 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes | undefined

### increaseAllowance

```solidity
function increaseAllowance(address spender, uint256 addedValue) external nonpayable returns (bool)
```



*Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| spender | address | undefined
| addedValue | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined

### isTrustedRemote

```solidity
function isTrustedRemote(uint16 _srcChainId, bytes _srcAddress) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _srcChainId | uint16 | undefined
| _srcAddress | bytes | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined

### lzEndpoint

```solidity
function lzEndpoint() external view returns (contract ILayerZeroEndpoint)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract ILayerZeroEndpoint | undefined

### lzReceive

```solidity
function lzReceive(uint16 _srcChainId, bytes _srcAddress, uint64 _nonce, bytes _payload) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _srcChainId | uint16 | undefined
| _srcAddress | bytes | undefined
| _nonce | uint64 | undefined
| _payload | bytes | undefined

### minDstGasLookup

```solidity
function minDstGasLookup(uint16, uint16) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint16 | undefined
| _1 | uint16 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### name

```solidity
function name() external view returns (string)
```



*Returns the name of the token.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined

### nonblockingLzReceive

```solidity
function nonblockingLzReceive(uint16 _srcChainId, bytes _srcAddress, uint64 _nonce, bytes _payload) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _srcChainId | uint16 | undefined
| _srcAddress | bytes | undefined
| _nonce | uint64 | undefined
| _payload | bytes | undefined

### owner

```solidity
function owner() external view returns (address)
```



*Returns the address of the current owner.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### payloadSizeLimitLookup

```solidity
function payloadSizeLimitLookup(uint16) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint16 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### precrime

```solidity
function precrime() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.*


### retryMessage

```solidity
function retryMessage(uint16 _srcChainId, bytes _srcAddress, uint64 _nonce, bytes _payload) external payable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _srcChainId | uint16 | undefined
| _srcAddress | bytes | undefined
| _nonce | uint64 | undefined
| _payload | bytes | undefined

### setConfig

```solidity
function setConfig(uint16 _version, uint16 _chainId, uint256 _configType, bytes _config) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _version | uint16 | undefined
| _chainId | uint16 | undefined
| _configType | uint256 | undefined
| _config | bytes | undefined

### setMinDstGas

```solidity
function setMinDstGas(uint16 _dstChainId, uint16 _packetType, uint256 _minGas) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _dstChainId | uint16 | undefined
| _packetType | uint16 | undefined
| _minGas | uint256 | undefined

### setPayloadSizeLimit

```solidity
function setPayloadSizeLimit(uint16 _dstChainId, uint256 _size) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _dstChainId | uint16 | undefined
| _size | uint256 | undefined

### setPrecrime

```solidity
function setPrecrime(address _precrime) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _precrime | address | undefined

### setReceiveVersion

```solidity
function setReceiveVersion(uint16 _version) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _version | uint16 | undefined

### setSendVersion

```solidity
function setSendVersion(uint16 _version) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _version | uint16 | undefined

### setTrustedRemote

```solidity
function setTrustedRemote(uint16 _remoteChainId, bytes _path) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _remoteChainId | uint16 | undefined
| _path | bytes | undefined

### setTrustedRemoteAddress

```solidity
function setTrustedRemoteAddress(uint16 _remoteChainId, bytes _remoteAddress) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _remoteChainId | uint16 | undefined
| _remoteAddress | bytes | undefined

### symbol

```solidity
function symbol() external view returns (string)
```



*Returns the symbol of the token, usually a shorter version of the name.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined

### totalSupply

```solidity
function totalSupply() external view returns (uint256)
```



*See {IERC20-totalSupply}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### transfer

```solidity
function transfer(address to, uint256 amount) external nonpayable returns (bool)
```



*See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `amount`.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| to | address | undefined
| amount | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined

### transferFrom

```solidity
function transferFrom(address from, address to, uint256 amount) external nonpayable returns (bool)
```



*See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `amount`. - the caller must have allowance for ``from``&#39;s tokens of at least `amount`.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| from | address | undefined
| to | address | undefined
| amount | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined

### transferOwnership

```solidity
function transferOwnership(address newOwner) external nonpayable
```



*Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newOwner | address | undefined

### trustAddress

```solidity
function trustAddress(uint16 dstChainId, address _otherContract) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| dstChainId | uint16 | undefined
| _otherContract | address | undefined

### trustedRemoteLookup

```solidity
function trustedRemoteLookup(uint16) external view returns (bytes)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint16 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes | undefined



## Events

### Approval

```solidity
event Approval(address indexed owner, address indexed spender, uint256 value)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| owner `indexed` | address | undefined |
| spender `indexed` | address | undefined |
| value  | uint256 | undefined |

### MessageFailed

```solidity
event MessageFailed(uint16 _srcChainId, bytes _srcAddress, uint64 _nonce, bytes _payload, bytes _reason)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _srcChainId  | uint16 | undefined |
| _srcAddress  | bytes | undefined |
| _nonce  | uint64 | undefined |
| _payload  | bytes | undefined |
| _reason  | bytes | undefined |

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| previousOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |

### RetryMessageSuccess

```solidity
event RetryMessageSuccess(uint16 _srcChainId, bytes _srcAddress, uint64 _nonce, bytes32 _payloadHash)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _srcChainId  | uint16 | undefined |
| _srcAddress  | bytes | undefined |
| _nonce  | uint64 | undefined |
| _payloadHash  | bytes32 | undefined |

### SetMinDstGas

```solidity
event SetMinDstGas(uint16 _dstChainId, uint16 _type, uint256 _minDstGas)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _dstChainId  | uint16 | undefined |
| _type  | uint16 | undefined |
| _minDstGas  | uint256 | undefined |

### SetPrecrime

```solidity
event SetPrecrime(address precrime)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| precrime  | address | undefined |

### SetTrustedRemote

```solidity
event SetTrustedRemote(uint16 _remoteChainId, bytes _path)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _remoteChainId  | uint16 | undefined |
| _path  | bytes | undefined |

### SetTrustedRemoteAddress

```solidity
event SetTrustedRemoteAddress(uint16 _remoteChainId, bytes _remoteAddress)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _remoteChainId  | uint16 | undefined |
| _remoteAddress  | bytes | undefined |

### Transfer

```solidity
event Transfer(address indexed from, address indexed to, uint256 value)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| from `indexed` | address | undefined |
| to `indexed` | address | undefined |
| value  | uint256 | undefined |



