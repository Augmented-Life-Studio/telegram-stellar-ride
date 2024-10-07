import React from 'react'
import { LayoutProps, SpaceProps, OpacityProps } from 'styled-system'
import styled from 'styled-components'
import { FallbackImage, FallbackImageWrapper } from '../FallbackImage/FallbackImage'
import { ContainerType, getAssetPath } from '@/utils/handleStaticAssetOperations'

interface ThumbnailImageProps extends LayoutProps, SpaceProps, OpacityProps {
  containerType?: ContainerType
  assetPath?: string
  borderRadius?: string
  useWrapper?: boolean
  onLoadingComplete?: () => void
  crop?: number
}

const StyledFallbackImage = styled(FallbackImage)<{ borderRadius?: string; crop?: number }>`
  border-radius: ${({ borderRadius }) => borderRadius || '0'};
  clip-path: inset(${({ crop }) => crop || 0}px);
`

const ThumbnailImage: React.FC<ThumbnailImageProps> = ({
  assetPath,
  containerType = ContainerType.LOGOS,
  borderRadius,
  useWrapper,
  onLoadingComplete,
  crop,
  ...rest
}) => {
  const getComponentWithWrapper = (child) => <FallbackImageWrapper {...rest}>{child}</FallbackImageWrapper>
  const imageComponent = (
    <StyledFallbackImage
      borderRadius={borderRadius}
      crop={crop}
      loader={({ src }) => src}
      src={getAssetPath(containerType, assetPath)}
      quality={100}
      layout="fill"
      objectFit="cover"
      objectPosition="center"
      defaultImageSrc={getAssetPath(containerType)}
      loading="lazy"
      {...{ onLoadingComplete }}
    />
  )

  return useWrapper ? getComponentWithWrapper(imageComponent) : imageComponent
}

export default ThumbnailImage
