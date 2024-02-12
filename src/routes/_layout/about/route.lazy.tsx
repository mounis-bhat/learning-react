import { Link, createLazyFileRoute } from "@tanstack/react-router"

type Note = {
  id: number
  title: string
  content: string
  userId: number
  updatedAt: string | null
  createdAt: string
}

type LoaderData = Note[]

export const Route = createLazyFileRoute("/_layout/about")({
  component: () => <About />
})

function About() {
  const data: LoaderData = Route.useLoaderData()
  return (
    <main>
      <Link to="/">Go to Index</Link>
      {data.map(note => (
        <div key={note.id} className="my-4 rounded-md border p-4 shadow-md">
          <h2>{note.title}</h2>
          <p>{note.content}</p>
        </div>
      ))}
    </main>
  )
}
