import { createFileRoute } from "@tanstack/react-router"
import { query } from "../../../lib/query"

export const Route = createFileRoute("/_layout/about")({
  loader: params =>
    query({
      endpoint: `/notes`,
      context: params.context.auth,
      signal: params.abortController.signal
    })
})
