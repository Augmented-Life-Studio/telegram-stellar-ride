import { Network } from './nftToken.interface'
import { SocialMedia } from './user.interface'

export enum AppPath {
  LOADING = '/',
  LOGIN = '/login',
  CHALLENGES = '/challenges',
  LEADERBOARD = '/leaderboard',
  PROFILE = '/profile',
  NOT_FOUND = '/404'
}

export enum AppItemStatusEnum {
  SELECTED_FOR_DEV = 'selected for development',
  IN_PROGRESS = 'in progress',
  IMPLEMENTED = 'implemented'
}

export enum AppCategory {
  ACTION = 'Action',
  ADVENTURE = 'Adventure',
  ARCADE = 'Arcade',
  BATTLE_ROYALE = 'Battle Royale',
  CASINO_POKER = 'Casino&Poker',
  CASUAL = 'Casual',
  EDUCATION = 'Education',
  FIGHTING = 'Fighting',
  FLYING = 'Flying',
  HORROR = 'Horror',
  INTERACTIVE_STORY = 'Interactive Story',
  METAVERSE = 'Metaverse',
  MUSIC_RYTHM = 'Music&Rhythm',
  PUZZLE = 'Puzzle',
  RPG = 'RPG - Role-playing Games',
  RACING = 'Racing',
  SHOOTING = 'Shooting',
  SIMULATION = 'Simulation',
  SOCIAL = 'Social',
  SPORT = 'Sport',
  STRATEGY = 'Strategy'
}

export enum AppStatus {
  IN_DEVELOPMENT = 'in development',
  RELEASED = 'released'
}

export enum AppEngine {
  UNITY = 'Unity',
  UNREAL_ENGINE = 'Unreal engine',
  RED_ENGINE = 'RED engine',
  ELYMPICS = 'Elympics',
  OTHER = 'Other'
}

export enum AppPlatform {
  WINDOWS = 'windows',
  OCULUS = 'oculus',
  MAC_OS = 'macos',
  XBOX = 'xbox',
  PLAYSTATION = 'playstation',
  ANDROID = 'android',
  IOS = 'ios',
  BROWSER = 'browser',
  OTHER = 'other',
  APP_STORE = 'appstore'
}

export interface AppBase {
  name: string
  team: string // team name
  teamId: string
  categories: AppCategory[]
  platform: Platform[]
  gallery: string[]
  status: AppStatus
  favorites?: number
  wishes?: number
  releaseDate?: string
  engine?: AppEngine
  description?: string
  website?: string
  networks?: Network[]
  protocols?: string[]
  socialMedia?: SocialMedia[]
  patchkitAppId?: string
  internal?: boolean
  leaderboardId?: string
}

export interface Platform {
  platform: string
  storeUrl: string
}

export interface AppSchema {
  itemId: string
  address: string
  developmentStatus: AppItemStatusEnum
  appId: string
  teamId: string
  _tokenId: number

  createdBy: string
  createdAt: string
}

export interface App extends AppBase {
  appId: string
  appKey?: string

  items?: AppSchema[]

  createdBy: string
  createdAt: string
  updatedAt: string
}
