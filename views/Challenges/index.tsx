import { ChallengesProps } from '@/hooks/useChallenges'
import useRefresh from '@/hooks/useRefresh'
import { App } from '@/sdk/interfaces'
import { Flex, Text, TextVariant } from '@/uikit'
import { ChallengeRow } from '@/uikit/components/ChallengeRow'
import { ThumbnailImage } from '@/uikit/components/ThumbnailImage'
import { ContainerType } from '@/utils/handleStaticAssetOperations'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import UseAnimations from 'react-useanimations'
import styled, { useTheme } from 'styled-components'
import infinity from 'react-useanimations/lib/infinity'
import { motion } from 'framer-motion'

const ListWrapper = styled(Flex)`
  flex-direction: column;
  flex: 1;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`

const MotionList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-bottom: 44px;
`

const getMapThumbnailComponent = (mapPath?: string) => (
  <ThumbnailImage assetPath={mapPath} containerType={ContainerType.LOGOS} borderRadius="8px" />
)

type ChallengesViewProps = Omit<ChallengesProps, 'notFound' | 'errorToastMessage'> & {
  game: App
}

export const LoadingComponent: React.FC<{ fullHeight?: boolean }> = ({ fullHeight }) => {
  const theme = useTheme()
  return (
    <Flex justifyContent="center" alignItems="center" padding={30} height={fullHeight ? '100%' : 'auto'}>
      <UseAnimations animation={infinity} strokeColor={theme.colors.white1} size={64} />
    </Flex>
  )
}

/**
 * This component renders the Challenges view for the Telegram mini-app.
 * It handles the following functionalities:
 * - Displays a list of challenges.
 * - Shows a loading component while data is being fetched.
 * - Animates the list of challenges on load.
 * - Navigates to a detailed view of a challenge when a challenge row is clicked.
 *
 * @component
 * @param {ChallengesViewProps} props - The props for the Challenges component.
 * @param {Array} props.challenges - The list of challenges to display.
 * @param {boolean} props.loadingFilteredData - Indicates if the filtered data is still loading.
 * @returns {JSX.Element} The rendered Challenges component.
 *
 * @example
 * <Challenges challenges={challengesData} loadingFilteredData={false} />
 *
 * @remarks
 * This component uses several hooks:
 * - `useRouter` for navigation.
 * - `useTranslation` for internationalization.
 * - `useRefresh` for refreshing data.
 *
 * The component conditionally renders a loading component or the list of challenges based on the loading state.
 */
const Challenges: React.FC<ChallengesViewProps> = ({ challenges, loadingFilteredData }) => {
  const { push } = useRouter()
  const { t } = useTranslation()
  const { slowRefresh } = useRefresh()

  return (
    <Flex flexDirection="column" alignItems="center" width="100%" flex="1" height="calc(100vh - 80px)">
      <Text mb="16px" style={{ width: '100%' }} textTransform="uppercase" variant={TextVariant.H4}>
        {t('challenges.title')}
      </Text>

      <ListWrapper>
        {loadingFilteredData ? (
          <LoadingComponent />
        ) : (
          <MotionList
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: 1 }}
            transition={{ duration: 0.3 }}
          >
            {challenges.map((challenge) => (
              <ChallengeRow
                key={challenge?.challengeId}
                onClickHandler={() => push({ pathname: `/challenges/${challenge?.challengeId}` })}
                {...{ challenge, getMapThumbnailComponent, t, slowRefresh }}
              />
            ))}
          </MotionList>
        )}
      </ListWrapper>
    </Flex>
  )
}

export default Challenges
