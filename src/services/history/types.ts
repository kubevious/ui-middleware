export interface HistoryNodeResult
{
    entries: HistoryNodeEntry[];
}

export interface HistoryHierarchyResult
{
    entries: HistoryHierarchyEntry[];
}

export interface HistoryNodeEntry extends HistoryNodeEntryChanges
{
    snapshotId: string;
    date: string;
}
export interface HistoryHierarchyEntry
{
    snapshotId: string;
    date: string;

    nodes: HistoryHierarchyEntry[];
}

export interface HistoryHierarchyEntry extends HistoryNodeEntryChanges
{
    dn: string;
}

export interface HistoryNodeEntryChanges
{
    notPresent?: boolean,
    flags?: string[],
    markers?: string[],
    alertCount?: {
        warn: number,
        error: number
    }
    props?: string[]
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