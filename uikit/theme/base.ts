import { css } from 'styled-components'
import { MediaQueries, Breakpoints, Spacing, Grids } from './types'

export enum MediaQuery {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
  nav = 'nav',
  mobile = 'mobile',
  tablet = 'tablet',
  desktop = 'desktop'
}

export const breakpointMap: { [key: string]: number } = {
  xs: 370,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536
}

const breakpoints: Breakpoints = Object.values(breakpointMap).map((breakpoint) => `${breakpoint}px`)

export const mediaQueries: MediaQueries = {
  xs: `@media screen and (min-width: ${breakpointMap.xs}px)`,
  sm: `@media screen and (min-width: ${breakpointMap.sm}px)`,
  md: `@media screen and (min-width: ${breakpointMap.md}px)`,
  lg: `@media screen and (min-width: ${breakpointMap.lg}px)`,
  xl: `@media screen and (min-width: ${breakpointMap.xl}px)`,
  nav: `@media screen and (min-width: ${breakpointMap.lg}px)`,
  xsMobile: `@media screen and (max-width: ${breakpointMap.xs}px)`,
  mobile: `@media screen and (max-width: ${breakpointMap.sm}px)`,
  tablet: `@media screen and (max-width: ${breakpointMap.md}px)`,
  desktop: `@media screen and (max-width: ${breakpointMap.xl}px)`
}

export const shadows = {
  level1: '0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)',
  active: '0px 0px 0px 1px #12FFB8, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)',
  success: '0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)',
  warning: '0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)',
  focus: '0px 0px 0px 1px rgba(74, 74, 104, 0.1), 0px 0px 0px 3px #12FFB8',
  inset: 'inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)'
}

const spacing: Spacing = [0, 4, 8, 16, 24, 32, 48, 64]

export const gridsMap: {
  [key: string]: { gridColumns: number }
} = {
  mobile: { gridColumns: 6 },
  desktop: { gridColumns: 12 }
}

const grids: Grids = {
  mobile: `grid-template-columns: repeat(${gridsMap.mobile.gridColumns}, minmax(0, 1fr));
            grid-gap: 20px;
            `,
  desktop: `grid-template-columns: repeat(${gridsMap.desktop.gridColumns}, minmax(0, 1fr));
            grid-gap: 24px;
            `
}

const gridLayout = css`
  display: grid;
  ${({ theme }) => theme.mediaQueries.xs} {
    ${grids.mobile};
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    ${grids.desktop};
  }
`

const radii = {
  primary: '15px',
  small: '4px',
  default: '16px',
  card: '32px',
  circle: '50%'
}

const zIndices = {
  dropdown: 10,
  modal: 100,
  searchResultsContainer: 1202,
  modalOverlay: 1200,
  walletSidePanel: 1099,
  walletSidePanelOverlay: 1098,
  navbar: 997,
  defaultDrawer: 996,
  filtersDrawer: 899,
  toast: 1203
}

const backgrounds = {
  primary: '#000'
}

export default {
  siteWidth: 1215,
  breakpoints,
  mediaQueries,
  spacing,
  shadows,
  radii,
  zIndices,
  backgrounds,
  grids,
  gridLayout,
  MediaQuery
}
