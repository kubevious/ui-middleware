import { Promise } from 'the-promise';
import { IService } from '../common-types'

export interface IClusterReportingStatusService extends IService {

    fetchClusterReportStatus() : Promise<ClusterReportingStatus>;

    subscribeClusterReportStatus(cb: ((value: ClusterReportingStatus) => void)) : IService;
    
}


export interface ClusterReportingStatus {
    has_ready_snapshots: boolean;
    has_reported_snapshots: boolean;
    snapshots_in_queue: number;
    current_snapshot_id?: string;
    current_snapshot_date?: string;
    agent_version?: string;
    latest_snapshot_id?: string;
    latest_snapshot_date?: string;
}