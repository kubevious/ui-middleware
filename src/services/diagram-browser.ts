import { IService } from '../common-types'

export interface AlertCounter {
    error: number;
    warn: number;
}

export interface NodeConfig {
    dn: string;
    kind: string;
    rn: string;
    name?: string;
    order?: number;
    childrenCount: number;
    markers?: string[];
    flags?: string[];
    selfAlertCount: AlertCounter;
    alertCount: AlertCounter;
}


export type DiagramNodeChangeCallback = (dn: string, config: NodeConfig | null) => void;
export type DiagramChildrenChangeCallback = (parentDn: string, childrenDns: string[]) => void;

export interface IDiagramBrowserService extends IService
{
    subscribeToNodes(cb: DiagramNodeChangeCallback) : IDiagramBrowserServiceSubscriber
    subscribeToChildren(cb: DiagramChildrenChangeCallback) : IDiagramBrowserServiceSubscriber
}

export interface IDiagramBrowserServiceSubscriber extends IService
{
    update(dnList : string[]) : void;
}
