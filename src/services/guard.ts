import { IService } from '../common-types'
import { ValidationIssues, ValidationStateSummary, ChangePackageChart, ChangePackageDeletion, ValidationState } from '../entities/guard';
import { KubernetesObject } from '../entities/k8s';

export interface ChangePackageListItem {
    change_id: string,
    date: string,
    state: ValidationState,
    success?: boolean,
    summary?: ValidationStateSummary

}

export interface ChangePackageItemDetails {
    change_id: string,
    date: string,
    state: ValidationState,
    success?: boolean,
    
    charts: ChangePackageChart[],
    changes: KubernetesObject[],
    deletions: ChangePackageDeletion[],

    summary?: ValidationStateSummary
    newIssues?: ValidationIssues,
    clearedIssues?: ValidationIssues,
}

export interface ChangePackageListResult
{
    totalCount: number,
    nextId?: string,
    items: ChangePackageListItem[],
}

export interface IGuardService extends IService {
    getItems(lastId?: string) : Promise<ChangePackageListResult>;
    getDetails(id: string) : Promise<ChangePackageItemDetails | null>;
}

