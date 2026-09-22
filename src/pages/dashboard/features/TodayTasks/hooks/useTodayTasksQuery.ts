import { useQuery } from '@tanstack/react-query'
import { todayTasksApi } from '../api/todayTasksApi'

export function useTodayTasksQuery() {
  return useQuery({ queryFn: todayTasksApi.getTodayTasks, queryKey: ['dashboard', 'today-tasks'] })
}
