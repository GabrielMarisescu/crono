import { useQuery } from '@tanstack/react-query'
import { dashboardApi } from '../api/dashboardApi'

export function useDashboardQuery() {
  return useQuery({
    queryFn: dashboardApi.getDashboard,
    queryKey: ['dashboard'],
  })
}
