import { User } from 'Entity/User'

/** 企業 */
export interface Org {
  /** 担当者ID */
  id?: number

  orgId: string

  /** エージェント名 */
  orgName: string

  /** コード */
  postCode: string

  /** コード */
  officeLocation: string

  /** 電話番号 */
  phoneNumber: string

  /** 作成日 */
  createdAt: string

  users?: User[]
}
