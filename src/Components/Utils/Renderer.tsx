import { useMounted } from 'Components/Hooks/useMounted'
import { ProtectedRouteType, routes } from 'Components/Routes/routes'
import { useRouter } from 'next/router'
import { useUserSession } from 'Components/Hooks/useUserSession'

interface Props {
  children: React.ReactNode
}

export const Renderer: React.FC<Props> = ({ children }) => {
  const router = useRouter()
  const mounted = useMounted()
  const [{ isAuthenticated, isAuthLoading }] = useUserSession()

  if (!mounted) {
    return null
  }

  const matchedRoute = routes.filter((route) => router.route == route.path)[0]

  if (!matchedRoute) {
    return <p>404 NOT FOUND</p>
  }

  if (isAuthLoading) {
    return <></>
  }

  switch (matchedRoute.protected) {
    case ProtectedRouteType.UserOnly:
      if (!isAuthenticated) {
        router.push('/signin')
        return null
      }
      break

    case ProtectedRouteType.GuestOnly:
      if (isAuthenticated) {
        router.push('/')
        return null
      }
      break

    case null:
      break
  }

  return <>{children}</>
}
