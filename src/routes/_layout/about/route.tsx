import { z } from "zod";
import { createFileRoute } from "@tanstack/react-router";

const validateSearch = z.object({
  page: z.number().int().nonnegative().catch(1),
});

export const Route = createFileRoute("/_layout/about")({
  validateSearch,
  loaderDeps: ({ search: { page } }) => ({ page }),
  loader: async ({ deps: { page }, abortController }) =>
    fetch("https://jsonplaceholder.typicode.com/posts/" + page, {
      signal: abortController.signal,
    }).then((res) => res.json()),
});
