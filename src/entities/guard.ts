import { Alert } from "./alert";

export interface ValidationObjectIssues
{
    dn: string,
    alerts: Alert[],
}

export type ValidationIssues = ValidationObjectIssues[];



export interface ValidationStateSummary
{
    issues: {
        raised: ValidationStateAlerts,
        cleared: ValidationStateAlerts,
    }
}

export interface ValidationStateAlerts
{
    errors: number,
    warnings: number,
}