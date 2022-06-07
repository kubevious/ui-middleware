import { IService } from '../common-types'
import { ValidationIssues,
         ChangePackageSummary,
         ValidationStateSummary,
         ChangePackageChart,
         ChangePackageDeletion,
         ValidationState } from '../entities/guard';
import { KubernetesObject } from '../entities/k8s';

export interface ChangePackageListItem {
    change_id: string,
    date: string,
    state: ValidationState,
    changeSummary: ChangePackageSummary,
    success?: boolean,
    validationSummary?: ValidationStateSummary
}

export interface ChangePackageItemDetails extends ChangePackageListItem {
    charts: ChangePackageChart[],
    changes: KubernetesObject[],
    deletions: ChangePackageDeletion[],

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

