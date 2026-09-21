import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import { defaultRoute, routes } from './routes'

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navigate replace to={defaultRoute.path} />} path="/" />
        {routes.map(({ Component, path }) => (
          <Route element={<Component />} key={path} path={path} />
        ))}
        <Route element={<Navigate replace to={defaultRoute.path} />} path="*" />
      </Routes>
    </BrowserRouter>
  )
}
