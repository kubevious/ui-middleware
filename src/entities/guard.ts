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

export interface ChangePackageDeletion
{
    apiVersion: string,
    kind: string,
    namespace?: string,
    name: string,
}

export interface ChangePackageChart
{
    namespace: string,
    name: string,
}

export enum ValidationState {
    pending = 'pending',
    scheduling = 'scheduling',
    running = 'running',
    failed = 'failed',
    completed = 'completed',
}

export interface ChangePackageSummary
{
    createdCount: number,
    deletedCount: number,
}
