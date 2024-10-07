export enum ReferralCodeStatus {
  REQUIRED = 'required',
  OPTIONAL = 'optional',
  DISABLED = 'disabled'
}

export interface ReferralSettings {
  referralSettingsId: string
  projectId: string
  referralCodeStatus: ReferralCodeStatus
  referralLevelsConfiguration?: { [key: string]: number }
}
