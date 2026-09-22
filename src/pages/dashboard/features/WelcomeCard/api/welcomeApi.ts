import { dashboardMockData } from '../../../mocks/dashboardMockData'
import { mockHttpRequest } from '../../../api/mockHttpClient'

export const welcomeApi = {
  getWelcome: () => mockHttpRequest(() => dashboardMockData.welcome),
}
