import { IService } from '@kubevious/ui-framework'

export type RuleStatus = {
    script?: string;
    target?: string;
    name?: string;
    propagate?: boolean;
    shape?: string;
    color?: string;
    item_count?: number;
    error_count?: number;
    enabled?: boolean;
    is_current?: boolean;
};


export type DnOptions = {
    relativeTo?: string;
};


export interface RuleItem {
    dn: string;
    id?: number;
    errors?: number;
    warnings?: number;
    options?: DnOptions;
    markers?: string[];
}

export type RuleLog = {
    kind: string;
    msg: {
        source: string[];
        msg: string;
    };
};

export type RuleResult = {
    name?: string;
    items: RuleItem[];
    item_count: number;
    is_current?: boolean;
    logs: RuleLog[];
};


export interface RuleResultSubscriber
{ 
    update: (ruleName : string) => void,
    close: () => void
}

export interface IRuleService extends IService {
    backendFetchRuleList(cb: (data: any) => any) : void;
    backendFetchRule(id: string, cb: (data: any) => any) : void;
    backendCreateRule(config: any, name: string, cb: (data: any) => any) : void;
    backendDeleteRule(id: string, cb: (data: any) => any) : void;
    backendExportItems(cb: (data: any) => any) : void;
    backendImportItems(rules: any, cb: (data: any) => any) : void;

    subscribeRuleStatuses(cb: ((items: RuleStatus[]) => void)) : void;
    subscribeRuleResult(cb: ((result: RuleResult) => void)) : RuleResultSubscriber;
}
