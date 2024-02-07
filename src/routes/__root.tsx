import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { AuthContext } from "../context/Auth";

interface MyRouterContext {
  auth: AuthContext;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <main className="min-h-svh dark:bg-neutral-800 text-white">
      <Outlet />
    </main>
  ),
});
