interface HistoryResult
{
    entries: HistoryEntry[]
}

interface HistoryEntry
{
    snapshotId: string,
    date: string,
    present: boolean,

    node?: HistoryEntryNode,
    props?: string[]
}

interface HistoryEntryNode
{
    markers?: string[],
    alertCount: {
        warn: number,
        error: number
    }
}