import { type AuthContext } from "../context/Auth"
import { baseURL } from "./globals"

interface Query {
  endpoint: string
  context: AuthContext
  signal: AbortSignal
  params?: {
    [key: string]: string
  }
}

// async function refresh(context: AuthContext) {
//   const response = await fetch("refresh-endpoint", {
//     method: "POST",
//     credentials: "include"
//   })

//   if (!response.ok) {
//     throw new Error("Failed to refresh token")
//   }

//   const { token } = await response.json()
//   context.setToken(token)
//   localStorage.setItem("token", token)
// }

export async function query(opts: Query) {
  const token = opts.context.token

  const url = new URL(opts.endpoint, baseURL)

  if (opts.params) {
    for (const [key, value] of Object.entries(opts.params)) {
      url.searchParams.set(key, value)
    }
  }

  const request = new Request(url.href, {
    headers: { Authorization: `Bearer ${token}` },
    signal: opts.signal
  })

  const response = await fetch(request)

  // if (response.status === 403) {
  //   try {
  //     await refresh(opts.context)
  //     return query(opts)
  //   } catch (error) {
  //     throw new Error("Failed to refresh token")
  //   }
  // }

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  return response.json()
}
