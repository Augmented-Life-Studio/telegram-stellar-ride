import styled from 'styled-components'
import { layout, LayoutProps, space, SpaceProps, border, BorderProps } from 'styled-system'

const ThumbnailVideo = styled.video<SpaceProps & LayoutProps & BorderProps>`
  object-fit: cover;
  object-position: center;
  ${space}
  ${layout}
  ${border}
`
export default ThumbnailVideo
