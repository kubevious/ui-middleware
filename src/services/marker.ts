import { IService } from '@kubevious/ui-framework'


export type MarkerStatus = {
    script?: string;
    target?: string;
    name?: string;
    propagate?: boolean;
    shape?: string;
    color?: string;
    item_count?: number;
    error_count?: number;
    enabled?: boolean;
    is_current?: boolean;
};

export type DnOptions = {
    relativeTo?: string;
};

export interface MarkerItem {
    dn: string;
    id?: number;
    errors?: number;
    warnings?: number;
    options?: DnOptions;
    markers?: string[];
};

export type MarkerLog = {
    kind: string;
    msg: {
        source: string[];
        msg: string;
    };
};

export type MarkerResult = {
    name?: string;
    items: MarkerItem[];
    item_count: number;
    is_current?: boolean;
    logs: MarkerLog[];
};

export interface IMarkerService extends IService {
    backendFetchMarkerList(cb: (data: any) => any) : void;
    backendFetchMarker(id: string, cb: (data: any) => any) : void;
    backendCreateMarker(config: any, targetName: string, cb: (data: any) => any) : void;
    backendDeleteMarker(id: string, cb: (data: any) => any) : void;
    backendExportItems(cb: (data: any) => any) : void;
    backendImportItems(markers: any, cb: (data: any) => any) : void;

    subscribeMarkerStatuses(cb: ((items: MarkerStatus[]) => void)) : void;
    subscribeMarkerResult(name: string | null, cb: ((result: MarkerResult) => void)) : void;
}

