export interface BaseBuilder {
  userId?: string
  createdAt?: string
  updatedAt?: string
}

export interface SocialMedia extends BaseBuilder {
  value: string
  name: string
}

export interface Wallet extends BaseBuilder {
  wallet: string
  chainId?: number
}

export interface ExternalAccount extends BaseBuilder {
  data: ExternalAccountData
  name: string
}

export interface ExternalAccountData extends BaseBuilder {
  id: string
}

export interface RulesCheckbox {
  checked: boolean
  updatedAt?: string
}

export interface PersonalDetails extends BaseBuilder {
  email?: string
  username?: string
  bio?: string
  banner?: string
  avatar?: string
  firstName?: string
  lastName?: string
  country?: string
  birthDate?: string
}

export interface UserActivity {
  event: string
  price: number
  addresserAddress: string
  recipientAddress: string
  eventDate: string
}

export interface User {
  id: string
  userId: string

  role: string | string[]
  addresses: Wallet[]
  socialMedia: SocialMedia[]
  personalDetails?: PersonalDetails
  externalAccounts: ExternalAccount[]
  rulesCheckbox: RulesCheckbox
  elympicsUserId?: string

  createdAt: string
  updatedAt: string

  activities: UserActivity[]

  engagementPoints?: number
}

export interface CreateAccountPayload {
  walletAddress: string
  signature: string
  personalDetails: PersonalDetails
  query: Object
  rulesCheckbox: { checked: boolean; updatedAt: string }
  rulesCheckboxChecked: boolean
  projectId: string
  hash: string
  referralCode?: string
}

export interface ClickerUser {
  scoreClickerId: string
  leaderboardId: string
  userId: string
  levelId: string
  bonusRefScore: number
  earnPassivePerHour: number
  earnPassivePerSec: number
  earnPerTap: number
  lastPassiveEarn: number
  lastTapUpdate: number
  lastSyncUpdate: number
  showWhitelist: boolean
  showWelcome: boolean
  balanceCoins: number
  totalCoins: number
  levelHasIncreased: boolean
  currentEnergy: number
  currentEnergyLimit: number
  currentEnergyRechargePerSecond: number
  lastEnergyUpdate: number
}

export interface ReferralLevel {
  level: string
  totalScore: number
  userCount: number
  percentage: number
}

export enum PublicUserRole {
  CREATOR = 'creator',
  GAME_DEV = 'game-developer'
}
