import { createLazyFileRoute } from "@tanstack/react-router"
import { useLogin } from "./-useLogin"

export const Route = createLazyFileRoute("/login")({
  component: () => <Login />
})

function Login() {
  const handleSubmit = useLogin()

  return (
    <section className="flex min-h-screen items-center justify-center">
      <div className="flex max-w-4xl items-center rounded-2xl bg-neutral-200 p-5 shadow-lg dark:bg-neutral-950">
        <div className="px-8">
          <h2 className="text-3xl font-bold text-cyan-900 dark:text-cyan-500">
            Login
          </h2>
          <p className="py-4 text-sm text-cyan-900 dark:text-cyan-500">
            Welcome back! Please login to your account.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              className="rounded-md border p-2 dark:bg-neutral-800 dark:text-neutral-200"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <input
              className="w-full rounded-md border p-2 dark:bg-neutral-800 dark:text-neutral-200"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <button
              className="rounded-md border bg-cyan-900 py-2 font-medium text-white dark:bg-cyan-500"
              type="submit"
            >
              Login
            </button>
          </form>

          <div className="mt-6 grid grid-cols-3 items-center text-neutral-400">
            <hr className="text-neutral-400" />
            <p className="text-center text-sm">OR</p>
            <hr className="text-neutral-400" />
          </div>

          <div className="mt-3 flex items-center justify-between text-xs text-cyan-900 dark:text-cyan-500">
            <p>Don&apos;t have an account?</p>
            <button className="rounded-md border border-cyan-900 bg-neutral-200 px-5 py-2 dark:bg-neutral-900">
              Register
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
