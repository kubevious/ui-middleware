import { PropsKind, PropsId } from '@kubevious/entity-meta';

export interface ClusterSummaryPropsConfig {
    kind: PropsKind,
    id: PropsId,
    title: string,
    order: number,
    config: any[];
}