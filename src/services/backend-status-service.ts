import { IService } from '../common-types'

export interface IBackendStatusService extends IService {

    getVersion() : Promise<BackendVersionResponse>
    getMetrics() : Promise<BackendMetricsResponse>
    
}

export interface BackendMetricItem {
    category: string;
    name: string;
    value: string | number | boolean | Date;
}

export interface BackendMetricsResponse {
    metrics: BackendMetricItem[];
}

export interface BackendVersionResponse {
    version: string;
}