import { IService } from '@kubevious/ui-framework'

export interface IWebSocketService extends IService {
    subscribe(target: any, cb: (data: any) => any) : any;
    scope(cb: (value: any, target?: any) => any) : any;
}

