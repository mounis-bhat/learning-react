import {
  createLazyFileRoute,
  getRouteApi,
  useNavigate
} from "@tanstack/react-router"
import { useAuth } from "../../hooks/useAuth"
import { flushSync } from "react-dom"

export const Route = createLazyFileRoute("/login")({
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
