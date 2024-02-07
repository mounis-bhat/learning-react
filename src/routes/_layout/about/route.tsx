import { z } from "zod"
import { createFileRoute } from "@tanstack/react-router"
import { query } from "../../../lib/query"

const validateSearch = z.object({
  page: z.number().int().nonnegative().catch(1)
})

export const Route = createFileRoute("/_layout/about")({
  validateSearch,
  loaderDeps: params => ({ page: params.search.page }),
  loader: params =>
    query({
      endpoint: `/posts/${params.deps.page}`,
      context: params.context.auth,
      signal: params.abortController.signal
    })
})
