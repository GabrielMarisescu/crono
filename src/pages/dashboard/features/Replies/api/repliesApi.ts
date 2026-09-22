import { dashboardMockData } from '../../../mocks/dashboardMockData'
import { mockHttpRequest } from '../../../api/mockHttpClient'

export const repliesApi = {
  getReplies: () => mockHttpRequest(() => dashboardMockData.replies),
}
