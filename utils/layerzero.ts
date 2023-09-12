import { LZ_ADDRESS } from "@layerzerolabs/lz-sdk"

export function getLayerZeroAddress(networkName:string) {

    if(!Object.keys(LZ_ADDRESS).includes(networkName)){
        return undefined
    }
    return LZ_ADDRESS[networkName];
}