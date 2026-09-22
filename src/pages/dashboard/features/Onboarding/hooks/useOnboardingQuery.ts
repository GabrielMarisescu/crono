import { useQuery } from '@tanstack/react-query'
import { onboardingApi } from '../api/onboardingApi'

export function useOnboardingQuery() {
  return useQuery({ queryFn: onboardingApi.getOnboarding, queryKey: ['dashboard', 'onboarding'] })
}
