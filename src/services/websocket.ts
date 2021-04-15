import { IService } from '../common-types'

export interface IWebSocketService extends IService {
    subscribe(target: WebSocketTarget, cb: (value: any) => any) : WebSocketSubscription;
    scope(cb: (value: any, target: WebSocketTarget) => any) : WebSocketScope;
    updateContext(updatedContext: WebSocketTarget) : void;
}

export type WebSocketTarget = Record<string, any>;

export interface WebSocketSubscription extends IService {
}

export interface WebSocketScope extends IService
{
    subscribe(target: WebSocketTarget) : void;
    unsubscribe(target: WebSocketTarget) : void;
    replace(newTargets: WebSocketTarget[]) : void;
}