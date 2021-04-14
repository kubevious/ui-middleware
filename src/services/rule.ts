import { IService } from '@kubevious/ui-framework'

export interface RuleListItem {
    name: string,
    enabled: boolean
}

export interface RuleConfig {
    name: string;
    target: string;
    script: string;
    enabled: boolean;
}

export interface RulesExportData {
    kind: 'rules',
    items: RuleConfig[]
}

export interface RulesImportData {
    data: RulesExportData,
    deleteExtra?: boolean
}

export interface RuleStatus {
    name: string;
    enabled: boolean;
    is_current: boolean;
    error_count?: number;
    item_count?: number;
};

export interface RuleResultItem {
    dn: string;
    errors?: number;
    warnings?: number;
    markers?: string[];
}

export interface RuleResultLog {
    kind: string;
    msg: {
        source: string[];
        msg: string;
    };
};

export type RuleResult = {
    name: string;
    items: RuleResultItem[];
    is_current: boolean;
    error_count?: number;
    logs: RuleResultLog[];
};


export interface RuleResultSubscriber
{ 
    update: (ruleName : string) => void,
    close: () => void
}

export interface IRuleService<TRuleConfig extends RuleConfig = RuleConfig> extends IService {
    getRuleList() : Promise<RuleListItem[]>;
    getRule(name: string) : Promise<TRuleConfig | null>;
    createRule(config: TRuleConfig, name: string) : Promise<TRuleConfig>;
    deleteRule(name: string) : Promise<void>;
    exportRules() : Promise<RulesExportData>;
    importRules(data: RulesImportData) : Promise<void>;

    getRulesStatuses() : Promise<RuleStatus[]>;
    getRuleResult(name: string) : Promise<RuleResult>;

    subscribeRuleStatuses(cb: ((items: RuleStatus[]) => void)) : void;
    subscribeRuleResult(cb: ((result: RuleResult) => void)) : RuleResultSubscriber;
}
