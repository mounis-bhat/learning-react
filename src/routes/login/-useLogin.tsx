import { flushSync } from "react-dom"
import { baseURL } from "../../lib/globals"
import { useAuth } from "../../hooks/useAuth"
import { useNavigate } from "@tanstack/react-router"

export function useLogin() {
  const auth = useAuth()
  const navigate = useNavigate()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const email = (e.target as HTMLFormElement).email.value
    const password = (e.target as HTMLFormElement).password.value

    const path = new URL("/auth/login", baseURL)

    const request = new Request(path.toString(), {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    })

    fetch(request)
      .then(res => {
        if (!res.ok) throw new Error("Failed to login")
        return res.json()
      })
      .then(data => {
        flushSync(() => {
          auth.setToken(data.token)
        })
        localStorage.setItem("token", data.token)
        navigate({ to: "/" })
      })
      .catch(err => {
        console.error(err)
      })
  }

  return handleSubmit
}
