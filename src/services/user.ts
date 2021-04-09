import { IService } from '@kubevious/ui-framework'

export interface IUserService extends IService {
    accessToken(): string
    userData(): string
}
