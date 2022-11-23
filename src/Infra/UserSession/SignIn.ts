import { axiosInstance } from 'Infra/axios'
import { FirebaseError } from '@firebase/util'
import * as firebaseAuth from 'firebase/auth'
import { firebaseAuthErrorHandler } from 'Infra/lib/FirebaseAuthErrorHandler'
import { User } from 'Entity/User'
// Firebase
interface Params {
  email: string
  password: string
}

export const signInWithEmailAndPassword: ({
  email,
  password,
}: Params) => Promise<firebaseAuth.User | null> = async ({
  email,
  password,
}: Params) => {
    const auth = firebaseAuth.getAuth()
    return await firebaseAuth
      .signInWithEmailAndPassword(auth, email, password)
      .then((r) => r.user)
      .catch((e: FirebaseError) => Promise.reject(firebaseAuthErrorHandler(e)))
  }

// Server
type Param = {
  token: string
}

type Response = {
  user: User
}

export const signInToServer = async ({ token }: Param): Promise<Response> => {
  return await axiosInstance('Default')
    .put<Response>('/api/signin', {
      token: token,
    })
    .then((r) => r.data)
}
