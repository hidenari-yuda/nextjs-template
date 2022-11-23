type RouteConfig = {
  path: string
  protected: ProtectedRouteType | null
}

export enum ProtectedRouteType {
  GuestOnly,
  UserOnly,
}

export const routes: RouteConfig[] = [
  {
    // ログインページ
    path: '/signin',
    protected: ProtectedRouteType.GuestOnly,
  },
  {
    // トップページ
    path: '/',
    protected: ProtectedRouteType.UserOnly,
  },
]
