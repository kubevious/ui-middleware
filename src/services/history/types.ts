export interface HistoryNodeResult
{
    entries: HistoryNodeEntry[]
}

export interface HistoryNodeEntry
{
    snapshotId: string,
    date: string,
    present: boolean,

    node?: HistoryNodeEntryNode,
    props?: string[]
}

export interface HistoryNodeEntryNode
{
    markers?: string[],
    alertCount: {
        warn: number,
        error: number
    }
}