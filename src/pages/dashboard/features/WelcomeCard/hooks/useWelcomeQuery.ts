import { useQuery } from '@tanstack/react-query'
import { welcomeApi } from '../api/welcomeApi'

export function useWelcomeQuery() {
  return useQuery({ queryFn: welcomeApi.getWelcome, queryKey: ['dashboard', 'welcome'] })
}
