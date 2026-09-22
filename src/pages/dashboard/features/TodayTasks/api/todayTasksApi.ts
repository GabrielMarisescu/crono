import { dashboardMockData } from '../../../mocks/dashboardMockData'
import { mockHttpRequest } from '../../../api/mockHttpClient'

export const todayTasksApi = {
  getTodayTasks: () => mockHttpRequest(() => dashboardMockData.todayTasks),
}
