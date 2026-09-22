import { useQuery } from '@tanstack/react-query'
import { sidebarApi } from '../api/sidebarApi'

export function useSidebarQuery() {
  return useQuery({ queryFn: sidebarApi.getSidebar, queryKey: ['dashboard', 'sidebar'] })
}
