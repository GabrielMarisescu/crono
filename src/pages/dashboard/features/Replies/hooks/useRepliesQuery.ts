import { useQuery } from '@tanstack/react-query'
import { repliesApi } from '../api/repliesApi'

export function useRepliesQuery() {
  return useQuery({ queryFn: repliesApi.getReplies, queryKey: ['dashboard', 'replies'] })
}
