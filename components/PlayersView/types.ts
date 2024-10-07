import { App, Challenge } from '@/sdk/interfaces'

export enum ScoresType {
  LEADERBOARD = 'leaderboard',
  CHALLENGE = 'challenge'
}

export interface ChallengeData {
  challenge: Challenge
  game: App
}

export interface LeaderboardData {
  game: App
}

export type ScoresData =
  | {
      type: ScoresType.CHALLENGE
      challenge: Challenge
      game?: App
    }
  | {
      type: ScoresType.LEADERBOARD
      challenge?: never
      game: App
    }
