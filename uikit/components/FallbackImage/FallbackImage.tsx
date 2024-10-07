import React, { useState, useEffect } from 'react'
import Image, { ImageProps } from 'next/legacy/image'
import { layout, LayoutProps, space, SpaceProps, OpacityProps, opacity } from 'styled-system'
import styled from 'styled-components'
import { Flex } from '../Flex'
import { ContainerType, getAssetPath } from '@/utils/handleStaticAssetOperations'

export interface FallbackImageProps extends ImageProps {
  defaultImageSrc: string
}

export const FallbackImageWrapper = styled(Flex)<SpaceProps & LayoutProps & OpacityProps>`
  position: relative;
  overflow: hidden;
  ${space}
  ${layout}
  ${opacity}
`

export const SmallAssetThumbnailWrapper = styled(FallbackImageWrapper)`
  width: 112px;
  aspect-ratio: 1 / 1;
  border-radius: 8px;
  margin-right: 16px;
`

export const FallbackImage: React.FunctionComponent<FallbackImageProps> = ({ src, defaultImageSrc, ...rest }) => {
  const [imgSrc, setImgSrc] = useState(src)

  useEffect(() => {
    setImgSrc(src)
  }, [src])

  return (
    <Image
      loading="lazy"
      {...rest}
      src={imgSrc || getAssetPath(ContainerType.AVATARS, src as string)}
      onError={() => {
        setImgSrc(defaultImageSrc)
      }}
    />
  )
}
