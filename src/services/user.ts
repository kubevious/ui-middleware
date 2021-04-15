import { IService } from '../common-types'

export interface IUserService extends IService {
    accessToken(): string
    userData(): string
}
