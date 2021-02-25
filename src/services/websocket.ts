import { IService } from '@kubevious/ui-framework'

export interface IWebSocketService extends IService {
    subscribe(target: any, cb: (value: any) => any) : WebSocketSubscription;
    scope(cb: (value: any, target: WebSocketTarget) => any) : WebSocketScope;
}

export type WebSocketTarget = Record<string, any>;
export interface WebSocketSubscription {
    close() : void
}

export interface WebSocketScope
{
    close() : void;
    subscribe(target: WebSocketTarget) : void;
    unsubscribe(target: WebSocketTarget) : void;
    replace(newTargets: WebSocketTarget[]) : void;
}