import { User } from './user.interface'

// Meta asset
export enum Network {
  BNB_CHAIN = 'bnb-chain',
  ETHEREUM = 'ethereum',
  POLYGON = 'polygon',
  ARBITRUM = 'arbitrum',
  BASE = 'base'
}

export enum NftProtocol {
  METAPROTOCOL = 'metaprotocol',
  CITIZEN_CONFLICT = 'citizenconflict',
  WIZARRE = 'wizarre',
  APES_PLANET = 'apesplanet',
  PIRATES_OF_THE_ARRLAND = 'piratesofthearrland',
  MAGIC_CRAFT = 'magiccraft',
  CRYPTO_MAYHEM = 'cryptomayhem',
  ACADEMY_VERSE = 'academyverse',
  KRYXIVIA = 'kryxivia',
  HAREVERSE = 'hareverse',
  ROBOHERO = 'robohero',
  HEROES_BATTLE_ARENA = 'heroesbattlearena',
  METARRIOR_HERO = 'metarriorhero',
  LEGENDS_OF_ELYSIUM = 'legendsofelysium',
  PLAYERMON = 'playermon',
  LAMBORGHINI = 'lamborghini',
  MEDIEVAL_EMPIRES = 'medievalempires'
}

export enum NftStandard {
  ERC_721 = 'erc721',
  ERC_1155 = 'erc1155'
}

export enum MetaAssetType {
  TWO_DIMENSIONAL = '2D meta asset',
  THREE_DIMENSIONAL = '3D meta asset',
  SOUND = 'Sound meta asset'
}

export enum MetaAssetLicence {
  ROYALTY_FREE = 'Royalty Free (RF)',
  RIGHTS_MANAGED = 'Rights Managed (RM)',
  CREATIVE_COMMONS = 'Creative Commons (CC)'
}

export enum MetaAssetRestriction {
  PUBLIC = 'Public meta asset',
  RESTRICTED = 'Restricted meta asset'
}

export interface TokenDetails {
  tokenDetails: NftSchema
  creatorUsername: string
  contractAddress: string
}

export enum MetaAssetGeometry {
  POLYGONAL_QUADS_ONLY = 'Polygonal Quads only',
  POLYGONAL_QUADS_TRIS = 'Polygonal Quads/Tris',
  POLYGONAL_TRIS_ONLY = 'Polygonal Tris only',
  POLYGONAL_QUADS_NGONS = 'Polygonal Ngons',
  POLYGONAL_SUBDIVISION = 'Polygonal, Subdivision',
  NURBS = 'NURBS',
  UNKNOWN = 'Unknown'
}

export enum MetaAssetChain {
  BNB = 'BNB Chain',
  ETHEREUM = 'Ethereum',
  POLYGON = 'Polygon',
  ARBITRUM = 'Arbitrum',
  BASE = 'Base'
}

export enum MetaAssetSampleRate {
  KHZ_44_1 = '44.1 kHz',
  KHZ_48 = '48 kHz'
}

export enum MetaAssetChannel {
  STEREO = 'Stereo',
  MONO = 'Mono'
}

// Property
export enum PropertyType {
  BOOST_PERCENTAGE = 'boost_percentage',
  BOOST_NUMBER = 'boost_number',
  LEVEL = 'level'
}

export enum AttributeType {
  BOOST_PERCENTAGE = 'boost_percentage',
  BOOST_NUMBER = 'boost_number',
  NUMBER = 'number',
  DATE = 'date'
}

export interface FilesSchema {
  key: string
  value: unknown | unknown[]
  value_type: string
}

export interface PropertyV3Schema {
  name: string
  value: string | number
  display_value?: string
  display_type?: PropertyType
  max_value?: number
}

export type PropertiesV1 = FilesSchema[]

export interface PropertiesV2 {
  item_experiance: FilesSchema[]
  common: {
    standard: FilesSchema[]
    '2d_spec': FilesSchema[]
    '3d_spec': FilesSchema[]
    sound_spec: FilesSchema[]
  }
}

export interface PropertiesV3 {
  [key: string]: string | PropertyV3Schema
}

export type Properties = PropertiesV1 | PropertiesV2 | PropertiesV3

// Properties V3 details
export type Property = Omit<PropertyV3Schema, 'max_value' | 'display_type'>

export type Level = Omit<PropertyV3Schema, 'display_value' | 'display_type'> & {
  value: number
  max_value: number
  display_type: PropertyType.LEVEL
}

export type Boost = Pick<PropertyV3Schema, 'name'> & {
  display_type: PropertyType.BOOST_NUMBER | PropertyType.BOOST_PERCENTAGE
  value: number
}

export interface MetaAssetProperties {
  collection?: string
  properties?: Property[]
  levels?: Level[]
  boosts?: Boost[]
}

export type Attribute = Pick<PropertyV3Schema, 'value' | 'display_value' | 'max_value'> & {
  trait_type: string
  display_type?: AttributeType
}

export type Attributes = Attribute[]

export type FilesSpec = PropertiesV2

export interface NftTokenSchema {
  _id: string
  address: string
  owner: string
  _tokenId: number
  _quantity: number
  _bucketHash: string
  creationBlock: number
  description: string
  image: string
  minifiedImage?: string
  extraFiles?: string[]
  tokenName: string
  createdBy: string
  initialOwner: string
  favorites?: number
  wishes?: number
  properties?: Properties
  // V3 - files specyfication (previous properties)
  filesSpec?: FilesSpec
  // Opensea standard
  attributes?: Attributes
  createdAt: string
  updatedAt: string
  transactionHash: string
  burn: boolean
  isBlacklisted?: boolean
}

export interface NftSchema {
  address: string
  contractAddress: string
  standard: NftStandard
  protocol: NftProtocol
  network: Network
  creationBlock: number
  createdAt: string
  createdBy: string
  version: number
  isListed: boolean
  isAsset: boolean
  symbol?: string
  chainId: number
  token: NftTokenSchema
}

export interface TagSchema {
  tagId: number
  name: string
  _id?: string
  createdAt?: Date
  usage?: number
  updatedAt?: Date
}

export interface NftCategory {
  name: string
  categoryId: number
  parentId?: number
  usage?: number
  createdAt?: Date
  updatedAt?: Date
}

export interface RichNftData {
  token: NftSchema
  user?: User
}

export interface TokenData {
  tokenId: number
  contractAddress: string
}

export interface AggregatedNft {
  latestTokens: NftSchema[]
  createdCount: number
  newestCount: number
  creatorAddress: string
}

export interface AggregatedNftCollection extends AggregatedNft {
  collectionName: string
  chainIds: number[]
  protocols: string[]
}

export interface RichAggregatedNftData extends AggregatedNft {
  user?: User
}

export interface AssetAggregatedCollection {
  count: number
  name: string
  createdBy: string
}

export interface AssetAggregatedPropertyValue {
  value: string | number
  count: number
}

export interface AssetAggregatedProperty {
  name: string
  values: AssetAggregatedPropertyValue[]
}

export interface SingleAggregatedAssetProperty {
  name: string
  values: string[]
}

export interface CollectionQP {
  createdBy: string
  collectionName: string
}
