import { AddAccountModel } from './add-account-model'
import { AccountModel } from '../models/account'

export interface AddAccount {
  add (account: AddAccountModel): Promise<AccountModel>
}
