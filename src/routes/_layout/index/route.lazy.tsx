import { Link, createLazyFileRoute, useNavigate } from "@tanstack/react-router"
import { useAuth } from "../../../hooks/useAuth"

export const Route = createLazyFileRoute("/_layout/")({
  component: () => <Index />
})

function Index() {
  const auth = useAuth()
  const navigate = useNavigate()

  function handleLogout() {
    localStorage.clear()
    auth.setToken(null)
    navigate({
      to: "/login",
      search: { redirect: "/_layout/" }
    })
  }

  return (
    <main>
      <Link to="/about" search={{ page: 1 }}>
        Go to About
      </Link>
      <button onClick={handleLogout}>Log Out</button>
    </main>
  )
}
