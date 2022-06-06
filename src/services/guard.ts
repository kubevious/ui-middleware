import { IService } from '../common-types'
import { ValidationIssues, ValidationStateSummary, ChangePackageChart, ChangePackageDeletion } from '../entities/guard';
import { KubernetesObject } from '../entities/k8s';

export interface ChangePackageListItem {
    change_id: string,
    date: string,
    state: string,
    success?: boolean,
    summary?: ValidationStateSummary

}

export interface ChangePackageItemDetails {
    change_id: string,
    date: string,
    state: string,
    success?: boolean,
    
    charts: ChangePackageChart[],
    changes: KubernetesObject[],
    deletions: ChangePackageDeletion[],

    summary?: ValidationStateSummary
    newIssues?: ValidationIssues,
    clearedIssues?: ValidationIssues,
}

export interface IGuardService extends IService {
    getItems(lastId?: string) : Promise<ChangePackageListItem[]>;
    getDetails(id: string) : Promise<ChangePackageItemDetails | null>;
}
