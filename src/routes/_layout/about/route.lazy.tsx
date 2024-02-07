import { Link, createLazyFileRoute } from "@tanstack/react-router"

interface LoaderData {
  title: string
  body: string
}

export const Route = createLazyFileRoute("/_layout/about")({
  component: () => <About />
})

function About() {
  const data: LoaderData = Route.useLoaderData()
  return (
    <main>
      <Link to="/">Go to Index</Link>
      <p>
        {data.title} - {data.body}
      </p>
      <Link from="/about" search={({ page }) => ({ page: page + 1 })}>
        Next Page
      </Link>
    </main>
  )
}
