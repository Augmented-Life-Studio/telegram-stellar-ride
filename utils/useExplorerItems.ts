import { useState } from 'react'

const ITEMS_TO_FETCH = 20

export const useExplorerItems = (
  initialItemsToFetch?: number
): {
  itemsToFetch: number
  onLoadMoreItems: () => NodeJS.Timeout
} => {
  const itemsToBeFetchAmount = initialItemsToFetch || ITEMS_TO_FETCH
  const [itemsToFetch, setItemsToFetch] = useState<number>(itemsToBeFetchAmount)

  const onLoadMoreItems = (): NodeJS.Timeout =>
    setTimeout(() => {
      setItemsToFetch(itemsToFetch + itemsToBeFetchAmount)
    }, 1000)

  return { itemsToFetch, onLoadMoreItems }
}
