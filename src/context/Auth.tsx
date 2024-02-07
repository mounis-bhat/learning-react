import { ReactNode, createContext, useEffect, useState } from "react"

export interface AuthContext {
  isAuthenticated: boolean
  setToken: React.Dispatch<React.SetStateAction<string | null>>
  token: string | null
}

export const AuthContext = createContext<AuthContext | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const accessToken = localStorage.getItem("token")

  const [token, setToken] = useState<string | null>(accessToken || null)
  const isAuthenticated = !!token

  useEffect(() => {
    if (accessToken) setToken(accessToken)
  }, [accessToken])

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, setToken }}>
      {children}
    </AuthContext.Provider>
  )
}
