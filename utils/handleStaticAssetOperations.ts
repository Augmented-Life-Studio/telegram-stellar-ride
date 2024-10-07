export enum ContainerType {
  AVATARS = 'avatars',
  BANNERS = 'banners',
  LOGOS = 'logos',
  GALLERY = 'gallery',
  CREATOR = 'creator',
  PREVIEWS = 'previews'
}

export enum ServiceType {
  USERS = 'users',
  TEAMS = 'teams',
  APPS = 'apps',
  PREVIEWS = 'previews'
}

export enum OperationEnum {
  CREATE = 'rac',
  DELETE = 'rd'
}

const DEFAULT_AVATAR_PATH = '/images/avatardefault.png'
const DEFAULT_LOGO_PATH = '/images/avatardefault.png'

export const getAssetPath = (containerType: ContainerType, assetPath?: string) => {
  if (!assetPath) {
    switch (containerType) {
      case ContainerType.AVATARS:
        return DEFAULT_AVATAR_PATH
      case ContainerType.LOGOS:
        return DEFAULT_LOGO_PATH
    }
  }
  if (assetPath.includes('ipfs://')) {
    const gatewayURL = assetPath.replace('ipfs://', 'https://ipfs.io/ipfs/')
    return gatewayURL
  }
  return assetPath
}
