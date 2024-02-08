import { createRootRouteWithContext, Outlet } from "@tanstack/react-router"
import { AuthContext } from "../context/Auth"

interface MyRouterContext {
  auth: AuthContext
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <main className="min-h-svh bg-gradient-to-l  from-sky-900 to-cyan-600 dark:from-neutral-950 dark:to-cyan-950 dark:text-white">
      <Outlet />
    </main>
  )
})
