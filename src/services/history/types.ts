export interface HistoryNodeResult
{
    entries: HistoryNodeEntry[]
}

export interface HistoryHierarchyResult
{
    entries: HistoryHierarchyEntry[]
}

export interface HistoryNodeEntry
{
    snapshotId: string,
    date: string,
    notPresent?: boolean,

    flags?: string[],
    markers?: string[],
    alertCount?: {
        warn: number,
        error: number
    }
    props?: string[]
}

export interface HistoryHierarchyEntry extends HistoryNodeEntry
{
    dn: string,
}

export interface HistorySnapshotInfo
{ 
    snapshot_id: string;
}

export interface HistoryTimelinePoint {
    date: string;
    changes: number;
    error: number;
    warn: number;
}