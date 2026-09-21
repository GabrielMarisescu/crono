import type { ComponentType } from 'react'
import { DashboardPage } from '../pages'

export type AppRoute = {
  path: string
  label: string
  title: string
  Component: ComponentType
}

export const routes: AppRoute[] = [
  {
    path: '/dashboard',
    label: 'Dashboard',
    title: 'Crono Dashboard',
    Component: DashboardPage,
  },
]

export const defaultRoute = routes[0]
