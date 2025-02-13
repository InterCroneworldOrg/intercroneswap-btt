import { SerializedFarmConfig } from './types'
import { CHAIN_ID } from './networks'

const farms: SerializedFarmConfig[] = [].filter((f) => !!f.lpAddresses[CHAIN_ID])

export default farms
