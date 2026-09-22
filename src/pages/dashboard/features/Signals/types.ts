import type { Signal } from '../../mocks/dashboardMockData'

export enum SignalResolution {
  Completed = 'completed',
  Deleted = 'deleted',
}

export const signalCategoryClasses: Record<Signal['category'], string> = {
  company: 'text-crono-blue',
  role: 'text-[#8846dc]',
  website: 'text-[#e769cb]',
}
