import Firebase from 'Infra/Firebase'

export const signOut: () => Promise<void> = async () => {
  return await Firebase.instance.auth.signOut()
}
