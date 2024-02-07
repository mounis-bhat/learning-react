import { Link, createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/_layout/")({
  component: () => <Index />
})

function Index() {
  return (
    <Link to="/about" search={{ page: 1 }}>
      Go to About
    </Link>
  )
}
