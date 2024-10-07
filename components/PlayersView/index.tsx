import { Flex } from '@/uikit'
import { useEffect, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import InfiniteScroll from 'react-infinite-scroll-component'
import UseAnimations from 'react-useanimations'
import infinity from 'react-useanimations/lib/infinity'
import { useLazyRichScores } from '@/views/Leaderboard/leaderboard.logic'
import GeneralPlayerBox from '@/components/GeneralPlayerBox'
import { ScoresData, ScoresType } from './types'
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

export const LoadingComponent: React.FC<{ fullHeight?: boolean }> = ({ fullHeight }) => {
  const theme = useTheme()
  return (
    <Flex justifyContent="center" alignItems="center" padding={30} height={fullHeight ? '100%' : 'auto'}>
      <UseAnimations animation={infinity} strokeColor={theme.colors.white1} size={64} />
    </Flex>
  )
}

/**
 * This component renders the Players view for the Telegram mini-app.
 * It handles the following functionalities:
 * - Fetches player data based on the game and challenge parameters.
 * - Implements infinite scrolling to load more players.
 * - Displays a loading component while fetching data.
 * - Animates the list of players using motion effects.
 *
 * @component
 * @returns {JSX.Element} The rendered Players view component.
 *
 * @example
 * <PlayerView game={gameData} challenge={challengeData} type={ScoresType.CHALLENGE} />
 *
 * @remarks
 * This component uses several hooks and libraries:
 * - `useLazyRichScores` for fetching player scores.
 * - `useEffect` for handling side effects.
 * - `useState` for managing the number of items to fetch.
 * - `InfiniteScroll` for implementing infinite scrolling.
 * - `MotionList` for animating the list of players.
 *
 * The component conditionally renders a loading component or the list of players based on the loading state and the fetched data.
 */
const PlayerView: React.FC<ScoresData> = ({ game, challenge, type }) => {
  const [itemsToFetch, setItemsToFetch] = useState(10)

  const [getPlayers, { isLoading, data: players }] = useLazyRichScores()

  useEffect(() => {
    ;(async () => {
      getPlayers({
        leaderboardId: game.leaderboardId,
        limit: itemsToFetch,
        ...(type === ScoresType.CHALLENGE && {
          startedFrom: challenge.startDate,
          endedTo: challenge.endDate,
          map: challenge.map
        })
      })
    })()
  }, [itemsToFetch])

  return (
    <ListWrapper id="playersList">
      {isLoading && players.count === 0 ? (
        <LoadingComponent />
      ) : (
        <InfiniteScroll
          next={() => {
            setTimeout(() => {
              setItemsToFetch(itemsToFetch + 6)
            }, 1000)
          }}
          hasMore={itemsToFetch < players?.count}
          loader={<LoadingComponent />}
          dataLength={itemsToFetch}
          scrollThreshold={0.96}
          scrollableTarget="playersList"
        >
          <MotionList
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: 1 }}
            transition={{ duration: 0.3 }}
          >
            {players.results.map((player) => {
              return <GeneralPlayerBox key={player?.user?.userId} player={player} {...{ isLoading }} />
            })}
          </MotionList>
        </InfiniteScroll>
      )}
    </ListWrapper>
  )
}

export default PlayerView
