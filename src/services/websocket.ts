import { IService } from '@kubevious/ui-framework'

export interface IWebSocketService extends IService {
    subscribe(target: any, cb: (data: any) => any) : any;
    scope(cb: (data: any) => any) : any;
}

