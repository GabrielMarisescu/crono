import { useQuery } from '@tanstack/react-query'
import { performanceApi } from '../api/performanceApi'

export function usePerformanceQuery() {
  return useQuery({ queryFn: performanceApi.getPerformance, queryKey: ['dashboard', 'performance'] })
}
