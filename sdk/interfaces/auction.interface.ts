import { Network } from './nftToken.interface'

export enum AssetAuctionsState {
  NO_AUCTIONS,
  ACTIVE_AUCTIONS,
  ENDED_AUCTIONS
}

export enum AuctionProgress {
  INITIAL,
  PENDING,
  CONFIRMING,
  SUCCESS,
  ERROR,
  TRANSACTION_STATUS_ERROR
}

export enum AuctionState {
  LOADING = 'LOADING',
  INCOMING = 'INCOMING',
  ACTIVE = 'ACTIVE',
  ENDED = 'ENDED',
  SOLD_OUT = 'SOLD OUT',
  // for bid accepting (only for auction type === auction)
  ACCEPTING_BIDS = 'ACCEPTING BIDS'
}

export enum AuctionType {
  INS = 'ins',
  BUY_NOW = 'buy',
  AUCTION = 'auction'
}

// Filter keys
export enum AuctionStatusFilterKey {
  ACTIVE = 'ACTIVE',
  INCOMING = 'INCOMING',
  ENDED = 'ENDED'
}

export enum AuctionTypeFilterKey {
  INS = 'INS',
  BUY_NOW = 'BUY_NOW',
  AUCTION = 'AUCTION'
}

export enum AuctionFinalizationStatusFilterKey {
  FINALIZED = 'FINALIZED',
  NOT_FINALIZED = 'NOT_FINALIZED'
}

export enum AuctionOperationFilterKey {
  BUY = 'buy',
  SALE = 'sale'
}

export interface AuctionSchema {
  auctionType: AuctionType
  auctionId: string
  operatorAddress: string
  _tokenId: number
  network: Network
  chainId: number
  contractAuctionId?: number
  auctionContractAddress?: string
  appId?: string
  teamId?: string
  tokenAddress?: string
  transactionHash?: string

  createdAt: string
  updatedAt: string
}
