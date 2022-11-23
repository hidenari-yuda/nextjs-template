export interface User {
  /** ユーザーID */
  id: number

  /** FirebaseID */
  firebase_id: string

  /** メールアドレス */
  email: string

  /** パスワード */
  password: string

  /** 名前 */
  name: string
}
