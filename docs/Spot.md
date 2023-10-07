# Spot









## Methods

### addToken

```solidity
function addToken(string token, address tokenAddress) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| token | string | undefined
| tokenAddress | address | undefined

### chainId

```solidity
function chainId() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### completedOrder

```solidity
function completedOrder(string id, address orderOwner, uint256 swapRatio) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| id | string | undefined
| orderOwner | address | undefined
| swapRatio | uint256 | undefined

### depositToken

```solidity
function depositToken(string inToken, uint256 amount) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| inToken | string | undefined
| amount | uint256 | undefined

### getChainId

```solidity
function getChainId() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### getOrder

```solidity
function getOrder(string _id) external view returns (struct Spot.Order)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _id | string | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | Spot.Order | undefined

### getTokenAddress

```solidity
function getTokenAddress(string token) external view returns (address)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| token | string | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### getTokenBalance

```solidity
function getTokenBalance(string token) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| token | string | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### order

```solidity
function order(string id, string inToken, string outToken, uint256 amount) external payable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| id | string | undefined
| inToken | string | undefined
| outToken | string | undefined
| amount | uint256 | undefined

### orders

```solidity
function orders(address, string) external view returns (string id, string inToken, string outToken, uint256 amount)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined
| _1 | string | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| id | string | undefined
| inToken | string | undefined
| outToken | string | undefined
| amount | uint256 | undefined

### owner

```solidity
function owner() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### removeToken

```solidity
function removeToken(string token) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| token | string | undefined

### tokens

```solidity
function tokens(string) external view returns (address)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### updateChainId

```solidity
function updateChainId(uint256 _chainId) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _chainId | uint256 | undefined

### withdrawToken

```solidity
function withdrawToken(string outToken, uint256 amount, address _to) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| outToken | string | undefined
| amount | uint256 | undefined
| _to | address | undefined



## Events

### CompleteOrderEvent

```solidity
event CompleteOrderEvent(Spot.Order _order)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _order  | Spot.Order | undefined |

### OrderEvent

```solidity
event OrderEvent(Spot.Order _order)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _order  | Spot.Order | undefined |



