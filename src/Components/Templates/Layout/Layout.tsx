import { routes, ProtectedRouteType } from 'Components/Routes/routes'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { Color } from 'styles/Enums'
import { AppBarAndDrawer } from 'Components/AppBar/AppBar'

type Props = {
  children: React.ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  const router = useRouter()

  // 未ログイン時にNavbarを表示しないためroutesのGuestOnlyでハンドリング
  const matchedRoute = routes.filter((route) => router.route == route.path)[0]

  let isDisplayNavbar: boolean
  if (matchedRoute != undefined) {
    isDisplayNavbar = matchedRoute.protected != ProtectedRouteType.GuestOnly
  } else {
    isDisplayNavbar = false
  }

  return (
    <>
      {isDisplayNavbar ? (
        <AppBarAndDrawer>
          <main style={{ backgroundColor: Color.Background }}>{children}</main>
        </AppBarAndDrawer>
      ) : (
        <main style={{ backgroundColor: Color.Background }}>{children}</main>
      )}
    </>
  )
}

export default Layout
