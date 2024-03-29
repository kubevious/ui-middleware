import { IService } from '../common-types'

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

export interface RulesExportData<TRuleConfig = RuleConfig> {
    kind: 'rules',
    items: TRuleConfig[]
}

export interface RulesImportData<TRuleConfig = RuleConfig> {
    data: RulesExportData<TRuleConfig>,
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
    clusterId?: string;
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
    update: (ruleName : string | null) => void,
    close: () => void
}

export interface IRuleService<TRuleConfig extends RuleConfig = RuleConfig> extends IService {
    getList: () => Promise<RuleListItem[]>;
    getItem: (name: string) => Promise<TRuleConfig | null>;
    createItem: (config: TRuleConfig, name: string) => Promise<TRuleConfig>;
    deleteItem: (name: string) => Promise<void>;
    exportItems: () => Promise<RulesExportData<TRuleConfig>>;
    importItems: (data: RulesImportData<TRuleConfig>) => Promise<void>;

    getItemStatuses: () => Promise<RuleStatus[]>;
    getItemResult: (name: string) => Promise<RuleResult>;

    subscribeItemStatuses: (cb: (items: RuleStatus[]) => void) => void;
    subscribeItemResult: (cb: (result: RuleResult) => void) => RuleResultSubscriber;
}

