import { Promise } from 'the-promise';
import { IService } from '../../common-types'

import { HistoryHierarchyResult, HistoryNodeResult, HistorySnapshotInfo, HistoryTimelinePoint } from './types';

export interface IHistoryService extends IService
{
    fetchHistoryTimelinePreview(clusterId: string) : Promise<HistoryTimelinePoint[]>;
    fetchHistoryTimeline(clusterId: string, from: Date, to: Date) : Promise<HistoryTimelinePoint[]>;

    fetchSnapshotAtDate(clusterId: string, date: Date) : Promise<HistorySnapshotInfo | null>;

    fetchNodeHistory(clusterId: string, dn: string) : Promise<HistoryNodeResult>;
    fetchHierarchyHistory(clusterId: string, dn: string) : Promise<HistoryHierarchyResult>;
}
