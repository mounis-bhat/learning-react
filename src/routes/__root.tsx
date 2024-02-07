import { createRootRouteWithContext, Outlet } from "@tanstack/react-router"
import { AuthContext } from "../context/Auth"

interface MyRouterContext {
  auth: AuthContext
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <main className="min-h-svh text-white dark:bg-neutral-800">
      <Outlet />
    </main>
  )
})
