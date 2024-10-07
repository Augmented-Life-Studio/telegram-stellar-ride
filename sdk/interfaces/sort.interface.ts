export interface SortOption<SortKey> {
  label: string
  key: SortKey
  value: string
  default?: boolean
}

export enum SortDirection {
  ASCENDING = 'asc',
  DESCENDING = 'desc'
}

export interface SortChangeEvent {
  sortDirection: SortDirection
  key: string
}

export interface PaginationParams {
  skip?: number
  limit?: number
}

export interface SortParam<SortKey> {
  sortKey: SortKey
  sortDirection: SortDirection
}
