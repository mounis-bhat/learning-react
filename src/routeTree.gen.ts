/* eslint-disable */

/* prettier-ignore */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LoginRouteImport } from './routes/login/route'
import { Route as LayoutRouteImport } from './routes/_layout/route'
import { Route as LayoutAboutRouteImport } from './routes/_layout/about/route'
import { Route as LayoutIndexRouteImport } from './routes/_layout/index/route'

// Create/Update Routes

const LoginRouteRoute = LoginRouteImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const LayoutRouteRoute = LayoutRouteImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/_layout/route.lazy').then((d) => d.Route))

const LayoutAboutRouteRoute = LayoutAboutRouteImport.update({
  path: '/about',
  getParentRoute: () => LayoutRouteRoute,
} as any).lazy(() =>
  import('./routes/_layout/about/route.lazy').then((d) => d.Route),
)

const LayoutIndexRouteRoute = LayoutIndexRouteImport.update({
  path: '/',
  getParentRoute: () => LayoutRouteRoute,
} as any).lazy(() =>
  import('./routes/_layout/index/route.lazy').then((d) => d.Route),
)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_layout': {
      preLoaderRoute: typeof LayoutRouteImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      preLoaderRoute: typeof LoginRouteImport
      parentRoute: typeof rootRoute
    }
    '/_layout/': {
      preLoaderRoute: typeof LayoutIndexRouteImport
      parentRoute: typeof LayoutRouteImport
    }
    '/_layout/about': {
      preLoaderRoute: typeof LayoutAboutRouteImport
      parentRoute: typeof LayoutRouteImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  LayoutRouteRoute.addChildren([LayoutIndexRouteRoute, LayoutAboutRouteRoute]),
  LoginRouteRoute,
])
