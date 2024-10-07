import { User } from './user.interface'

export enum LeaderboardState {
  LOADING = 'loading',
  INCOMING = 'incoming',
  ACTIVE = 'active',
  ENDED = 'ended'
}

export enum ChallengeStatus {
  INCOMING = 'incoming',
  ACTIVE = 'active',
  ENDED = 'ended'
}

export interface Challenge {
  challengeId: string
  leaderboardId: string
  startDate: Date
  endDate: Date
  map?: number
  elympicsGameId: string
  pricePool?: string
}

export interface RichChallenge extends Challenge {
  mapData: Map
  top3Scores: Score[]
  personalScore?: Score
}

export interface RoundData {
  score: number
  diamonds: number
  jumps: number
}

export interface Score {
  _id: string
  elympicsUserId: string
  endedAt: Date
  map: number
  matchId: string
  position: number
  roundData: RoundData
  updatedAt: Date
  walletAddress: string
  scoreMapId: string
  leaderboardId: string
  userId: string
  startedAt: Date
}

export interface ScoreTotal {
  _id: string
  scoreTotalId: string
  leaderboardId: string
  userId: string
  currentRoundData: {
    score: number
    diamonds: number
    jumps: number
    time: number
  }
  totalRoundData: {
    score: number
    diamonds: number
    jumps: number
    time: number
  }
  createdAt: Date
  updatedAt: Date
}

export interface ScoreTotalPersonal {
  scores: ScoreTotal[]
  mainScore: ScoreTotal
}

export interface UserScore {
  user: User
  userScore: Score
}

export interface Map {
  gameId: string
  mapId: number
  name: string
  image?: string
  imageMobile?: string
}
