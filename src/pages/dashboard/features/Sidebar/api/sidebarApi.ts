import { dashboardMockData } from '../../../mocks/dashboardMockData'
import { mockHttpRequest } from '../../../api/mockHttpClient'

export const sidebarApi = {
  getSidebar: () => mockHttpRequest(() => dashboardMockData.sidebar),
}
