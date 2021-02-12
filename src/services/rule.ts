import { IService } from '@kubevious/ui-framework'

export interface IRuleService extends IService {
    backendFetchRuleList(cb: (data: any) => any) : void;
    backendFetchRule(id: string, cb: (data: any) => any) : void;
    backendCreateRule(config: any, name: string, cb: (data: any) => any) : void;
    backendDeleteRule(id: string, cb: (data: any) => any) : void;
    backendExportItems(cb: (data: any) => any) : void;
    backendImportItems(rules: any[], cb: (data: any) => any) : void;
}

