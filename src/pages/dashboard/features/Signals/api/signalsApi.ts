import { dashboardMockData } from '../../../mocks/dashboardMockData'
import { mockHttpRequest } from '../../../api/mockHttpClient'

export const signalsApi = {
  getSignals: () => mockHttpRequest(() => dashboardMockData.signals),
}
