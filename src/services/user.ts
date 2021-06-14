import { IService } from '../common-types'

export interface IUserService extends IService {
    authorizationHeader(): string,
    accessToken(): string,
    userData(): string,
    accessTokenData() : Record<string, any> | undefined,
}
