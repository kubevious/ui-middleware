export interface Alert {
    id: string;
    severity: string;
    msg: string;
    source?: AlertSource;
}

export declare type AlertSource = {
    kind?: AlertSourceKind;
} | (AlertValidatorSource | AlertRuleSource);

export declare enum AlertSourceKind {
    validator = "validator",
    rule = "rule"
}
export interface AlertValidatorSource {
    kind: AlertSourceKind.validator;
    id: string;
}
export interface AlertRuleSource {
    kind: AlertSourceKind.rule;
    id: string;
}