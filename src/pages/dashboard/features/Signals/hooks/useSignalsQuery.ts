import { useQuery } from '@tanstack/react-query'
import { signalsApi } from '../api/signalsApi'

export function useSignalsQuery() {
  return useQuery({ queryFn: signalsApi.getSignals, queryKey: ['dashboard', 'signals'] })
}
