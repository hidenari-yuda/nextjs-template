import { User } from 'Entity/User'
import { atom } from 'recoil'

export const authrizedUserAtom = atom<User | null>({
  default: null,
  key: 'authrizedUserAtom',
})
