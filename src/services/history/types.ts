export interface HistoryNodeResult
{
    entries: HistoryNodeEntry[]
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