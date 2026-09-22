import { dashboardMockData } from '../mocks/dashboardMockData'
import { mockHttpRequest } from './mockHttpClient'

export type DashboardData = typeof dashboardMockData

export const dashboardApi = {
  getDashboard: () => mockHttpRequest<DashboardData>(() => dashboardMockData),
}
