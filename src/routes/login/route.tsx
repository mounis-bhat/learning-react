import {
  createFileRoute,
  getRouteApi,
  useNavigate
} from "@tanstack/react-router"
import { flushSync } from "react-dom"
import { z } from "zod"
import { useAuth } from "../../hooks/useAuth"

export const Route = createFileRoute("/login")({
  validateSearch: z.object({
    redirect: z.string().catch("/")
  }),
  component: () => <Login />
})

const routeApi = getRouteApi("/login")

function Login() {
  const auth = useAuth()
  const navigate = useNavigate()
  const search = routeApi.useSearch()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    flushSync(() => {
      auth.setToken("token")
    })
    localStorage.setItem("token", "token")
    navigate({ to: search.redirect })
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Login</button>
    </form>
  )
}
